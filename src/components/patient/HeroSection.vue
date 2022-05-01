<template>
  <section
    class="patient-view-hero-section h-[40vh] my-1 relative before:block before:h-full before:bg-no-repeat before:bg-center before:bg-cover before:blur-sm"
  >
    <div
      class="absolute top-0 left-0 h-full w-full flex items-center justify-center uppercase text-4xl text-white font-bold [text-shadow:_rgba(0,_0,_0,_0.2)_0_2px_2px]"
    >
      <slot></slot>
    </div>
  </section>
</template>
<style>
.patient-view-hero-section::before {
  background-image: url("../../assets/img/bgs/ContactUs.jpg");
}
</style>
