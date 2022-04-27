<script setup>
import { RouterView } from "vue-router";
import NavBar from "../components/patients-view/NavBar.vue";
import FooterSection from "../components/patients-view/FooterSection.vue";
</script>
<template>
  <header>
    <NavBar />
  </header>

  <div>
    <div id="hero" class="bg-fixed">
      <h5
        class="relative z-30 top-52 justify-center text-5xl font-bold text-center text-white"
      >
        CONTACT US
      </h5>
      <img
        src="../assets/img/bgs/ContactUs.jpg"
        class="w-full bg-fixed object-fit-cover object-center filter brightness-50"
        style="height: 50vh; background-position: center background-size: 100% 100%;"
      />
    </div>
  </div>

  <div
    class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900"
  >
    <div class="flex flex-col justify-between">
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-sky-700">
          Contact
        </h2>
        <div class="text-sky-700 mt-8 font-semibold">
          <span class="text-teal-500 font-bold">Address: </span>2305 Salvador
          Ave. Jordan Plaines Phase 1 Subdivision, Barangay Sta.Monica,
          Novaliches, Quezon City
        </div>
        <div class="text-sky-700 mt-4 mb-5 font-semibold">
          <span class="text-teal-500 font-bold">Mobile Number: </span>
          09284632914 <br />
          <span class="text-teal-500 font-bold">Landline: </span>
          857 99537
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.8076344268989!2d121.04312885570937!3d14.723433981933423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0f84eb18371%3A0x894844ab192dd95b!2s2305%20Jordan%20Subd.%2C%20Novaliches%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1651031166862!5m2!1sen!2sph"
          class="border-2 border-sky-700 rounded-lg w-full"
          width="450"
          height="300"
          style=""
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="shadow-lg rounded-lg p-6 border-2 border-sky-700">
      <div>
        <h2
          class="text-4xl lg:text-5xl font-bold leading-tight text-sky-700 mb-5"
        >
          Send Message
        </h2>

        <input
          class="w-full bg-gray-100 text-sky-700 mt-2 border-2 border-sky-700 p-3 rounded-full focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name*"
        />
      </div>
      <div class="mt-8">
        <input
          class="w-full bg-gray-100 text-sky-700 mt-2 border-2 border-sky-700 p-3 rounded-full focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Subject*"
        />
      </div>
      <div class="mt-8">
        <textarea
          class="w-full h-32 min-h-32 bg-gray-100 text-sky-700 mt-2 border-2 border-sky-700 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Message*"
        ></textarea>
      </div>
      <div class="mt-8">
        <button
          class="uppercase text-sm font-bold tracking-wide bg-sky-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-sky-500"
        >
          Submit
        </button>
      </div>
    </div>
  </div>

  <RouterView />
  <FooterSection />
</template>
