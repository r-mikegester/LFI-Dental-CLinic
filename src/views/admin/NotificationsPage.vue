<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue";
import listenToAllUserAppointments from "../../composables/firestore/listeners/listenToAllUserAppointments";
import NotificationsPageNotificationItem from "../../components/admin/NotificationsPageNotificationItem.vue";

const userAppointments = listenToAllUserAppointments();
</script>
<template>
  <BaseLayout>
    <div class="px-6">
      <h1 class="font-semibold text-2xl pb-3">Notifications</h1>
      <div
        class="text-2xl font-bold text-center"
        v-if="null === userAppointments"
      >
        Loading notifications ...
      </div>
      <div
        class="text-2xl text-center mt-12"
        v-else-if="userAppointments.length === 0"
      >
        No notifications at this time
      </div>
      <div v-else>
        <div
          class="grid grid-cols-5 px-6 bg-teal-500/40 font-semibold gap-4 py-3"
        >
          <div class="overflow-hidden text-ellipsis">Appointment</div>
          <div class="overflow-hidden text-ellipsis">Full name</div>
          <div class="overflow-hidden text-ellipsis">Service</div>
          <div class="overflow-hidden text-ellipsis">Payment Status</div>
          <div class="overflow-hidden text-ellipsis text-center">
            Request Access
          </div>
        </div>
        <div>
          <NotificationsPageNotificationItem
            v-for="userAppointment in userAppointments"
            :key="userAppointment.uid"
            :appointment="userAppointment"
          />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
