<script setup>
defineProps({
  uid: String,
  email: String,
  fullName: String,
})
</script>

<template>
  <div
    class="border-b border-teal-500 p-4 gap-4 grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_repeat(3,_minmax(0,_1fr))]"
  >
    <div class="overflow-hidden text-ellipsis">
      {{ fullName }}
    </div>
    <div class="overflow-hidden text-ellipsis">
      {{ email }}
    </div>
    <div>
      <RouterLink :to="{ name: 'Admin Medical Chart Page', params: { uid } }">
        View
      </RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: 'Admin Dental Chart Page', params: { uid } }">
        View
      </RouterLink>
    </div>
    <div>
      <RouterLink
        :to="{ name: 'Admin Dental Treatments Page', params: { uid } }"
        >View
      </RouterLink>
    </div>
  </div>
</template>
