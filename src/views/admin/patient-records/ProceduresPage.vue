<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <BaseLayout>
    <div class="p-4">
      <h1 class="text-2xl text-left font-bold pb-20">
        <RouterLink
          :to="{ name: 'Admin Patient Records Page', params: { uid: 123 } }"
          >Patient Records
        </RouterLink>
        >
        <RouterLink
          :to="{ name: 'Admin Dental Treatments Page', params: { uid: 123 } }"
          >Dental Treatment
        </RouterLink>
        >
        <RouterLink
          :to="{ name: 'Admin Procedures Page', params: { uid: 123 } }"
          >Procedure
        </RouterLink>
      </h1>
    </div>
    <div class="ml-20 mr-40">
      <p class="border-2 border-teal-500/60 p-5 pb-20">
        Lorem ipsum dolor sit amet. Ut repellat voluptatem quo omnis pariatur et
        maxime fugiat et nemo earum eum consequatur atque! A velit voluptate et
        illo rerum et dolorem esse id quia odit sed molestias possimus. Et
        consectetur dolorem eos molestiae similique ut ducimus consequatur aut
        sunt neque et illum aspernatur. Sit quia autem ut quis illo vel quaerat
        eaque qui quasi corporis aut odio quia vel rerum sint aut adipisci
        officiis.
      </p>

      <div class="justify-center grid-cols-3 float-right mt-4">
        <button
          class="border-teal-500 border 1px rounded-full py-1 px-5 text-sm mr-3 hover:bg-teal-500 hover:text-white"
        >
          Edit
        </button>
        <button
          class="border-teal-500 border 1px rounded-full py-1 px-5 text-sm mr-3 hover:bg-teal-500 hover:text-white"
        >
          Save
        </button>
        <button
          class="border-teal-500 border 1px rounded-full py-1 px-2 text-sm hover:bg-teal-500 hover:text-white"
        >
          Allow Access
        </button>
      </div>
    </div>
  </BaseLayout>
</template>
