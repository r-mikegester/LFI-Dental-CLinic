<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="w-64 bg-teal-500/40 text-sky-700 h-full hidden md:grid grid-rows-[auto_1fr]"
  >
    <!-- image -->
    <div class="flex flex-col items-center py-6">
      <img src="../../assets/img/nav-person.png" class="h-16" />
      <span>Admin User</span>
    </div>
    <!-- Nav items -->
    <div class="flex flex-col">
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Home Page' }"
      >
        <img src="../../assets/img/nav-house.png" class="mr-5" />
        <span>Home</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Schedules Page' }"
      >
        <img src="../../assets/img/nav-calendar.png" class="mr-5" />
        <span>Schedules</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Appointments Page' }"
      >
        <img src="../../assets/img/nav-bell.png" class="mr-5" />
        <span>Appointments</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Patient Records Page' }"
      >
        <img src="../../assets/img/nav-clipboard.png" class="mr-5" />
        <span>Patient Records</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Messages Page' }"
      >
        <img src="../../assets/img/nav-mail.png" class="mr-5" />
        <span>Messages</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center"
        :to="{ name: 'Admin Account Settings Page' }"
      >
        <img src="../../assets/img/nav-gear.png" class="mr-5" />
        <span>Account Settings</span>
      </RouterLink>
      <RouterLink
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center mt-auto"
        :to="{ name: 'Admin Login Page' }"
      >
        <img src="../../assets/img/nav-exit.png" class="mr-5" />
        <span>Log out</span>
      </RouterLink>
    </div>
  </nav>
</template>
<style>
nav .router-link-exact-active {
  @apply bg-teal-500/40;
}
</style>
