<script setup>
import getMonthDayYearOfTimeslot from "../../composables/calendar/getMonthDayYearOfTimeslot";
import getUserProfile from "../../composables/api/getUserProfile";
import getHoursMinutesOfTimeslot from "../../composables/calendar/getHoursMinutesOfTimeslot";
import { onMounted, ref } from "vue";

const props = defineProps({
  timeslot: String,
  service: String,
  patientUid: String,
});

const userProfile = ref(null);
onMounted(async () => {
  userProfile.value = await getUserProfile(props.patientUid);
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4 py-4 px-6 border-b border-teal-500">
    <div class="overflow-hidden text-ellipsis">
      {{ getMonthDayYearOfTimeslot(parseInt(props.timeslot)) }}
    </div>
    <div class="overflow-hidden text-ellipsis">
      <span v-if="userProfile">
        {{ userProfile.userRecord.displayName }}
      </span>
    </div>
    <div class="overflow-hidden text-ellipsis">
      {{ props.service }}
    </div>
    <div class="overflow-hidden text-ellipsis">
      {{ getHoursMinutesOfTimeslot(parseInt(props.timeslot)) }}
    </div>
  </div>
</template>
