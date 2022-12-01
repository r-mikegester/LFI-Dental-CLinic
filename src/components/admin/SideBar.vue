<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import signOut from "../../composables/auth/signOut";
import { useProfilePictureStore } from "../../stores/profilePicture";
import { useUserFullnameStore } from "../../stores/userFullname";


const router = useRouter();
const onLogout = async () => {
  await signOut();
  router.push({ name: "Admin Login Page" });
};

const profilePictureStore = useProfilePictureStore();
const userFullnameStore = useUserFullnameStore();
onMounted(async () => {
  if (!profilePictureStore.isInitialized) await profilePictureStore.initialize();
  if (!userFullnameStore.isInitialized) await userFullnameStore.initialize();
});
</script>

<template>
  <!--SIDEDBAR-->
  <div
    class="admin-view-sidebar bg-teal-500/40 text-sky-700 h-full md:grid grid-rows-[auto_1fr] xst:hidden xs:pt-20 lg:pt-10 md:pt-5 md:w-20 lg:w-64 sm:hidden xs:hidden">
    <!-- image -->
    <div class="flex flex-col items-center py-6">
      <img :src="profilePictureStore.getDownloadURL" alt="Profile Picture" v-if="profilePictureStore.getDownloadURL"
        class="object-cover mb-1 rounded-full md:h-16 md:w-16 lg:h-24 lg:w-24" />
      <img src="../../assets/img/nav-person.png" v-else />
      <span class="md:hidden lg:block">{{
          userFullnameStore.getFullname
      }}</span>
    </div>
    <!-- Nav items -->
    <div class="flex flex-col">
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Home Page' }">
        <img src="../../assets/img/nav-house.png" class="mr-5" />
        <span class="md:hidden lg:block">Home</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Schedules Page' }">
        <img src="../../assets/img/nav-calendar.png" class="mr-5" />
        <span class="md:hidden lg:block">Schedules</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Appointments Page' }">
        <img src="../../assets/img/nav-notebook.png" class="mr-5" />
        <span class="md:hidden lg:block">Appointments</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Patient Records Page' }">
        <img src="../../assets/img/nav-clipboard.png" class="mr-5" />
        <span class="md:hidden lg:block">Patient Records</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Notifications Page' }">
        <img src="../../assets/img/nav-bell.png" class="mr-5" />
        <span class="md:hidden lg:block">Notifications</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Messages Page' }">
        <img src="../../assets/img/nav-mail.png" class="mr-5" />
        <span class="md:hidden lg:block">Messages</span>
      </RouterLink>
      <RouterLink
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 md:w-20 lg:w-64"
        :to="{ name: 'Admin Account Settings Page' }">
        <img src="../../assets/img/nav-gear.png" class="mr-5" />
        <span class="md:hidden lg:block">Account Settings</span>
      </RouterLink>
      <button
        class="flex items-center px-8 py-3 md:py-5 lg:py-3 transition duration-200 hover:bg-teal-500/40 lg:mt-auto md:w-20 lg:w-64"
        @click="onLogout()">
        <img src="../../assets/img/nav-exit.png" class="mr-5 md:block" />
        <span class="md:hidden lg:block">Log out</span>
      </button>
    </div>
  </div>


  <!-- fixed nav -->
  <nav
    class="fixed bottom-0 inset-x-0 bg-gradient-to-br from-teal-500 to-sky-700 flex justify-between text-sm text-white uppercase font-mono md:hidden">

    <RouterLink
      class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700 transition duration-300"
      :to="{ name: 'Admin Home Page' }">
      <svg class="w-6 h-6  mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
        </path>
      </svg>
      <!--Home-->
    </RouterLink>
    <RouterLink
      class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700 transition duration-300"
      :to="{ name: 'Admin Schedules Page' }">
      <svg class="w-6 h-6  mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"></path>
      </svg>
      <!--Schedules-->
    </RouterLink>
    <RouterLink
      class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700 transition duration-300"
      :to="{ name: 'Admin Appointments Page' }">
      <svg class="w-6 h-6  mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
        </path>
      </svg>
      <!--appointments-->
    </RouterLink>

    <RouterLink class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700"
      :to="{ name: 'Admin Patient Records Page' }">
      <svg class="w-6 h-6  mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path fill-rule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clip-rule="evenodd"></path>
      </svg>
      <!--Patient Records-->
    </RouterLink>
    <RouterLink class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700"
      :to="{ name: 'Admin Notifications Page' }">
      <svg class="w-6 h-6  mx-auto" fill=" currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
        </path>
      </svg>
      <!--Notifications-->
    </RouterLink>
    <RouterLink class="w-full block py-5 px-3 text-center hover:bg-teal-500/40 hover:text-sky-700"
      :to="{ name: 'Admin Messages Page' }">
      <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
        <path
          d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z">
        </path>
      </svg>
      <!--Messages-->
    </RouterLink>

  </nav>
</template>
<style>
.admin-view-sidebar .router-link-exact-active {
  @apply bg-teal-500/40;
}
</style>
