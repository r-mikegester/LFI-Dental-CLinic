<script setup>
import BaseLayout from "../../../components/admin//BaseLayout.vue";
import { computed, onMounted, ref } from "vue";
import listUserProfiles from "../../../composables/api/listUserProfiles";
import PatientRecordsPagePatientItem from "../../../components/admin/PatientRecordsPagePatientItem.vue";

const usersList = ref([]);

const patientsListIsLoaded = ref(false);
onMounted(async () => {
  usersList.value = await listUserProfiles();
  patientsListIsLoaded.value = true;
});

const patientsList = computed(() => {
  return usersList.value.filter(
    (user) => user.customClaims.accountType === "patient"
  );
});

const nameFilter = ref("");

const patientsListFilteredByName = computed(() => {
  return patientsList.value.filter((user) => {
    return user.displayName.toLowerCase().includes(nameFilter.value);
  });
});
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
        <div v-if="patientsList.length > 0">
          <div class="bg-teal-500/40">
            <div
              class="p-4 gap-4 grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_repeat(3,_minmax(0,_1fr))] font-semibold"
            >
              <div>Name</div>
              <div>Email</div>
              <div>Medical Chart</div>
              <div>Dental Chart</div>
              <div>Dental Treatment</div>
            </div>
          </div>
          <div v-if="patientsListFilteredByName.length > 0">
            <PatientRecordsPagePatientItem
              v-for="user in patientsListFilteredByName"
              :key="user.uid"
              :uid="user.uid"
              :email="user.email"
              :fullName="user.displayName"
            />
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
