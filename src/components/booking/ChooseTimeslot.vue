<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";
import CalendarWidget from "../../components/admin/CalendarWidget.vue";
import SetAppointmentCalendarItem from "../../components/patient/SetAppointmentCalendarItem.vue";
import { useSetAppointmentCalendarStore } from "../../stores/setAppointmentCalendar";
import TimeslotsWidget from "../admin/TimeslotsWidget.vue";
import SetAppointmentTimeslotsItem from "../patient/SetAppointmentTimeslotsItem.vue";
import getDateOfTimeslot from "../../composables/calendar/getDateOfTimeslot";
import getTimeslots from "../../composables/calendar/getTimeslots";
import getUnixSecondsFromObject from "../../composables/calendar/getUnixSecondsFromObject";
import getMonthIndex from "../../composables/calendar/getMonthIndex";
import BoxDialog from "../../components/dialogs/BoxDialog.vue";

/* Logic for reactive calendar items */
const selected = reactive({
  month: "",
  year: "",
});

const setAppointmentCalendarStore = useSetAppointmentCalendarStore();
const calendarItems = ref([]);
const isFinishLoading = ref(false);

onMounted(async () => {
  const currDate = new Date();

  // Make sure we are getting the current month
  // from UTC+8 (Asia/Manila).
  selected.month = currDate.toLocaleString("en-US", {
    timeZone: "Asia/Manila",
    month: "long",
  });

  // Make sure we are getting the current year
  // from UTC+8 (Asia/Manila).
  selected.year = currDate.toLocaleString("en-US", {
    timeZone: "Asia/Manila",
    year: "numeric",
  });

  await setAppointmentCalendarStore.setMonthAndYear(
    selected.month,
    selected.year
  );
  for (const n of Array(setAppointmentCalendarStore.getDayCount).keys()) {
    const currentDate = n + 1;
    let closedSlotsOnGivenDate = 0;
    let takenSlotsOnGivenDate = 0;

    setAppointmentCalendarStore.getUnavailableSlots.map((unavailableSlot) => {
      if (getDateOfTimeslot(unavailableSlot.timeslot) === currentDate) {
        if (unavailableSlot.status === "closed") closedSlotsOnGivenDate++;
        else if (unavailableSlot.status === "taken") takenSlotsOnGivenDate++;
      }
    });

    calendarItems.value.push({
      date: n + 1,
      selected: false,
      closedSlotCount: closedSlotsOnGivenDate,
      takenSlotCount: takenSlotsOnGivenDate,
    });
  }

  // Make sure setMonthAndYear is finished before we show the page.
  await nextTick();
  isFinishLoading.value = true;
});

const onCalendarItemClicked = (newSelectedItem) => {
  // Don't allow clicking if the slots are full.
  if (
    newSelectedItem.closedSlotCount + newSelectedItem.takenSlotCount ===
    getTimeslots().length
  )
    return;

  const currSelectedItem = calendarItems.value.find(
    (calendarItem) => calendarItem.selected === true
  );
  if (currSelectedItem === newSelectedItem) {
    calendarItems.value = calendarItems.value.map((calendarItem) => ({
      ...calendarItem,
      selected: false,
    }));
    return;
  }

  calendarItems.value = calendarItems.value.map((calendarItem) => ({
    ...calendarItem,
    selected: calendarItem === newSelectedItem ? true : false,
  }));
};

// Monitor selected date, so we can conditionally show
// the timeslots for a given date.
const selectedDate = computed(() => {
  const selectedItem = calendarItems.value.find(
    (calendarItem) => calendarItem.selected === true
  );

  if (selectedItem) return selectedItem.date;
  return "";
});

