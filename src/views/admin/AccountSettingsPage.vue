<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue";
</script>
<template>
  <BaseLayout>
    <div class="ml-20 mr-80">
      <div
        class="border-b-[3px] border-teal-500 pt-20 p-4 pb-1 text-2xl text-center md:text-left font-semibold"
      >
        <h1>Account Settings</h1>
      </div>

      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
      >
        <div>Profile Picture</div>
        <div></div>
        <div class="text-teal-500 hover:text-teal-400 text-right">
          <button>Edit</button>
        </div>
      </div>
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
      >
        <div>Name</div>
        <div>Jane Doe</div>
        <div class="text-teal-500 hover:text-teal-400 text-right">
          <button>Edit</button>
        </div>
      </div>
      <div
        class="border-b-[3px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
      >
        <div>Password</div>
        <div>*****</div>
        <div class="text-teal-500 hover:text-teal-400 text-right">
          <button>Edit</button>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
