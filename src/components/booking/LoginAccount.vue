<script setup>
import { getAuth, sendEmailVerification } from "firebase/auth"
import { computed, reactive, ref } from "vue"
import { RouterLink, useRouter } from "vue-router"
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
    if (!isAccountCredentialsValid.value) return

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
    if (!appointmentDetailsStore.isInitialized) {
      router.push({
        name: "Patient Appointment History Page",
      })
      return
    }

    const isEmailVerified = auth.currentUser.emailVerified
    if (!isEmailVerified) {
      isEmailNeedsVerificationVisible.value = true
      return
    }

    const patientUid = auth.currentUser.uid
    await schedulePendingAppointment(patientUid)
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

const errorDialogBody = ref("")
const isErrorDialogVisible = ref(false)
const isEmailNeedsVerificationVisible = ref(false)
const isEmailNotActuallyVerifiedDialogVisible = ref(false)

async function onSendEmailVerification() {
  try {
    await sendEmailVerification(auth.currentUser)
  } catch (e) {
    console.log("Error occured while sending email verification:", e)
  }
}

async function onConfirmEmailVerified() {
  await auth.currentUser.reload()

  const isUserVerified = auth.currentUser.emailVerified
  if (!isUserVerified) {
    isEmailNotActuallyVerifiedDialogVisible.value = true
    return
  }

  // Email is now verified, schedule pending appointment
  // if there are any.
  const patientUid = auth.currentUser.uid
  await schedulePendingAppointment(patientUid)
}

async function schedulePendingAppointment(patientUid) {
  const medicalChartIsFilled = await isFilledInMedicalChart(patientUid)

  if (!medicalChartIsFilled) {
    // Redirect users to medical chart if not filled in.
    router.push({
      name: "Appointments Page Medical Chart",
    })
    return
  }

  // Set appointment if there is a queued appointment,
  // and the medical chart is already filled in.
  await newAppointment(
    patientUid,
    appointmentDetailsStore.getSlotSeconds,
    appointmentDetailsStore.getService
  )

  appointmentDetailsStore.$reset()
  isSuccessModalVisible.value = true
}
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
      <div class="flex justify-between items-center">
        <RouterLink
          :to="{ name: 'Password Reset Page' }"
          class="hover:underline underline-offset-4"
        >
          Forgot Password?
        </RouterLink>
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

  <BoxDialog v-if="isEmailNeedsVerificationVisible">
    <template #header>
      <div class="font-semibold text-2xl mb-1">Email is not yet Verified</div>
    </template>
    <template #body>
      <div class="max-w-[32rem] text-justify mb-3">
        <p class="mb-3">
          We have detected that your account is not yet verified. To continue,
          we will need you to verify your account.
        </p>
        <p>
          Click
          <span class="font-semibold">Send Verification Email</span>
          below to verify your email, and click the
          <span class="font-semibold">Continue</span> button once your account
          has been verified.
        </p>
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between gap-4">
        <button
          type="button"
          class="border border-sky-600 bg-sky-600 hover:border-sky-500 hover:bg-sky-500 text-white transition duration-200 font-medium px-6 py-1"
          @click="onSendEmailVerification"
        >
          Send Verification Email
        </button>
        <button
          type="button"
          class="border border-sky-600 hover:border-sky-500 hover:bg-sky-500 hover:text-white transition duration-200 font-medium px-6 py-1"
          @click="onConfirmEmailVerified"
        >
          Continue
        </button>
      </div>
    </template>
  </BoxDialog>

  <BoxDialog v-if="isEmailNotActuallyVerifiedDialogVisible">
    <template #header>
      <div class="font-semibold text-2xl mb-2">
        Your account is not yet Verified
      </div>
    </template>
    <template #body>
      <div class="max-w-[30rem] text-justify mb-3">
        We have detected that your account is not yet verified. Please check
        your email's <span class="font-bold">Inbox</span> and/or
        <span class="font-bold">Spam</span> folder, and click the link to
        verify.
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <button
          type="button"
          class="border border-sky-600 px-6 py-1 font-medium hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isEmailNotActuallyVerifiedDialogVisible = false"
        >
          OK
        </button>
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
