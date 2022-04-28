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
        SET AN APPOINTMENT
      </h5>
      <img
        src="../assets/img/bgs/ContactUs.jpg"
        class="w-full bg-fixed object-fit-cover object-center filter brightness-50"
        style="height: 50vh; background-position: center background-size: 100% 100%;"
      />
    </div>
  </div>
  <RouterView />
  <FooterSection />
</template>
