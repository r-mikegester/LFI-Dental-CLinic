<script setup>
import { useRouter } from "vue-router";
import { useAppointmentDetailsStore } from "../../stores/appointmentDetails";
import newAppointment from "../../composables/api/newAppointment";
import MedicalChart from "../shared/MedicalChart.vue";

const appointmentDetailsStore = useAppointmentDetailsStore();
const router = useRouter();
const redirectToAppointmentHistoryPage = async () => {
  await newAppointment(
    appointmentDetailsStore.getSlotSeconds,
    appointmentDetailsStore.getService
  );
  router.push({
    name: "Patient Appointment History Page",
  });
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-3 py-12">
    <MedicalChart @formSubmitted="redirectToAppointmentHistoryPage()" />
  </div>
</template>
