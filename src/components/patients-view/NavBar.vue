<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { signOut, isSignedIn } from "../../utils/auth/session"
import { userIsPatient } from "../../utils/auth/user-role"
import { useProfilePictureStore } from "../../stores/profilePicture"

const showMenu = ref(false)
const showSettings = ref(false)
const show = ref(false)
const skrr = ref(false)

const toggleNav = () => {
  showMenu.value = !showMenu.value
  showSettings.value = !showSettings.value
}

const userIsLoggedIn = ref(false)
onMounted(async () => {
  if (isSignedIn() && (await userIsPatient())) userIsLoggedIn.value = true
})

const router = useRouter()
const onToggleAccountButton = async () => {
  const isPatient = await userIsPatient()
  if (isSignedIn() && isPatient) {
    userIsLoggedIn.value = true
    skrr.value = !skrr.value
  } else {
    userIsLoggedIn.value = false
    router.push({ name: "Patient Login Page" })
  }
}

const onLogout = async () => {
  await signOut()
  router.push({ name: "Patient Login Page" })
}

const profilePictureStore = useProfilePictureStore()
onMounted(async () => {
  if (isSignedIn() && !profilePictureStore.isInitialized)
    await profilePictureStore.initialize()
})
</script>

<template>
  <nav
    class="fixed xl:sticky top-0 z-40 w-full px-6 bg-white shadow-lg text-sky-700 xl:flex xl:justify-between xl:items-center"
  >
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center py-3 text-xl font-bold text-sky-700 md:text-2xl hover:text-teal-500"
      >
        <img
          src="../../assets/img/lfi-logo-transparent.png"
          class="h-12 px-4"
        />
        <span class="hidden xst:inline">LFI DENTAL CLINIC</span>
      </router-link>
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="xl:hidden shrink-0">
        <button
          type="button"
          class="flex-none p-1 transition-colors duration-200 border-2 rounded text-sky-700 border-sky-700 hover:text-teal-500 hover:border-teal-500 focus:outline-none focus:text-teal-500 focus:border-teal-500 shrink-0"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="patient-view-navbar flex-col space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:mt-0 shrink"
    >
      <router-link
        class="font-semibold transition-colors duration-200 hover:text-teal-500 xl:hover:scale-110 shrink"
        :to="{ name: 'Home' }"
      >
        Home
      </router-link>
      <li>
        <div class="relative">
          <!-- Dropdown toggle button -->
          <button
            @click="show = !show"
            class="flex items-center font-semibold transition-colors duration-200 bg-white rounded-md text-sky-700 focus:outline-none hover:text-teal-500"
          >
            <span
              class="mr-4 transition-colors duration-200 hover:text-teal-500 xl:hover:scale-110"
              >Dental Services</span
            >
          </button>

          <!-- Dropdown menu -->
          <div
            v-show="show"
            class="py-2 mt-2 transition-colors duration-200 bg-white border-l-2 border-teal-500 xl:rounded-md xl:border-none xl:shadow-md xl:absolute xl:right-0 w-44"
          >
            <router-link
              :to="{ name: 'General Dentistry Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              General Dentistry
            </router-link>
            <router-link
              :to="{ name: 'Cosmetic Surgery Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              Cosmetic Surgery
            </router-link>
            <router-link
              :to="{ name: 'Oral Surgery Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              Oral Surgery
            </router-link>
            <router-link
              :to="{ name: 'Orthodontics Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              Orthodontics
            </router-link>
            <router-link
              :to="{ name: 'Pediatric Dentistry Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              Pediatric Dentistry
            </router-link>
            <router-link
              :to="{ name: 'Prosthodontics Page' }"
              class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
            >
              Prosthodontics
            </router-link>
          </div>
        </div>
      </li>
      <router-link
        class="font-semibold transition-colors duration-200 hover:text-teal-500 xl:hover:scale-110"
        to="/appointments"
        >Set an Appointment</router-link
      >
      <router-link
        class="font-semibold transition-colors duration-200 hover:text-teal-500 xl:hover:scale-110"
        to="/about"
        >About Us</router-link
      >
      <router-link
        class="font-semibold transition-colors duration-200 hover:text-teal-500 xl:hover:scale-110"
        to="/contact"
        >Contact Us</router-link
      >
      <ul
        :class="showSettings ? 'flex' : 'hidden'"
        class="patient-view-navbar flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li>
          <div class="relative pb-10 xl:pb-0">
            <!-- Dropdown toggle button -->
            <button
              @click="onToggleAccountButton"
              class="flex items-center font-semibold transition-colors duration-200 bg-white rounded-md text-sky-700 focus:outline-none hover:text-teal-500 hover:scale-110"
            >
              <span
                class="mr-4 transition-colors duration-200 hover:text-teal-500"
              >
                <img
                  v-if="userIsLoggedIn && profilePictureStore.getDownloadURL"
                  :src="profilePictureStore.getDownloadURL"
                  alt="Profile Picture"
                  class="h-10 w-10 object-cover rounded-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  v-else
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>

            <!-- Dropdown menu -->
            <div v-if="userIsLoggedIn">
              <div
                v-show="skrr"
                class="py-2 mt-2 transition-colors duration-200 bg-white border-l-2 border-teal-500 rounded-none xl:rounded-md xl:shadow-xl xl:border-none sm:shadow-none xl:absolute xl:right-0 w-44"
              >
                <router-link
                  :to="{ name: 'Patient Account Settings Page' }"
                  class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
                >
                  Account Settings
                </router-link>
                <router-link
                  :to="{ name: 'Patient Medical Chart Page' }"
                  class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
                >
                  Medical Chart
                </router-link>
                <router-link
                  :to="{ name: 'Patient Appointment History Page' }"
                  class="block px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
                >
                  My History
                </router-link>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 text-sm font-semibold transition-colors duration-200 text-sky-700 hover:bg-teal-500 hover:text-white hover:scale-110 hover:rounded-md"
                  @click="onLogout()"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </ul>
  </nav>
  <div class="h-[4.5rem] xl:hidden"></div>
</template>
<style>
.patient-view-navbar .router-link-exact-active {
  color: rgb(40, 187, 187);
}
</style>
