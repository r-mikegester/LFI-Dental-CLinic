<script setup>
import { ref } from "vue"
import { useAppointmentDetailsStore } from "../../stores/appointmentDetails"
import { getAuth } from "firebase/auth"
import newAppointment from "../../composables/api/newAppointment"
import MedicalChart from "../shared/MedicalChart.vue"
import updateMedicalChart from "../../composables/api/updateMedicalChart"
import setFilledInMedicalChart from "../../composables/firestore/setFilledInMedicalChart"
import BoxDialog from "../dialogs/BoxDialog.vue"

const appointmentDetailsStore = useAppointmentDetailsStore()
const auth = getAuth()
const patientUid = auth.currentUser.uid

const isRequiredFieldsValid = (personalInformation) => {
  if (personalInformation.fullName === "") return false
  if (personalInformation.gender === "") return false
  if (personalInformation.birthDate === "") return false
  if (personalInformation.maritalStatus === "") return false
  return true
}

const isSubmitDisabled = ref(false)

const onSubmit = async (personalInformation, medicalHistory, dentalHistory) => {
  if (isRequiredFieldsValid(personalInformation)) {
    isSubmitDisabled.value = true
    await updateMedicalChart(
      patientUid,
      personalInformation,
      medicalHistory,
      dentalHistory
    )

    await setFilledInMedicalChart(patientUid)

    await newAppointment(
      patientUid,
      appointmentDetailsStore.getSlotSeconds,
      appointmentDetailsStore.getService
    )

    appointmentDetailsStore.$reset()
    isSuccessModalVisible.value = true
  }
}

const isSuccessModalVisible = ref(false)
</script>

<template>
  <div class="max-w-5xl mx-auto px-3 py-12">
    <MedicalChart :patientUid="patientUid">
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

  <BoxDialog v-if="isSuccessModalVisible">
    <template #header>
      <div class="font-semibold text-2xl mb-1">✅ Success</div>
    </template>
    <template #body>
      <div class="max-w-[32rem] text-justify mb-3">
        <!-- Your account has been created. Some additional information will be asked
        in order to complete your appointment. -->
        We have scheduled your appointment with one of our dentists. Please
        remember to attend your appointment on the reserved date and time.
      </div>
      <div class="max-w-[32rem] text-justify mb-3">
        You may cancel your appointment up to
        <span class="font-semibold">three (3) days</span> prior to the scheduled
        date.
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <RouterLink
          class="border border-sky-600 px-6 py-1"
          :to="{ name: 'Patient Appointment History Page' }"
        >
          Done
        </RouterLink>
      </div>
    </template>
  </BoxDialog>
</template>
