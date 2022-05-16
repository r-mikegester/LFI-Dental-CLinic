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
  if (!profilePictureStore.isInitialized)
    await profilePictureStore.initialize();
  if (!userFullnameStore.isInitialized) await userFullnameStore.initialize();
});
</script>

<template>
  <nav
    class="admin-view-sidebar w-64 bg-teal-500/40 text-sky-700 h-full hidden md:grid grid-rows-[auto_1fr]"
  >
    <!-- image -->
    <div class="flex flex-col items-center py-6">
      <img
        :src="profilePictureStore.getDownloadURL"
        alt="Profile Picture"
        v-if="profilePictureStore.getDownloadURL"
        class="h-24 w-24 object-cover rounded-full mb-1"
      />
      <img src="../../assets/img/nav-person.png" class="h-16" v-else />
      <span>{{ userFullnameStore.getFullname }}</span>
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
        <img src="../../assets/img/nav-notebook.png" class="mr-5" />
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
        :to="{ name: 'Admin Notifications Page' }"
      >
        <img src="../../assets/img/nav-bell.png" class="mr-5" />
        <span>Notifications</span>
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
      <button
        class="hover:bg-teal-500/40 transition duration-200 py-3 px-8 flex items-center mt-auto"
        @click="onLogout()"
      >
        <img src="../../assets/img/nav-exit.png" class="mr-5" />
        <span>Log out</span>
      </button>
    </div>
  </nav>
</template>
<style>
.admin-view-sidebar .router-link-exact-active {
  @apply bg-teal-500/40;
}
</style>
