<script setup>
import BaseLayout from "../../../components/patient/BaseLayout.vue";
import HeroSection from "../../../components/patient/HeroSection.vue";
</script>

<template>
  <BaseLayout>
    <HeroSection>Dental Services</HeroSection>
    <!-- Page title -->
    <section class="bg-teal-500 py-3">
      <h3 class="font-bold text-3xl text-white text-center">
        Pediatric Dentistry
      </h3>
    </section>
    <!-- Main content -->
    <section>
      <div class="max-w-6xl mx-auto px-6 py-24">
        <article class="grid md:grid-cols-2 max-w-4xl mx-auto">
          <div class="mb-6 md:mb-0">
            <img
              src="../../../assets/img/dental-services/fluoride-treatment.jpg"
              class="mx-auto w-full max-w-xs"
            />
          </div>
          <div class="flex flex-col justify-center text-justify md:pl-12">
            <h4 class="text-2xl font-bold mb-3">Fluoride Treatment</h4>
            <p class="mb-3">
              It can strengthen enamel and protect teeth against damage from
              plaque. Along with possibly making dietary changes, using these
              fluoride treatments can help the teeth repair any minor damage
              from tooth decay.
            </p>
            <div>
              <button
                type="button"
                class="rounded-full px-3 py-1 uppercase border border-sky-600"
              >
                Get this Service
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </BaseLayout>
</template>
