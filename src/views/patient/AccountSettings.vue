<script setup>
import BaseLayout from "../../components/patient/BaseLayout.vue";
import HeroSection from "../../components/patient/HeroSection.vue";
</script>
<template>
  <BaseLayout>
    <HeroSection> Account Settings </HeroSection>
    <div class="">
      <div class="px-48 pb-20">
        <div
          class="border-b-[3px] border-teal-500 pt-20 p-4 pb-1 text-2xl text-center md:text-left font-semibold"
        >
          <h1 class="text-5xl">Account Settings</h1>
        </div>

        <div
          class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
        >
          <div>Profile Picture</div>
          <div></div>
          <div class="text-right text-teal-500 hover:text-teal-400">
            <button>Edit</button>
          </div>
        </div>
        <div
          class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
        >
          <div>Name</div>
          <div>Arni Isidro</div>
          <div class="text-right text-teal-500 hover:text-teal-400">
            <button>Edit</button>
          </div>
        </div>
        <div
          class="border-b-[3px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
        >
          <div>Password</div>
          <div>*****</div>
          <div class="text-right text-teal-500 hover:text-teal-400">
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
