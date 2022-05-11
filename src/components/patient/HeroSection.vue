<template>
  <section class="patient-view-hero-section h-[40vh] mt-1 relative -z-[1]">
    <img
      src="../../assets/img/bgs/ContactUs.jpg"
      alt="Woman in a dentist chair smiling in front of a dentist"
      class="absolute top-0 left-0 object-cover w-full h-full blur-sm"
    />
    <div
      class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-4xl font-bold text-center text-white uppercase"
    >
      <slot></slot>
    </div>
  </section>
</template>
