<script setup>
import { onMounted, reactive, ref } from "vue"
import { useRoute } from "vue-router"
import BaseLayout from "../../../components/admin/BaseLayout.vue"
import MedicalChart from "../../../components/shared/MedicalChart.vue"
import {
  getMedicalChart,
  updateMedicalChart,
} from "../../../composables/api/charts/MedicalChart"

const route = useRoute()
const patientUid = route.params.uid

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
    isSubmitDisabled.value = false
  }
}
</script>
<template>
  <BaseLayout>
    <h1 class="text-2xl font-semibold mb-3">
      <RouterLink :to="{ name: 'Admin Patient Records Page' }">
        Patient Records
      </RouterLink>
      >
      <RouterLink
        :to="{
          name: 'Admin Medical Chart Page',
          params: { uid: patientUid },
        }"
      >
        Medical Chart
      </RouterLink>
    </h1>
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
  </BaseLayout>
</template>
