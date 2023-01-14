<script setup>
import { getAuth } from "firebase/auth"
import BaseLayout from "../../components/patient/BaseLayout.vue"
import HeroSection from "../../components/patient/HeroSection.vue"
import { getUserAppointments } from "../../composables/api/user-appointments/Appointments"
import MyHistoryPageAppointmentItem from "../../components/patient/MyHistoryPageAppointmentItem.vue"
import { onMounted, ref } from "vue"

const auth = getAuth()
const patientUid = auth.currentUser.uid
const userAppointments = ref([])

async function loadUserAppointments() {
  userAppointments.value = await getUserAppointments(patientUid)
}

onMounted(async () => {
  await loadUserAppointments()
})
</script>
<template>
  <BaseLayout>
    <HeroSection>My Account</HeroSection>
    <div class="max-w-6xl mx-auto text-sky-700 py-12 px-6">
      <h3 class="justify-start text-3xl font-semibold text-left pb-3">
        My Appointments
      </h3>
      <!-- Table -->
      <div>
        <!-- Header -->
        <div
          class="hidden sm:grid grid-cols-7 font-semibold px-6 py-3 bg-teal-500/40 uppercase"
        >
          <div class="overflow-hidden text-ellipsis">DATE</div>
          <div class="overflow-hidden text-ellipsis">SERVICE</div>
          <div class="overflow-hidden text-ellipsis">PROCEDURE</div>
          <div class="overflow-hidden text-ellipsis">PRICE</div>
          <div class="overflow-hidden text-ellipsis">BALANCE</div>
          <div class="overflow-hidden text-ellipsis">ATTENDED</div>
          <div class="overflow-hidden text-ellipsis text-center">Actions</div>
        </div>
        <!-- Body -->
        <div class="grid gap-4 sm:block" v-if="userAppointments.length > 0">
          <MyHistoryPageAppointmentItem
            v-for="userAppointment in userAppointments"
            :key="userAppointment.uid"
            :appointment="userAppointment"
            @updated="loadUserAppointments"
          />
        </div>
        <div class="text-center mt-8 text-lg" v-else>
          No Appointments Scheduled
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
