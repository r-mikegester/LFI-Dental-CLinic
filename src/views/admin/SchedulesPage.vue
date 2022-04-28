<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import BaseLayout from "../../components/admin/BaseLayout.vue";
import CalendarWidget from "../../components/admin/CalendarWidget.vue";
import ScheduleCalendarItem from "../../components/admin/ScheduleCalendarItem.vue";
import { useScheduleCalendarStore } from "../../stores/scheduleCalendar";
import TimeSlotsWidget from "../../components/admin/TimeSlotsWidget.vue";

const selected = reactive({
  month: "",
  year: "",
  date: "",
});

const scheduleCalendar = useScheduleCalendarStore();
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

  // Set new month and year in the store,
  // then build the list of calendar items
  // with everything unselected.
  await scheduleCalendar.setMonthAndYear(selected.month, selected.year);
  for (const n of Array(scheduleCalendar.getDayCount).keys()) {
    calendarItems.value.push({
      date: n + 1,
      selected: false,
    });
  }

  // Make sure setMonthAndYear is finished before we show the page.
  await nextTick();
  isFinishLoading.value = true;
});

const onChangeMonth = async () => {
  // Hide the calendar temporarily.
  isFinishLoading.value = false;

  // Set new month in the store.
  await scheduleCalendar.setMonthAndYear(selected.month, selected.year);

  // Reset calendar items, then build
  // a new list of calendar items with all
  // items unselected.
  calendarItems.value = [];
  for (const n of Array(scheduleCalendar.getDayCount).keys()) {
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

// Create list of calendar items, with click state managed by parent.
const calendarItems = ref([]);

const onCalendarItemSelected = (selectedCalendarItem) => {
  // Iterate through the list of calendar items, and mark
  // the selected item as selected = true. Everything else
  // is marked selected = false.
  selected.date = selectedCalendarItem.date;
  calendarItems.value = calendarItems.value.map((calendarItem) => ({
    ...calendarItem,
    selected: calendarItem === selectedCalendarItem ? true : false,
  }));
};
</script>

<template>
  <BaseLayout>
    <div class="px-6">
      <h1 class="text-2xl font-semibold mb-3">Schedules</h1>
      <div
        class="grid grid-cols-[8rem_auto] max-w-fit mx-auto"
        v-if="isFinishLoading"
      >
        <div>
          <div class="border border-teal-500 px-2 py-1 rounded-full mb-3">
            <select
              class="w-full bg-transparent"
              v-model="selected.month"
              @change="onChangeMonth()"
            >
              <option>April</option>
              <option>May</option>
              <option>June</option>
            </select>
          </div>
          <div class="border border-teal-500 px-2 py-1 rounded-full">
            {{ selected.year }}
          </div>
        </div>
        <div class="pl-4 max-w-fit">
          <!-- Calendar -->
          <CalendarWidget>
            <div
              class="border border-teal-500 text-right px-2"
              v-for="_ in scheduleCalendar.getOffset"
              :key="_"
            ></div>
            <ScheduleCalendarItem
              class="border border-teal-500 text-right px-2"
              v-for="calendarItem in calendarItems"
              :key="calendarItem.date"
              :date="calendarItem.date"
              :isSelected="calendarItem.selected"
              @click="onCalendarItemSelected(calendarItem)"
            />
          </CalendarWidget>
          <TimeSlotsWidget
            v-if="selected.date !== ''"
            :date="selected.date"
            :month="selected.month"
            :year="selected.year"
          />
        </div>
      </div>
      <div class="text-2xl font-bold text-center" v-else>
        Loading calendar...
      </div>
    </div>
  </BaseLayout>
</template>
