<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/patients-view/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
