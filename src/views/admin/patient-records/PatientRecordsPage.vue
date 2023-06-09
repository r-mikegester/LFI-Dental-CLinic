<script setup>
import BaseLayout from "../../../components/admin/BaseLayout.vue"
import { computed, nextTick, onMounted, ref } from "vue"
import {
  listUserProfiles,
  searchUserProfiles,
} from "../../../utils/api/UserProfiles"
import PatientRecordsPagePatientItem from "../../../components/admin/PatientRecordsPagePatientItem.vue"

const searchFilter = ref("")
const patientsList = ref([])
const patientsListIsLoaded = ref(false)
const isShowingSearchResults = ref(false)
const pageSize = ref(10)
const pageNumber = ref(0)
const maxPageNumber = computed(() => {
  return Math.ceil(patientsList.value.length / pageSize.value) - 1
})

onMounted(async () => {
  const { users } = await listUserProfiles()
  patientsList.value = users
  patientsListIsLoaded.value = true
})

const visiblePatientsList = computed(() => {
  return patientsList.value.slice(
    pageNumber.value * pageSize.value,
    pageNumber.value * pageSize.value + pageSize.value
  )
})

async function onClearSearch() {
  patientsListIsLoaded.value = false
  await nextTick()

  const { users } = await listUserProfiles(searchFilter.value)
  patientsList.value = users

  searchFilter.value = ""
  pageSize.value = 10
  isShowingSearchResults.value = false
  patientsListIsLoaded.value = true
}

async function onSearch() {
  if (searchFilter.value === "") return

  patientsListIsLoaded.value = false
  await nextTick()

  const { users } = await searchUserProfiles(searchFilter.value)
  patientsList.value = users

  isShowingSearchResults.value = true
  patientsListIsLoaded.value = true
}

function onPageSizeChanged() {
  pageNumber.value = 0
}

async function reloadUsers() {
  patientsListIsLoaded.value = false

  const { users } = await listUserProfiles()
  patientsList.value = users

  searchFilter.value = ""
  pageSize.value = 10
  isShowingSearchResults.value = false
  patientsListIsLoaded.value = true
}
</script>

<template>
  <BaseLayout>
    <div class="lg:px-6">
      <div class="flex justify-between mb-3">
        <!-- Page title -->
        <div>
          <h1 class="text-2xl font-semibold">Patient Records</h1>
          <RouterLink
            :to="{
              name: 'Admin Archived Patient Records Page',
            }"
          >
            » Browse archive
          </RouterLink>
        </div>
        <!-- Search box -->
        <div v-if="patientsListIsLoaded" class="pb-6 flex gap-3">
          <select
            v-if="isShowingSearchResults"
            v-model="pageSize"
            class="px-3 h-full bg-white border border-gray-300"
            @change="onPageSizeChanged"
          >
            <option :value="5">5</option>
            <option :value="10">10</option>
            <option :value="15">15</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
          <div class="flex">
            <input
              class="w-full placeholder:normal placeholder:text-slate-400 block bg-white border-2 border-sky-400/60 border-3px py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search names ..."
              type="text"
              name="search"
              v-model="searchFilter"
            />
            <button
              type="button"
              class="border border-gray-300 px-3"
              @click="onSearch"
            >
              <img src="../../../assets/img/search-icon.png" />
            </button>
            <button
              v-if="isShowingSearchResults"
              type="button"
              class="border border-gray-300 px-3"
              @click="onClearSearch"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div v-if="patientsListIsLoaded">
        <div v-if="patientsList.length > 0">
          <div class="bg-teal-500/40">
            <div
              class="p-4 gap-4 grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_repeat(3,_minmax(0,_1fr))_minmax(0,_1fr)] font-semibold"
            >
              <div>Name</div>
              <div>Email</div>
              <div class="truncate">Medical Chart</div>
              <div class="truncate">Dental Chart</div>
              <div class="truncate">Dental Treatment</div>
              <div></div>
            </div>
          </div>
          <div v-if="visiblePatientsList.length > 0">
            <PatientRecordsPagePatientItem
              v-for="user in visiblePatientsList"
              :key="user.uid"
              :uid="user.uid"
              :email="user.email"
              :fullName="user.displayName"
              :patientIsArchived="false"
              @reload="reloadUsers"
            />
          </div>
          <div class="flex justify-end gap-3">
            <button
              v-if="pageNumber > 0"
              type="button"
              class="px-3 py-1 mt-3 font-medium border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-200]"
              @click="pageNumber--"
            >
              Previous
            </button>
            <button
              v-if="pageNumber < maxPageNumber"
              type="button"
              class="px-3 py-1 mt-3 font-medium border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-200"
              @click="pageNumber++"
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
