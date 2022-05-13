<script setup>
import BaseLayout from "../../../components/admin//BaseLayout.vue";
import { RouterLink, useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import getUserAppointments from "../../../composables/api/getUserAppointments";
import DentalTreatmentsPageAppointmentItem from "../../../components/admin/DentalTreatmentsPageAppointmentItem.vue";

const route = useRoute();
const patientUid = route.params.uid;

const appointments = ref([]);
onMounted(async () => {
  appointments.value = await getUserAppointments(patientUid);
});

const attendedAppointments = computed(() => {
  return appointments.value.filter(
    (appointment) => appointment.attended === true
  );
});
</script>
<template>
  <BaseLayout>
    <div>
      <h1 class="text-2xl font-semibold mb-3">
        <RouterLink :to="{ name: 'Admin Patient Records Page' }">
          Patient Records
        </RouterLink>
        >
        <RouterLink
          :to="{
            name: 'Admin Dental Treatments Page',
            params: { uid: patientUid },
          }"
        >
          Dental Treatment
        </RouterLink>
      </h1>
    </div>
    <div
      class="bg-teal-500/40 p-4 mt-4 gap-4 grid grid-cols-[repeat(2,_minmax(0,_2fr))_repeat(5,_minmax(0,_1fr))] font-semibold"
    >
      <div class="overflow-hidden text-ellipsis">DATE</div>
      <div class="overflow-hidden text-ellipsis">SERVICE</div>
      <div class="overflow-hidden text-ellipsis">PROCEDURE</div>
      <div class="overflow-hidden text-ellipsis">PRICE</div>
      <div class="overflow-hidden text-ellipsis">BALANCE</div>
      <div class="overflow-hidden text-ellipsis">STATUS</div>
      <div class="overflow-hidden text-ellipsis">ACTIONS</div>
    </div>
    <DentalTreatmentsPageAppointmentItem
      v-for="appointment in attendedAppointments"
      :key="appointment.uid"
      :appointment="appointment"
    />
  </BaseLayout>
</template>
