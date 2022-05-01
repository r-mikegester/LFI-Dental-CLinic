<script setup>
import MenuIcon from "../icons/MenuIcon.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const mobileNavbarIsVisible = ref(false);
const dentalServicesMenuIsVisible = ref(false);
</script>

<template>
  <nav class="sticky top-0 bg-white shadow z-10">
    <div class="max-w-7xl mx-auto px-6 py-3 lg:flex lg:justify-between">
      <!-- Website logo -->
      <div class="flex justify-between">
        <RouterLink class="flex items-center" :to="{ name: 'Home' }">
          <img
            src="../../assets/img/lfi-logo-transparent.png"
            alt="LFI"
            class="h-12"
          />
          <span class="pl-4 font-bold tracking-widest uppercase text-xl">
            Dental Clinic
          </span>
        </RouterLink>
        <div class="lg:hidden flex items-center">
          <button
            class="border-2 border-sky-600 p-1 rounded-md"
            @click="mobileNavbarIsVisible = !mobileNavbarIsVisible"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <!-- Navigation links -->
      <ul
        class="font-medium hidden lg:relative lg:flex lg:justify-between lg:items-center lg:gap-8 lg:w-auto"
      >
        <li class="my-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'Home' }" class="hover:text-teal-500">
            Home
          </RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <button
            type="button"
            class="font-medium hover:text-teal-500"
            @click="dentalServicesMenuIsVisible = !dentalServicesMenuIsVisible"
          >
            Dental Services
          </button>
          <ul
            class="mt-6 absolute bg-white font-normal shadow-xl"
            v-show="dentalServicesMenuIsVisible"
          >
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'General Dentistry Page' }">
                General Dentistry
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Cosmetic Surgery Page' }">
                Cosmetic Surgery
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Pediatric Dentistry Page' }">
                Pediatric Dentistry
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Orthodontics Page' }">
                Orthodontics
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Oral Surgery Page' }">
                Oral Surgery
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Prosthodontics Page' }">
                Prosthodontics
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink
            :to="{ name: 'Appointments Page' }"
            class="hover:text-teal-500"
          >
            Set an Appointment
          </RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'About Page' }" class="hover:text-teal-500">
            About Us
          </RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink
            :to="{ name: 'Contact Page' }"
            class="hover:text-teal-500"
          >
            Contact Us
          </RouterLink>
        </li>
      </ul>

      <!-- Navigation links for Mobile layout -->
      <ul
        class="font-medium absolute bg-white shadow-xl w-full left-0 lg:hidden"
        v-show="mobileNavbarIsVisible"
      >
        <li class="my-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <button
            type="button"
            class="font-medium"
            @click="dentalServicesMenuIsVisible = !dentalServicesMenuIsVisible"
          >
            Dental Services
          </button>
          <ul
            class="absolute bg-white font-normal shadow-xl"
            v-show="dentalServicesMenuIsVisible"
          >
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'General Dentistry Page' }">
                General Dentistry
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Cosmetic Surgery Page' }">
                Cosmetic Surgery
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Pediatric Dentistry Page' }">
                Pediatric Dentistry
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Orthodontics Page' }">
                Orthodontics
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Oral Surgery Page' }">
                Oral Surgery
              </RouterLink>
            </li>
            <li class="px-4 py-2 hover:bg-teal-500/40">
              <RouterLink :to="{ name: 'Prosthodontics Page' }">
                Prosthodontics
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'Appointments Page' }">
            Set an Appointment
          </RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'About Page' }">About Us</RouterLink>
        </li>
        <li class="mb-2 ml-6 lg:m-0">
          <RouterLink :to="{ name: 'Contact Page' }">Contact Us</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
