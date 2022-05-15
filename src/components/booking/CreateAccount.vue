<script setup>
import { computed, reactive, ref } from "vue";
import signIn from "../../composables/auth/signIn";
import signUpWithEmailAndPassword from "../../composables/auth/signUpWithEmailAndPassword";
import BoxDialog from "../dialogs/BoxDialog.vue";

const isSuccessModalVisible = ref(false);

const accountInformation = reactive({
  fullName: "",
  email: "",
  password: "",
  retypePassword: "",
});

// validation for above information.
const isAccountInformationValid = computed(() => {
  if (accountInformation.fullName === "") return false;
  if (accountInformation.email === "") return false;
  if (accountInformation.password === "") return false;
  if (accountInformation.password && accountInformation.password.length < 8)
    return false;
  if (accountInformation.retypePassword === "") return false;
  if (
    accountInformation.retypePassword &&
    accountInformation.retypePassword !== accountInformation.password
  )
    return false;

  return true;
});

const onCreate = async () => {
  if (isAccountInformationValid.value) {
    await signUpWithEmailAndPassword(
      accountInformation.email,
      accountInformation.password,
      accountInformation.fullName
    );

    await signIn(accountInformation.email, accountInformation.password);
    isSuccessModalVisible.value = true;
  }
};
</script>

<template>
  <div class="max-w-[28rem] mx-auto px-3 pt-12 pb-16">
    <!-- Create account box -->
    <div class="rounded-2xl border border-teal-500 px-6 p-6 text-lg">
      <h3 class="text-center mb-6 text-2xl font-medium">Create an Account</h3>
      <!-- Full name -->
      <div class="mb-8">
        <input
          type="text"
          placeholder="Full name *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountInformation.fullName"
        />
      </div>
      <!-- Email -->
      <div class="mb-8">
        <input
          type="email"
          placeholder="Email *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountInformation.email"
        />
      </div>
      <!-- Password -->
      <div class="mb-6">
        <input
          type="password"
          placeholder="Password *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountInformation.password"
        />
        <div class="text-sm px-4">Password must be at least 8 characters.</div>
      </div>
      <!-- Retype Password -->
      <div class="mb-8">
        <input
          type="password"
          placeholder="Retype Password *"
          class="w-full px-4 py-2 rounded-full border border-teal-500"
          v-model="accountInformation.retypePassword"
        />
      </div>
      <!-- Submit -->
      <div class="flex justify-center">
        <button
          type="button"
          class="px-6 py-2 rounded-3xl bg-teal-500 hover:bg-teal-400 transition duration-200 text-white"
          :class="{
            'bg-emerald-200': !isAccountInformationValid,
            'pointer-events-none': !isAccountInformationValid,
          }"
          @click="onCreate()"
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
  <BoxDialog v-if="isSuccessModalVisible">
    <template #header>
      <div class="font-semibold text-2xl mb-1">Success</div>
    </template>
    <template #body>
      <div class="max-w-[32rem] text-justify mb-3">
        Your account has been created. Some additional information will be asked
        in order to complete your appointment.
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <RouterLink
          class="border border-sky-600 px-6 py-1"
          :to="{ name: 'Appointments Page Medical Chart' }"
        >
          Continue
        </RouterLink>
      </div>
    </template>
  </BoxDialog>
</template>
