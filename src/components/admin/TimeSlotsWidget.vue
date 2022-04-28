<script setup>
import TimeSlotsItem from "./TimeSlotsItem.vue";

defineProps({
  date: Number,
  month: String,
  year: String,
});
</script>

<template>
  <div class="grid grid-cols-2 border border-teal-500 p-6 mt-6 rounded-xl">
    <div class="border-r border-teal-500 pr-4 pb-8">
      <div class="text-center text-xl mb-3">Morning</div>
      <div class="grid grid-cols-2 gap-4">
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="8"
          minutes="0"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="9"
          minutes="0"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="10"
          minutes="0"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="11"
          minutes="0"
        />
      </div>
    </div>
    <div class="border-l border-teal-500 pl-4">
      <div class="text-center text-xl mb-3">Afternoon</div>
      <div class="grid grid-cols-2 gap-4">
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="13"
          minutes="30"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="15"
          minutes="0"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="16"
          minutes="30"
        />
        <TimeSlotsItem
          :date="date"
          :month="month"
          :year="year"
          hours="18"
          minutes="0"
        />
      </div>
    </div>
  </div>
</template>
