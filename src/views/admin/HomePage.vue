<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <BaseLayout>
    <div class="grid grid-rows-[auto_1fr] h-full lg:p-6">
      <!-- Banner -->
      <div class="flex flex-col md:flex-row items-center pb-20">
        <img
          src="../../assets/img/lfi-logo.png"
          class="h-28 mr-4 pointer-events-none"
        />
        <div
          class="text-4xl leading-10 font-light max-w-[29ch] text-center md:text-left"
        >
          Welcome back to L.F.I. Dental Clinic. Have a great day!
        </div>
      </div>
      <div class="grid lg:grid-cols-[auto_auto]">
        <!-- Big Buttons -->
        <div
          class="grid justify-center xl:grid-cols-2 max-w-2xl gap-12 auto-rows-[10rem]"
        >
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-16 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Appointments Page' }"
          >
            <img src="../../assets/img/nav-bell.png" class="mr-5" />
            <span>Appointments</span>
          </RouterLink>
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-4 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Patient Records Page' }"
          >
            <img src="../../assets/img/nav-clipboard.png" class="mr-5" />
            Patient Records
          </RouterLink>
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-4 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Schedules Page' }"
          >
            <img src="../../assets/img/nav-calendar.png" class="mr-5" />
            Schedules
          </RouterLink>
        </div>
        <!-- Schedules-->
        <div class="pt-8 lg:pt-0 lg:pl-8 flex lg:block xl:flex justify-center">
          <div class="xl:mt-auto max-w-xs border border-teal-500 rounded-xl">
            <div class="pl-6 pr-3 pt-3 flex justify-between">
              <div>Reminders</div>
              <button
                class="px-4 text-sm border border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-xl"
              >
                Edit
              </button>
            </div>
            <div class="h-40 p-2">
              <textarea
                class="h-full w-full border border-gray-400 rounded-b-lg px-2 py-1 resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
