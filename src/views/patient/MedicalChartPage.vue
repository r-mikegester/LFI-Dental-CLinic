<script setup>
import { getAuth } from "firebase/auth"
import { onMounted, reactive, ref } from "vue"
import BaseLayout from "../../components/patient/BaseLayout.vue"
import HeroSection from "../../components/patient/HeroSection.vue"
import MedicalChart from "../../components/shared/MedicalChart.vue"
import getMedicalChart from "../../composables/api/medical-chart/getMedicalChart"
import updateMedicalChart from "../../composables/api/updateMedicalChart"
import setFilledInMedicalChart from "../../composables/api/medical-chart/setFilledInMedicalChart"

const auth = getAuth()
const patientUid = auth.currentUser.uid

const medicalChartIsLoading = ref(false)
const medicalChart = reactive({
  personalInformation: null,
  medicalHistory: null,
  dentalHistory: null,
})

onMounted(async () => {
  const { personalInformation, medicalHistory, dentalHistory } =
    await getMedicalChart(patientUid)

  if (personalInformation)
    medicalChart.personalInformation = personalInformation
  if (medicalHistory) medicalChart.medicalHistory = medicalHistory
  if (dentalHistory) medicalChart.dentalHistory = dentalHistory
  medicalChartIsLoading.value = true
})

/* Validation and submission */
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
    isSubmitDisabled.value = false
  }
}
</script>
<template>
  <BaseLayout>
    <HeroSection>My Account</HeroSection>
    <div class="max-w-6xl mx-auto px-3 py-12">
      <div class="xl:px-24" v-if="medicalChartIsLoading">
        <MedicalChart
          :patientUid="patientUid"
          :personalInformation="medicalChart.personalInformation"
          :medicalHistory="medicalChart.medicalHistory"
          :dentalHistory="medicalChart.dentalHistory"
        >
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
              @click="
                onSubmit(personalInformation, medicalHistory, dentalHistory)
              "
            >
              <span v-if="isSubmitDisabled">Saving ...</span>
              <span v-else>Submit</span>
            </button>
          </template>
        </MedicalChart>
      </div>
      <div class="text-2xl font-bold text-center mt-12" v-else>
        Loading record ...
      </div>
    </div>
  </BaseLayout>
</template>
