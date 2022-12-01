<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue"
import AccountSettings from "../../components/shared/AccountSettings.vue"
</script>
<template>
  <BaseLayout>
    <AccountSettings />
    <button
      class="flex items-center px-8 py-3 mx-auto border-2 rounded-lg border-teal-500 transition duration-200 hover:bg-teal-500/40 lg:mt-auto md:w-20 lg:w-64 lg:hidden md:hidden"
      @click="onLogout()">
      <img src="../../assets/img/nav-exit.png" class="mr-5 md:block" />
      <span class="md:hidden lg:block items-center">Log out</span>
    </button>
  </BaseLayout>
</template>
