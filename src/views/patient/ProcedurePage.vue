<script setup>
import BaseLayout from "../../components/patient/BaseLayout.vue";
import HeroSection from "../../components/patient/HeroSection.vue";
import { useRoute } from "vue-router";
import { getAuth } from "firebase/auth";
import { nextTick, onMounted, reactive, ref } from "vue";
import getUserAppointmentProcedure from "../../composables/api/procedures/getUserAppointmentProcedure";

const route = useRoute();
const timeslot = route.params.timeslot;
const auth = getAuth();
const patientUid = auth.currentUser.uid;

const isFinishedLoading = ref(false);
const procedure = reactive({
  body: "",
  visible: null,
});

onMounted(async () => {
  const appointmentProcedure = await getUserAppointmentProcedure(
    patientUid,
    timeslot
  );
  procedure.visible = appointmentProcedure.procedureVisible;
  procedure.body = appointmentProcedure.procedure;
  await nextTick();

  isFinishedLoading.value = true;
});
</script>

<template>
  <BaseLayout>
    <HeroSection>My Account</HeroSection>
    <div class="max-w-5xl mx-auto py-12 px-6 text-sky-700">
      <h3 class="justify-start text-3xl font-semibold text-left pb-3">
        <RouterLink
          :to="{
            name: 'Patient Appointment History Page',
            params: { uid: patientUid },
          }"
        >
          My Appointments
        </RouterLink>
        >
        <RouterLink
          :to="{
            name: 'Patient Procedure Page',
            params: { timeslot },
          }"
        >
          Dental Treatment
        </RouterLink>
      </h3>
      <div
        class="border border-teal-500 p-5 h-72 max-w-prose mx-auto mt-6"
        v-if="isFinishedLoading"
      >
        {{ procedure.body }}
      </div>
      <div class="text-2xl font-bold text-center mt-12" v-else>
        Loading procedure ...
      </div>
    </div>
  </BaseLayout>
</template>
