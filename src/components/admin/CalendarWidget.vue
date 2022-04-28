<template>
  <div class="border border-teal-500 rounded-xl max-w-fit">
    <!-- Days -->
    <div class="grid grid-cols-[repeat(7,_minmax(0,_7rem))] gap-4 pt-4 px-4">
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Sunday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Monday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Tuesday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Wednesday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Thursday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Friday
      </div>
      <div
        class="text-center text-ellipsis overflow-hidden border border-teal-500"
      >
        Saturday
      </div>
    </div>
    <!-- Dates -->
    <div
      class="grid grid-cols-[repeat(7,_minmax(0,_7rem))] gap-4 p-4 auto-rows-[5rem]"
    >
      <slot></slot>
    </div>
  </div>
</template>
