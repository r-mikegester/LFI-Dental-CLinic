<script setup>
import Footer from "../../components/admin/PageFooter.vue";
</script>

<template>
  <div class="grid grid-rows-[1fr_auto] min-h-screen">
    <main class="font-[Poppins] text-sky-600">
      <div class="max-w-lg mx-auto">
        <!-- Logo -->
        <div>
          <div
            class="text-2xl font-medium pb-12 pt-24 flex flex-col items-center"
          >
            <img
              src="../../assets/img/lfi-logo.png"
              alt="LFI Dental Clinic logo"
              class="max-w-[5rem] mb-4"
            />
            <div>Welcome to LFI Dental Clinic</div>
          </div>
        </div>
        <!-- Login box -->
        <form class="border border-teal-500 p-6 mb-32 rounded-2xl">
          <!-- inputs -->
          <div class="max-w-fit mx-auto text-right">
            <div class="mb-10">
              <label class="mr-4">Username:</label>
              <input
                type="text"
                class="border border-teal-500 py-2 px-3 rounded-2xl max-w-[18rem]"
              />
            </div>
            <div class="mb-10">
              <label class="mr-4">Password:</label>
              <input
                type="password"
                class="border border-teal-500 py-2 px-3 rounded-2xl max-w-[18rem]"
              />
            </div>
          </div>
          <!-- actions -->
          <div class="flex justify-between items-center">
            <a href="#">Forgot Password?</a>
            <button
              class="px-6 py-2 rounded-3xl bg-teal-500 hover:bg-teal-400 transition duration-200 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </div>
</template>
