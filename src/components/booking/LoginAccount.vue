<script setup>
import { getAuth } from "firebase/auth"
import { computed, reactive, ref } from "vue"
import { useRouter } from "vue-router"
import newAppointment from "../../composables/api/newAppointment"
import signIn from "../../composables/auth/signIn"
import userIsAdmin from "../../composables/auth/userIsAdmin"
import isFilledInMedicalChart from "../../composables/firestore/isFilledInMedicalChart"
import { useAppointmentDetailsStore } from "../../stores/appointmentDetails"
import BoxDialog from "../dialogs/BoxDialog.vue"

const isSuccessModalVisible = ref(false)

const accountCredentials = reactive({
  email: "",
  password: "",
})

// validation for above information.
const isAccountCredentialsValid = computed(() => {
  if (accountCredentials.email === "") return false
  if (accountCredentials.password === "") return false
  if (accountCredentials.password && accountCredentials.password.length < 8) {
    return false
  }

  return true
})

const appointmentDetailsStore = useAppointmentDetailsStore()

const router = useRouter()
const auth = getAuth()
const onSignIn = async () => {
  try {
    if (isAccountCredentialsValid.value) {
      await signIn(accountCredentials.email, accountCredentials.password)

      // If the user is an Admin, go to the Admin Homepage and
      // return immediately.
      if (await userIsAdmin()) {
        router.push({ name: "Admin Home Page" })
        return
      }

      // If we reach here, assume that the user is a patient.
      //
      // FIXME: We should handle the "never" case here.
      const patientUid = auth.currentUser.uid
      const medicalChartIsFilled = await isFilledInMedicalChart(patientUid)

      if (appointmentDetailsStore.isInitialized) {
        if (medicalChartIsFilled) {
          /* Set appointment if there is a queued appointment,
             and the medical chart is already filled in. */
          await newAppointment(
            patientUid,
            appointmentDetailsStore.getSlotSeconds,
            appointmentDetailsStore.getService
          )

          appointmentDetailsStore.$reset()
          isSuccessModalVisible.value = true
        } else {
          /* Redirect users to medical chart if not filled in.  */
          router.push({
            name: "Appointments Page Medical Chart",
          })
        }
      } else
        router.push({
          name: "Patient Appointment History Page",
        })
    }
  } catch (e) {
    switch (e.code) {
      case "auth/invalid-email":
      case "auth/wrong-password":
      case "auth/user-not-found":
        errorDialogBody.value =
          "You have entered an incorrect email or password."
        isErrorDialogVisible.value = true
        break
      default:
        errorDialogBody.value = `An unknown error occured. Code: ${e.code}`
        isErrorDialogVisible.value = true
        throw e
    }
  }
}

const isErrorDialogVisible = ref(false)
const errorDialogBody = ref("")
</script>

<template>
  <div class="max-w-[28rem] mx-auto px-3 pt-12 pb-16">
    <!-- Create account box -->
    <div class="rounded-2xl border border-teal-500 px-6 p-6 text-lg">
      <h3 class="text-center mb-6 text-2xl font-medium">
        Login to your Account
      </h3>
      <!-- Email -->
      <div class="mb-8">
        <input
          type="email"
          placeholder="Email *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountCredentials.email"
        />
      </div>
      <!-- Password -->
      <div class="mb-8">
        <input
          type="password"
          placeholder="Password *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountCredentials.password"
        />
      </div>
      <!-- Submit -->
      <div class="flex justify-center">
        <button
          type="button"
          class="px-6 py-2 rounded-3xl bg-teal-500 hover:bg-teal-400 transition duration-200 text-white"
          :class="{
            'pointer-events-none': !isAccountCredentialsValid,
            'bg-emerald-200': !isAccountCredentialsValid,
          }"
          @click="onSignIn()"
        >
          Login
        </button>
      </div>
    </div>
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

  <BoxDialog v-if="isErrorDialogVisible">
    <template #header>
      <div class="font-semibold text-2xl mb-1">Login Failed</div>
    </template>
    <template #body>
      <div class="max-w-[32rem] text-justify mb-3">
        {{ errorDialogBody }}
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <button
          type="button"
          class="border border-sky-600 px-6 py-1"
          @click="isErrorDialogVisible = false"
        >
          OK
        </button>
      </div>
    </template>
  </BoxDialog>
</template>
