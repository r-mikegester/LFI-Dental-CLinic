<script setup>
import { ref, watchEffect } from "vue";
import addClosedSlot from "../../composables/api/addClosedSlot";
import deleteClosedSlot from "../../composables/api/deleteClosedSlot";
import getMonthIndex from "../../composables/calendar/getMonthIndex";
import getUnixSecondsFromObject from "../../composables/calendar/getUnixSecondsFromObject";
import { useScheduleCalendarStore } from "../../stores/scheduleCalendar";

const props = defineProps({
  date: Number,
  month: String,
  year: String,
  hours: String,
  minutes: String,
});

const scheduleCalendar = useScheduleCalendarStore();
const isColored = ref(false);
const timeInUnixSecs = ref(0);

watchEffect(() => {
  // Determine the unix timestamp for this time slot,
  // based on UTC+8 (Asia/Manila).
  timeInUnixSecs.value = getUnixSecondsFromObject(
    props.date,
    getMonthIndex(props.month) + 1,
    parseInt(props.year),
    parseInt(props.hours),
    parseInt(props.minutes)
  );

  // Assume that we are not in the list of closed slots.
  isColored.value = false;

  // Check each timestamp in the list of closed slots.
  scheduleCalendar.getClosedSlots.forEach((slot) => {
    // If our timestamp is in the list, color our time slot.
    if (slot === timeInUnixSecs.value.toString()) {
      isColored.value = true;
    }
  });
});

const onClick = async () => {
  // Toggle closed date in the database, then synchronize
  // the state with our store.
  if (isColored.value) {
    await deleteClosedSlot(timeInUnixSecs.value);
    scheduleCalendar.removeClosedSlot(timeInUnixSecs.value.toString());

    isColored.value = false;
  } else {
    await addClosedSlot(timeInUnixSecs.value);
    scheduleCalendar.pushClosedSlot(timeInUnixSecs.value.toString());

    isColored.value = true;
  }
};
</script>

<template>
  <div
    class="border border-teal-500 text-center py-1"
    :class="{ 'bg-teal-500': isColored, 'text-white': isColored }"
    @click="onClick()"
  >
    <span v-if="hours > 12">{{ hours - 12 }}</span>
    <span v-else>{{ hours }}</span
    >:<span v-if="minutes < 10">0{{ minutes }}</span>
    <span v-else>{{ minutes }}</span>

    <span v-if="hours > 12"> pm</span>
    <span v-else> am</span>
  </div>
</template>
