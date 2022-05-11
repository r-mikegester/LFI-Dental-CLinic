<script setup>
import FooterSection from "../patients-view/FooterSection.vue";
import NavBar from "../patients-view/NavBar.vue";
</script>

<template>
  <div
    class="grid grid-rows-[auto_1fr_auto] min-h-screen text-sky-600 font-[Poppins]"
  >
    <NavBar />
    <div class="h-20"></div>
    <main>
      <slot></slot>
    </main>
    <FooterSection />
  </div>
</template>
