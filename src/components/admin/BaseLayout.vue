<script setup>
import Footer from "./PageFooter.vue";
import SideBar from "./SideBar.vue";
</script>

<template>
  <div class="grid grid-rows-[minmax(100vh,_1fr)_auto] min-h-screen">
    <div class="grid grid-cols-[auto_1fr]">
      <div>
        <SideBar />
      </div>
      <main class="p-6 lg:p-12 text-sky-600 font-[Poppins]">
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>
