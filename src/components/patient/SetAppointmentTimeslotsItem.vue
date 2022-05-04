<script setup>
defineProps({
  hours: Number,
  minutes: Number,
  isSelected: Boolean,
  isClosed: Boolean,
  isTaken: Boolean,
});
</script>

<template>
  <div
    class="border border-teal-500 text-center py-1"
    :class="{
      'bg-gray-300': isClosed,
      'border-gray-600': isClosed,
      'bg-sky-600': isTaken,
      'text-white': isTaken,
      'bg-teal-500': isSelected,
      'text-white': isSelected,
    }"
  >
    <span v-if="hours > 12">{{ hours - 12 }}</span>
    <span v-else>{{ hours }}</span
    >:<span v-if="minutes < 10">0{{ minutes }}</span>
    <span v-else>{{ minutes }}</span>

    <span v-if="hours > 12"> pm</span>
    <span v-else> am</span>
  </div>
</template>
