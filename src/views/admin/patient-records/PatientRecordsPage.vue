<script setup>
import BaseLayout from "../../../components/admin//BaseLayout.vue"
import { computed, onMounted, ref } from "vue"
import listUserProfiles from "../../../composables/api/listUserProfiles"
import PatientRecordsPagePatientItem from "../../../components/admin/PatientRecordsPagePatientItem.vue"
import listUserProfilesStartingWith from "../../../composables/api/users-list/listUserProfilesStartingWith"

const patientsList = ref([])

const patientsListIsLoaded = ref(false)
const nextPageStartsAtUid = ref(null)
const pageNumber = ref(1)
const pageSize = 5

onMounted(async () => {
  patientsList.value = await listUserProfiles()

  if (patientsList.value.nextValueUid)
    nextPageStartsAtUid.value = patientsList.value.nextValueUid

  patientsListIsLoaded.value = true
})

const visiblePatientsList = computed(() => {
  const result = patientsList.value.users.slice(
    (pageNumber.value - 1) * pageSize,
    (pageNumber.value - 1) * pageSize + pageSize
  )
  return result
})

const onNextPage = async () => {
  patientsList.value.users = patientsList.value.users.slice(
    0,
    (pageNumber.value - 1) * pageSize + pageSize
  )

  const newItems = await listUserProfilesStartingWith(nextPageStartsAtUid.value)
  patientsList.value.users = [...patientsList.value.users, ...newItems.users]

  if (newItems.nextValueUid) {
    nextPageStartsAtUid.value = newItems.nextValueUid
  } else nextPageStartsAtUid.value = null

  pageNumber.value++
}

const onPrevPage = async () => {
  nextPageStartsAtUid.value = visiblePatientsList.value[0].uid
  pageNumber.value--
}
</script>

<template>
  <BaseLayout>
    <div class="lg:px-6">
      <div class="grid grid-cols-[auto_1fr]">
        <!-- Page title -->
        <h1 class="text-2xl font-semibold mb-3">Patient Records</h1>
        <!-- Search box -->
        <div
          v-if="patientsListIsLoaded && patientsList.length > 0"
          class="pb-6"
        >
          <label class="relative block float-right">
            <span class="absolute inset-y-0 right-2 flex items-center pl-2">
              <img src="../../../assets/img/search-icon.png" />
            </span>
            <input
              class="w-full placeholder:normal placeholder:text-slate-400 block bg-white border-2 border-sky-400/60 border-3px py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search names ..."
              type="text"
              name="search"
              v-model="nameFilter"
            />
          </label>
        </div>
      </div>
      <div v-if="patientsListIsLoaded">
        <div v-if="patientsList.users.length > 0">
          <div class="bg-teal-500/40">
            <div
              class="p-4 gap-4 grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_repeat(3,_minmax(0,_1fr))] font-semibold"
            >
              <div>Name</div>
              <div>Email</div>
              <div class="truncate">Medical Chart</div>
              <div class="truncate">Dental Chart</div>
              <div class="truncate">Dental Treatment</div>
            </div>
          </div>
          <div v-if="visiblePatientsList.length > 0">
            <PatientRecordsPagePatientItem
              v-for="user in visiblePatientsList"
              :key="user.uid"
              :uid="user.uid"
              :email="user.email"
              :fullName="user.displayName"
            />
          </div>
          <div class="flex justify-end gap-3">
            <button
              v-if="pageNumber > 1"
              type="button"
              class="px-3 py-1 mt-3 font-medium border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-200]"
              @click="onPrevPage()"
            >
              Previous
            </button>
            <button
              v-if="nextPageStartsAtUid"
              type="button"
              class="px-3 py-1 mt-3 font-medium border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-200"
              @click="onNextPage()"
            >
              Next
            </button>
          </div>
        </div>
        <div class="text-2xl text-center mt-12" v-else>No patients found</div>
      </div>
      <div class="text-2xl font-bold text-center" v-else>
        Loading patients ...
      </div>
    </div>
  </BaseLayout>
</template>
