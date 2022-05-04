<template>
  <section class="patient-view-hero-section h-[40vh] mt-1 relative -z-[1]">
    <img
      src="../../assets/img/bgs/ContactUs.jpg"
      alt="Woman in a dentist chair smiling in front of a dentist"
      class="absolute top-0 left-0 w-full h-full object-cover blur-sm"
    />
    <div
      class="absolute top-0 left-0 h-full w-full flex items-center justify-center uppercase text-4xl text-white font-bold"
    >
      <slot></slot>
    </div>
  </section>
</template>
