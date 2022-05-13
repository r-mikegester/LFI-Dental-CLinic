<script setup>
import getMonthDayYearOfTimeslot from "../../composables/calendar/getMonthDayYearOfTimeslot";
import getHoursMinutesOfTimeslot from "../../composables/calendar/getHoursMinutesOfTimeslot";
import { RouterLink } from "vue-router";
import requestProcedureAccess from "../../composables/api/access-procedure/requestProcedureAccess";
import cancelRequestProcedureAccess from "../../composables/api/access-procedure/cancelRequestProcedureAccess";
import { getAuth } from "firebase/auth";
import cancelAppointment from "../../composables/api/cancelAppointment";
import SimpleModalDialog from "../admin/SimpleModalDialog.vue";
import { onMounted, ref } from "vue";
import getDateTwoDaysBeforeTimeslot from "../../composables/calendar/getDateTwoDaysBeforeTimeslot";

const props = defineProps({
  appointment: Object,
});

const auth = getAuth();
const patientUid = auth.currentUser.uid;

const onRequestAccess = async () => {
  await requestProcedureAccess(patientUid, props.appointment.uid);
};

const onCancelRequestAccess = async () => {
  await cancelRequestProcedureAccess(patientUid, props.appointment.uid);
};

const isCancelDialogVisible = ref(false);
const onShowCancelDialog = () => {
  if (Date.now() < cancelDeadline.value.getTime())
    isCancelDialogVisible.value = true;
};

const onCancelAppointment = async () => {
  await cancelAppointment(props.appointment.uid);
};

const cancelDeadline = ref(null);

onMounted(() => {
  cancelDeadline.value = getDateTwoDaysBeforeTimeslot(
    parseInt(props.appointment.uid)
  );
});
</script>

<template>
  <div class="grid grid-cols-7 px-6 py-3 border-b border-teal-500 items-center">
    <div class="overflow-hidden text-ellipsis">
      {{ getMonthDayYearOfTimeslot(appointment.uid) }}
      {{ getHoursMinutesOfTimeslot(appointment.uid) }}
    </div>
    <div class="overflow-hidden text-ellipsis">{{ appointment.service }}</div>
    <div class="overflow-hidden text-ellipsis">
      <RouterLink
        :to="{
          name: 'Patient Procedure Page',
          params: { timeslot: appointment.uid },
        }"
        v-if="true === appointment.procedureVisible"
      >
        View
      </RouterLink>
      <button
        type="button"
        class="font-normal"
        @click="onRequestAccess()"
        v-else-if="false === appointment.procedureVisible"
      >
        Request Access
      </button>
      <button
        type="button"
        class="font-normal"
        @click="onCancelRequestAccess()"
        v-else
      >
        Cancel request
      </button>
    </div>
    <div class="overflow-hidden text-ellipsis">
      <span v-if="appointment.price === 0">No price set</span>
      <span v-else>
        {{ appointment.price }}
      </span>
    </div>
    <div class="overflow-hidden text-ellipsis">{{ appointment.balance }}</div>
    <div class="overflow-hidden text-ellipsis">
      <span v-if="appointment.attended">
        <span v-if="null === appointment.status">Pending status</span>
        <span v-else>{{ appointment.status }}</span>
      </span>
      <span v-else>Pending appointment</span>
    </div>
    <div class="text-center">
      <button
        type="button"
        @click="onShowCancelDialog()"
        :class="{
          'text-gray-300': !(Date.now() < cancelDeadline.getTime()),
        }"
        :title="
          Date.now() < cancelDeadline.getTime()
            ? ''
            : 'You may only cancel up to three (3) days before the appointment'
        "
        v-if="cancelDeadline && !appointment.attended"
      >
        Cancel
      </button>
    </div>
  </div>
  <SimpleModalDialog v-if="isCancelDialogVisible">
    <template #header>
      <div class="font-semibold text-xl mb-2">Cancel Appointment</div>
    </template>
    <template #body>
      <div class="max-w-[30rem] text-justify mb-2">
        The following action will cancel the appointment, and allow others to
        reserve it. You may reserve it again later, if it is still available.
        Continue?
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between">
        <button
          type="button"
          class="bg-teal-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-teal-400 transition duration-200"
          @click="isCancelDialogVisible = false"
        >
          Cancel
        </button>
        <button
          type="button"
          class="bg-red-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-red-400 transition duration-200"
          @click="onCancelAppointment()"
        >
          Continue
        </button>
      </div>
    </template>
  </SimpleModalDialog>
</template>