const onChangeMonthOrYear = async () => {
  // Hide the calendar temporarily.
  isFinishLoading.value = false;

  // Set new month in the store.
  await setAppointmentCalendarStore.setMonthAndYear(
    selected.month,
    selected.year
  );

  // Reset calendar items, then build
  // a new list of calendar items with all
  // items unselected.
  calendarItems.value = [];
  for (const n of Array(setAppointmentCalendarStore.getDayCount).keys()) {
    calendarItems.value.push({
      date: n + 1,
      selected: false,
    });
  }

  // Wait for all request to flush,
  // then show the calendar again.
  await nextTick();
  isFinishLoading.value = true;
};

/* Logic for reactive timeslot items */
const timeslotItems = ref([]);

// Load timeslot items.
onMounted(() => {});

// Split timeslots to morning and afternoon slots for our template.
const morningTimeslotItems = computed(() => {
  return timeslotItems.value.filter((timeslotItem) => timeslotItem.hours < 12);
});

const afternoonTimeslotItems = computed(() => {
  return timeslotItems.value.filter((timeslotItem) => timeslotItem.hours >= 12);
});

const onTimeslotItemClicked = (newTimeslotItemClicked) => {
  if (newTimeslotItemClicked.closed || newTimeslotItemClicked.taken) return;

  const lastTimeslotItemClicked = timeslotItems.value.find(
    (timeslotItem) => timeslotItem.selected === true
  );

  if (lastTimeslotItemClicked === newTimeslotItemClicked) {
    timeslotItems.value = timeslotItems.value.map((timeslotItem) => ({
      ...timeslotItem,
      selected: false,
    }));

    return;
  }

  timeslotItems.value = timeslotItems.value.map((timeslotItem) => {
    return {
      ...timeslotItem,
      selected: timeslotItem === newTimeslotItemClicked ? true : false,
    };
  });
};

// Reset our timeslots whenever the date changes.
watch(selectedDate, () => {
  if (selectedDate.value !== "")
    timeslotItems.value = getTimeslots().map((timeslot) => {
      const timeInUnixSecs = getUnixSecondsFromObject(
        selectedDate.value,
        getMonthIndex(selected.month) + 1,
        parseInt(selected.year),
        timeslot[0],
        timeslot[1]
      );

      let isClosed = false;
      let isTaken = false;

      setAppointmentCalendarStore.getUnavailableSlots.forEach(
        (unavailableSlot) => {
          // If our timestamp is in the list, color our time slot.
          if (unavailableSlot.timeslot === timeInUnixSecs.toString()) {
            if (unavailableSlot.status === "closed") isClosed = true;
            else if (unavailableSlot.status === "taken") isTaken = true;
          }
        }
      );

      return {
        hours: timeslot[0],
        minutes: timeslot[1],
        selected: false,
        closed: isClosed,
        taken: isTaken,
        timestamp: timeInUnixSecs,
      };
    });
});

const selectedTimeslot = computed(() => {
  const timeslotItem = timeslotItems.value.find(
    (timeslotItem) => timeslotItem.selected === true
  );

  if (timeslotItem) return timeslotItem.timestamp;
  else return "";
});

/* Logic for Have an Account Dialog */
const isAccountExistsDialogVisible = ref(false);

const onNext = () => {
  isAccountExistsDialogVisible.value = true;
};
</script>

