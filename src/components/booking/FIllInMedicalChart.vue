<script setup>
import { useRouter } from "vue-router";
import { useAppointmentDetailsStore } from "../../stores/appointmentDetails";
import newAppointment from "../../composables/api/newAppointment";
import MedicalChart from "../shared/MedicalChart.vue";
import { ref } from "vue";
import updateMedicalChart from "../../composables/api/updateMedicalChart";
import { getAuth } from "firebase/auth";

const appointmentDetailsStore = useAppointmentDetailsStore();
const router = useRouter();

const isRequiredFieldsValid = (personalInformation) => {
  if (personalInformation.fullName === "") return false;
  if (personalInformation.gender === "") return false;
  if (personalInformation.birthDate === "") return false;
  if (personalInformation.maritalStatus === "") return false;
  return true;
};

const isSubmitDisabled = ref(false);

const auth = getAuth();
const onSubmit = async (personalInformation, medicalHistory, dentalHistory) => {
  if (isRequiredFieldsValid(personalInformation)) {
    isSubmitDisabled.value = true;
    const patientUid = auth.currentUser.uid;
    await updateMedicalChart(
      patientUid,
      personalInformation,
      medicalHistory,
      dentalHistory
    );

    await newAppointment(
      appointmentDetailsStore.getSlotSeconds,
      appointmentDetailsStore.getService
    );

    router.push({
      name: "Patient Appointment History Page",
    });
  }
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-3 py-12">
    <MedicalChart>
      <template
        #default="{ personalInformation, medicalHistory, dentalHistory }"
      >
        <button
          type="button"
          class="px-6 py-2 rounded-3xl bg-teal-500 hover:bg-teal-400 transition duration-200 text-white"
          :class="{
            'pointer-events-none': isSubmitDisabled,
            'bg-emerald-200': isSubmitDisabled,
          }"
          @click="onSubmit(personalInformation, medicalHistory, dentalHistory)"
        >
          <span v-if="isSubmitDisabled">Saving ...</span>
          <span v-else>Submit</span>
        </button>
      </template>
    </MedicalChart>
  </div>
</template>
