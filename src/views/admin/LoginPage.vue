<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Footer from "../../components/admin/PageFooter.vue";
import signIn from "../../composables/auth/signIn";
import SimpleModalDialog from "../../components/admin/SimpleModalDialog.vue";

const userCredentials = reactive({
  email: "",
  password: "",
});

const isLoginButtonDisabled = computed(() => {
  if (userCredentials.email === "") return true;
  if (userCredentials.password === "") return true;
  if (userCredentials.password && userCredentials.password.length < 8)
    return true;
  return false;
});

const router = useRouter();
const onLogin = async () => {
  try {
    if (!isLoginButtonDisabled.value) {
      await signIn(userCredentials.email, userCredentials.password);
      router.push({ name: "Admin Home Page" });
    }
  } catch (e) {
    switch (e.code) {
      case "auth/invalid-email":
      case "auth/wrong-password":
      case "auth/user-not-found":
        errorDialogBody.value =
          "You have entered an incorrect email or password.";
        isErrorDialogVisible.value = true;
        break;
      default:
        errorDialogBody.value = `An unknown error occured. Code: ${e.code}`;
        isErrorDialogVisible.value = true;
    }
  }
};

const isErrorDialogVisible = ref(false);
const errorDialogBody = ref("");
</script>

<template>
  <div class="grid grid-rows-[minmax(100vh,_1fr)_auto]">
    <main class="font-[Poppins] px-4 text-sky-600">
      <div class="max-w-md mx-auto">
        <!-- Logo -->
        <div>
          <div
            class="text-2xl font-medium pb-12 pt-12 xs:pt-24 flex flex-col items-center"
          >
            <img
              src="../../assets/img/lfi-logo.png"
              alt="LFI Dental Clinic logo"
              class="max-w-[5rem] mb-4"
            />
            <div class="text-center">Welcome to LFI Dental Clinic</div>
          </div>
        </div>
        <!-- Login box -->
        <form class="border border-teal-500 p-6 rounded-2xl mb-3">
          <!-- inputs -->
          <div class="max-w-fit mx-auto xs:text-right">
            <div class="mb-10 grid xs:grid-cols-[5rem_1fr] gap-2 items-center">
              <label>Email:</label>
              <input
                type="text"
                class="border border-teal-500 py-2 px-3 rounded-2xl min-w-0"
                v-model="userCredentials.email"
              />
            </div>
            <div class="mb-10 grid xs:grid-cols-[5rem_1fr] gap-2 items-center">
              <label>Password:</label>
              <input
                type="password"
                class="border border-teal-500 py-2 px-3 rounded-2xl min-w-0"
                v-model="userCredentials.password"
              />
            </div>
          </div>
          <!-- actions -->
          <div class="flex justify-between items-center">
            <a href="#" class="text-sm hover:border-b hover:border-sky-600">
              Forgot Password?
            </a>
            <button
              type="button"
              class="px-6 py-2 rounded-3xl bg-teal-500 hover:bg-teal-400 transition duration-200 text-white"
              :class="{
                'pointer-events-none': isLoginButtonDisabled,
                'bg-emerald-200': isLoginButtonDisabled,
              }"
              @click="onLogin()"
            >
              Login
            </button>
          </div>
        </form>
        <!-- Back to Main site -->
        <div class="text-center mb-3">
          <RouterLink
            :to="{ name: 'Home' }"
            class="inline-flex justify-center items-center gap-1 hover:bg-teal-400/40 transition duration-200 rounded-xl px-2"
          >
            <span class="text-3xl pb-1">&laquo;</span>
            <span class="pt-[6px] pb-2 font-medium">Back to Main site</span>
          </RouterLink>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  <SimpleModalDialog v-if="isErrorDialogVisible">
    <template #header>
      <div class="text-2xl font-semibold">Login Failed</div>
    </template>
    <template #body>
      <div class="text-lg mb-3">
        {{ errorDialogBody }}
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <button
          type="button"
          class="px-4 py-1 bg-teal-500 hover:bg-teal-400 transition duration-200 text-white rounded-lg"
          @click="isErrorDialogVisible = false"
        >
          OK
        </button>
      </div>
    </template>
  </SimpleModalDialog>
</template>