<template>
  <div
    class="max-w-5xl mx-auto px-6 md:grid md:grid-cols-[auto_1fr] gap-12 mt-14 mb-20"
  >
    <!-- Legends column -->
    <div>
      <div
        class="border border-sky-700 pl-4 pr-12 py-2 mb-3 md:mb-0 max-w-fit md:max-w-none"
      >
        <div class="mb-3">Legends:</div>
        <div class="mb-3">
          <span class="text-gray-300">&#x2B24;</span> Close
        </div>
        <div class="mb-3">
          <span class="text-sky-700">&#x2B24;</span> Reserved
        </div>
      </div>
    </div>
    <!-- Calendar column -->
    <div>
      <!-- Month chooser -->
      <div>
        <h3 class="font-bold text-3xl mb-3">Date *</h3>
      </div>
      <!-- Month & Year chooser -->
      <div class="flex gap-4 mb-3">
        <!-- Month -->
        <div class="mb-3 border border-teal-600 px-4 py-2 rounded-full md:w-72">
          <select
            class="w-full bg-transparent"
            v-model="selected.month"
            @change="onChangeMonthOrYear()"
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <!-- Year -->
        <div class="mb-3 border border-teal-600 px-4 py-2 rounded-full md:w-52">
          <select
            class="w-full bg-transparent"
            v-model="selected.year"
            @change="onChangeMonthOrYear()"
          >
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
      </div>
      <!-- Date chooser -->
      <div v-if="isFinishLoading">
        <!-- Calendar -->
        <CalendarWidget>
          <!-- Offset -->
          <div
            class="border border-teal-500 text-right px-2"
            v-for="_ in setAppointmentCalendarStore.getOffset"
            :key="_"
          ></div>
          <!-- Actual dates -->
          <SetAppointmentCalendarItem
            v-for="calendarItem in calendarItems"
            :key="calendarItem.date"
            :date="calendarItem.date"
            :isSelected="calendarItem.selected"
            :closedSlotCount="calendarItem.closedSlotCount"
            :takenSlotCount="calendarItem.takenSlotCount"
            @click="onCalendarItemClicked(calendarItem)"
          />
        </CalendarWidget>
        <!-- Time chooser -->
        <TimeslotsWidget v-if="selectedDate !== ''">
          <template #morning-slots>
            <SetAppointmentTimeslotsItem
              v-for="(timeslotItem, index) in morningTimeslotItems"
              :key="index"
              :hours="timeslotItem.hours"
              :minutes="timeslotItem.minutes"
              :isSelected="timeslotItem.selected"
              :isClosed="timeslotItem.closed"
              :isTaken="timeslotItem.taken"
              @click="onTimeslotItemClicked(timeslotItem)"
            />
          </template>
          <template #afternoon-slots>
            <SetAppointmentTimeslotsItem
              v-for="(timeslotItem, index) in afternoonTimeslotItems"
              :key="index"
              :hours="timeslotItem.hours"
              :minutes="timeslotItem.minutes"
              :isSelected="timeslotItem.selected"
              :isClosed="timeslotItem.closed"
              :isTaken="timeslotItem.taken"
              @click="onTimeslotItemClicked(timeslotItem)"
            />
          </template>
        </TimeslotsWidget>
        <div v-if="selectedTimeslot" class="flex justify-end mt-6">
          <button
            type="button"
            class="px-8 py-2 rounded-full text-white bg-teal-500 hover:bg-teal-400 transition duration-200"
            @click="onNext()"
          >
            Next
          </button>
        </div>
      </div>
      <div class="text-2xl font-bold text-center" v-else>
        Loading calendar...
      </div>
    </div>
  </div>
  <BoxDialog v-if="isAccountExistsDialogVisible">
    <template #header>
      <div class="mb-3 mt-1 text-2xl font-semibold">Login Required</div>
    </template>
    <template #body>
      <div class="max-w-[24rem] mb-5 mt-1">
        An account is needed to set an appointment. Do you have an account
        already?
      </div>
    </template>
    <template #actions>
      <div class="grid gap-2 mb-3">
        <RouterLink
          class="border border-sky-600 hover:border-sky-500 text-center bg-sky-600 hover:bg-sky-500 transition duration-200 text-white font-semibold py-1"
          :to="{ name: 'Appointments Page Login' }"
        >
          Create an Account
        </RouterLink>
        <RouterLink
          class="border border-sky-600 hover:bg-sky-100 font-medium transition duration-300 text-center py-1"
          :to="{ name: 'Appointments Page Create Account' }"
        >
          I have an account
        </RouterLink>
        <button
          type="button"
          class="border border-sky-600 hover:bg-sky-50 transition duration-300 w-full py-1 font-medium"
          @click="isAccountExistsDialogVisible = false"
        >
          Cancel
        </button>
      </div>
      <div></div>
    </template>
  </BoxDialog>
</template>