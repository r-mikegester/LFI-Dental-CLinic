<template>
  <div class="grid grid-cols-2 border border-teal-500 p-6 mt-6 rounded-xl">
    <div class="border-r border-teal-500 pr-4 pb-8">
      <div class="text-center text-xl mb-3">Morning</div>
      <div class="grid grid-cols-2 gap-4">
        <slot name="morning-slots"></slot>
      </div>
    </div>
    <div class="border-l border-teal-500 pl-4">
      <div class="text-center text-xl mb-3">Afternoon</div>
      <div class="grid grid-cols-2 gap-4">
        <slot name="afternoon-slots"></slot>
      </div>
    </div>
  </div>
</template>
