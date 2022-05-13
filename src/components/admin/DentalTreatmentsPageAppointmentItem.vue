<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import getMonthDayYearOfTimeslot from "../../composables/calendar/getMonthDayYearOfTimeslot";
import setAppointmentPayment from "../../composables/firestore/setAppointmentPayment";
import CheckIcon from "../icons/CheckIcon.vue";
import PencilIcon from "../icons/PencilIcon.vue";

const route = useRoute();
const patientUid = route.params.uid;
const props = defineProps({
  appointment: Object,
});

const isEditing = ref(false);

const appointmentPayment = reactive({
  price: 0,
  balance: 0,
  status: null,
});

onMounted(async () => {
  appointmentPayment.price = props.appointment.price;
  appointmentPayment.balance = props.appointment.balance;
  appointmentPayment.status = props.appointment.status;
});

const onEdit = () => {
  isEditing.value = true;
};

const onSave = async () => {
  await setAppointmentPayment(
    patientUid,
    props.appointment.uid,
    appointmentPayment.price,
    appointmentPayment.balance,
    appointmentPayment.status
  );
  isEditing.value = false;
};
</script>

<template>
  <div
    class="border-b border-teal-500 p-4 gap-4 grid grid-cols-[repeat(2,_minmax(0,_2fr))_repeat(5,_minmax(0,_1fr))]"
  >
    <div class="overflow-hidden text-ellipsis">
      {{ getMonthDayYearOfTimeslot(appointment.uid) }}
    </div>
    <div class="overflow-hidden text-ellipsis">
      {{ appointment.service }}
    </div>
    <div class="overflow-hidden text-ellipsis">
      <RouterLink
        :to="{
          name: 'Admin Procedures Page',
          params: { uid: patientUid, slotSeconds: appointment.uid },
        }"
      >
        View
      </RouterLink>
    </div>
    <!-- Price -->
    <div class="overflow-hidden text-ellipsis">
      <div v-if="isEditing">
        <input
          type="number"
          min="0"
          class="w-full border border-grey-300"
          v-model="appointmentPayment.price"
        />
      </div>
      <div v-else>
        {{ appointmentPayment.price }}
      </div>
    </div>
    <!-- Balance -->
    <div class="overflow-hidden text-ellipsis">
      <div v-if="isEditing">
        <input
          type="number"
          min="0"
          class="w-full border border-grey-300"
          v-model="appointmentPayment.balance"
        />
      </div>
      <div v-else>
        {{ appointmentPayment.balance }}
      </div>
    </div>
    <!-- Status -->
    <div class="overflow-hidden text-ellipsis">
      <div v-if="isEditing">
        <select v-model="appointmentPayment.status">
          <option :value="null">Choose ...</option>
          <option>Paid</option>
          <option>Unpaid</option>
        </select>
      </div>
      <div v-else>
        <div v-if="null === appointmentPayment.status">Pending</div>
        <div v-else>
          {{ appointmentPayment.status }}
        </div>
      </div>
    </div>
    <div class="overflow-hidden text-ellipsis">
      <button type="button" v-if="isEditing" @click="onSave()">
        <CheckIcon />
      </button>
      <button type="button" v-else @click="onEdit()">
        <PencilIcon />
      </button>
    </div>
  </div>
</template>
