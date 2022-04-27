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
    <h1 class="text-4xl text-center font-bold">Home page</h1>
  </div>

  <RouterView />
  <FooterSection />
</template>
