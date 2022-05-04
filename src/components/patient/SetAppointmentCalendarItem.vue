<script setup>
import { computed, ref, watchEffect } from "vue";
import getTimeslots from "../../composables/calendar/getTimeslots";

const props = defineProps({
  date: Number,
  isSelected: Boolean,
  closedSlotCount: Number,
  takenSlotCount: Number,
});

const isEntireDayClosed = ref(false);

const reservableSlotCount = computed(() => {
  if (!props.closedSlotCount) return 0;

  return getTimeslots().length - props.closedSlotCount;
});
const availableSlotCount = computed(() => {
  if (!props.closedSlotCount) return 0;

  return reservableSlotCount.value - props.takenSlotCount;
});
const isSlotFull = ref(false);

watchEffect(() => {
  isEntireDayClosed.value = false;
  isSlotFull.value = false;

  if (props.closedSlotCount === getTimeslots().length) {
    isEntireDayClosed.value = true;
    return;
  }

  if (reservableSlotCount.value > 0 && availableSlotCount.value === 0)
    isSlotFull.value = true;
});
</script>

<template>
  <div
    class="border border-teal-500 text-right px-3 py-1"
    :class="{
      'bg-teal-500/50': isSelected,
      'bg-gray-300': isEntireDayClosed && !isSelected,
      'border-gray-600': isEntireDayClosed && !isSelected,
    }"
  >
    {{ date }}
  </div>
</template>
