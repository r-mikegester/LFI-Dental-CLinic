<template>
  <div>
    <nav
      class="z-40 px-6 bg-white shadow-lg text-sky-700 md:flex md:justify-between md:items-center fixed w-full"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-sky-700 md:text-2xl hover:text-indigo-400"
          ><img
            src="../../assets/img/LFI-trans.png"
            class="inline-flex"
            width="80"
          />DENTAL CLINIC
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="p-1 border-2 rounded text-sky-700 border-sky-700 hover:text-green-500 hover:border-green-500 focus:outline-none focus:text-green-500 focusLborder-green-500"
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
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <router-link
          class="font-semibold hover:text-green-500"
          :to="{ name: 'Home' }"
        >
          Home
        </router-link>
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button
              @click="show = !show"
              class="flex items-center font-semibold bg-white rounded-md text-sky-700 focus:outline-none hover:text-green-500"
            >
              <span class="mr-4 hover:text-green-500">Services</span>
            </button>

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="py-2 mt-2 bg-white sm:border-l-2 sm:border-green-500 lg:border-none lg:shadow-md lg:absolute lg:right-0 w-44"
            >
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                General Dentistry
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                Cosmetic Surgery
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                Oral Surgery
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                Orthodontics
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                Pediatric Dentistry
              </router-link>
              <router-link
                to="/"
                class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
              >
                Prosthodontics
              </router-link>
            </div>
          </div>
        </li>
        <router-link
          class="font-semibold hover:text-green-500"
          to="/appointments"
          >Appointment</router-link
        >
        <router-link class="font-semibold hover:text-green-500" to="/about"
          >About Us</router-link
        >
        <router-link class="font-semibold hover:text-green-500" to="/contact"
          >Contact Us</router-link
        >
        <ul
          :class="showSettings ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li>
            <div class="relative pb-10 lg:pb-0">
              <!-- Dropdown toggle button -->
              <button
                @click="skrr = !skrr"
                class="flex items-center font-semibold bg-white rounded-md text-sky-700 focus:outline-none hover:text-green-500"
              >
                <span class="mr-4 hover:text-green-500"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                ></span>
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="skrr"
                class="py-2 mt-2 bg-white rounded-md lg:shadow-xl border-2px sm:shadow-none lg:absolute lg:right-0 w-44"
              >
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
                >
                  Account Settings
                </router-link>
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
                >
                  Medical Chart
                </router-link>
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
                >
                  My History
                </router-link>
                <router-link
                  to="/"
                  class="block px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-green-500 hover:text-white"
                >
                  Log out
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    let showSettings = ref(false);
    let show = ref(false);
    let skrr = ref(false);
    const toggleNav = () => (
      (showMenu.value = !showMenu.value),
      (showSettings.value = !showSettings.value)
    );
    return { showMenu, showSettings, show, skrr, toggleNav };
  },
};
</script>
