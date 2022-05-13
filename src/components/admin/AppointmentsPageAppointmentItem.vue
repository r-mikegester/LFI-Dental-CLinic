<script setup>
import { onMounted, ref } from "vue";
import getMonthDayYearOfTimeslot from "../../composables/calendar/getMonthDayYearOfTimeslot";
import getUserProfile from "../../composables/api/getUserProfile";
import getHoursMinutesOfTimeslot from "../../composables/calendar/getHoursMinutesOfTimeslot";
import setUserAppointmentAttended from "../../composables/api/user-appointment-attended/setUserAppointmentAttended";
import unsetUserAppointmentAttended from "../../composables/api/user-appointment-attended/unsetUserAppointmentAttended";

const props = defineProps({
  timeslot: String,
  service: String,
  patientUid: String,
  attended: Boolean,
});

const userProfile = ref(null);
const attended = ref(null);
onMounted(async () => {
  userProfile.value = await getUserProfile(props.patientUid);
  attended.value = props.attended;
});

const emit = defineEmits(["attended-changed"]);

const onChange = async () => {
  if (attended.value) {
    await setUserAppointmentAttended(props.patientUid, props.timeslot);
    emit("attended-changed", attended.value, props.timeslot);
  } else {
    await unsetUserAppointmentAttended(props.patientUid, props.timeslot);
    emit("attended-changed", attended.value, props.timeslot);
  }
};
</script>

<template>
  <div class="grid grid-cols-5 gap-4 py-4 px-6 border-b border-teal-500">
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
    <div>
      <input type="checkbox" @change="onChange()" v-model="attended" />
    </div>
  </div>
</template>
