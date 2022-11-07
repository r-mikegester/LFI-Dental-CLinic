<script setup>
import BaseLayout from "../components/patient/BaseLayout.vue"
import HeroSection from "../components/patient/HeroSection.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <BaseLayout>
    <HeroSection>Book an Appointment</HeroSection>
    <RouterView />
  </BaseLayout>
</template>
