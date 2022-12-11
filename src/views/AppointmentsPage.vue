<script setup>
import BaseLayout from "../components/patient/BaseLayout.vue"
import HeroSection from "../components/patient/HeroSection.vue"
import { RouterView } from "vue-router"
import { onUnmounted } from "vue"
import { useAppointmentDetailsStore } from "../stores/appointmentDetails"

const appointmentDetailsStore = useAppointmentDetailsStore()
onUnmounted(() => {
  appointmentDetailsStore.$reset()
})
</script>

<template>
  <BaseLayout>
    <HeroSection>Book an Appointment</HeroSection>
    <RouterView />
  </BaseLayout>
</template>
