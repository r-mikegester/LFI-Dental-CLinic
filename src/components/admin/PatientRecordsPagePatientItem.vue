<script setup>
import {
  setPatientArchived,
  setPatientNotArchived,
} from "../../composables/api/ArchivedProfiles"

const props = defineProps({
  uid: String,
  email: String,
  fullName: String,
  patientIsArchived: Boolean,
})

const emit = defineEmits(["reload"])

async function onArchive() {
  await setPatientArchived(props.uid)
  emit("reload")
}

async function onUnarchive() {
  await setPatientNotArchived(props.uid)
  emit("reload")
}
</script>

<template>
  <div
    class="border-b border-teal-500 p-4 gap-4 grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_repeat(3,_minmax(0,_1fr))_minmax(0,_1fr)]"
  >
    <div class="truncate">
      {{ fullName }}
    </div>
    <div class="truncate">
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
    <div>
      <button type="button" v-if="patientIsArchived" @click="onUnarchive">
        Unarchive
      </button>
      <button type="button" v-else @click="onArchive">Archive</button>
    </div>
  </div>
</template>
