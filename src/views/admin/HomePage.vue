<script setup>
import BaseLayout from "../../components/admin/BaseLayout.vue";
import { RouterLink } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import getReminders from "../../composables/firestore/reminders/getReminders";
import setReminders from "../../composables/firestore/reminders/setReminders";
import SimpleModalDialog from "../../components/admin/SimpleModalDialog.vue";

const isEditing = ref(false);
const reminders = reactive({
  message: "",
});

const showReminders = ref(false);
onMounted(async () => {
  const { message } = await getReminders();
  if (message) {
    reminders.message = message;
    showReminders.value = true;
    console.log(showReminders.value);
  }
});

const onEdit = () => {
  isEditing.value = true;
};

const onSave = async () => {
  await setReminders(reminders.message);
  isEditing.value = false;
};
</script>

<template>
  <BaseLayout>
    <div class="grid grid-rows-[auto_1fr] h-full lg:p-6">
      <!-- Banner -->
      <div class="flex flex-col md:flex-row items-center pb-20">
        <img
          src="../../assets/img/lfi-logo.png"
          class="h-28 mr-4 pointer-events-none"
        />
        <div
          class="text-4xl leading-10 font-light max-w-[29ch] text-center md:text-left"
        >
          Welcome back to L.F.I. Dental Clinic. Have a great day!
        </div>
      </div>
      <div class="grid lg:grid-cols-[auto_1fr]">
        <!-- Big Buttons -->
        <div
          class="grid justify-center xl:grid-cols-2 max-w-2xl gap-12 auto-rows-[10rem]"
        >
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-16 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Appointments Page' }"
          >
            <img src="../../assets/img/nav-bell.png" class="mr-5" />
            <span>Appointments</span>
          </RouterLink>
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-4 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Patient Records Page' }"
          >
            <img src="../../assets/img/nav-clipboard.png" class="mr-5" />
            Patient Records
          </RouterLink>
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-4 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Schedules Page' }"
          >
            <img src="../../assets/img/nav-calendar.png" class="mr-5" />
            Schedules
          </RouterLink>
          <RouterLink
            class="bg-teal-500/40 max-w-xs hover:bg-teal-500/60 transition duration-200 h-40 flex p-4 items-center justify-center text-xl rounded-2xl"
            :to="{ name: 'Admin Notifications Page' }"
          >
            <img src="../../assets/img/nav-calendar.png" class="mr-5" />
            Notifications
          </RouterLink>
        </div>
        <!-- Schedules-->
        <div class="pt-12 lg:pt-0 grid grid-rows-[auto] px-12">
          <div
            class="max-w-xs mt-auto mx-auto w-full border border-teal-500 rounded-xl"
          >
            <div class="pl-6 pr-3 pt-3 flex justify-between">
              <div>Reminders</div>
              <button
                v-if="isEditing"
                class="px-4 text-sm border border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-xl"
                @click="onSave()"
              >
                Save
              </button>
              <button
                v-else
                class="px-4 text-sm border border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-xl"
                @click="onEdit()"
              >
                Edit
              </button>
            </div>
            <div class="h-40 p-2 w-full">
              <textarea
                v-if="isEditing"
                v-model="reminders.message"
                class="text-sm h-full w-full border border-gray-400 rounded-b-lg px-2 py-1 resize-none"
              ></textarea>
              <div
                v-else
                class="text-sm h-full w-full border border-gray-400 rounded-b-lg px-2 py-1 resize-none"
              >
                {{ reminders.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
  <transition name="fade">
    <div v-show="showReminders">
      <SimpleModalDialog>
        <template #header>
          <div class="font-medium mb-3">Reminders:</div>
        </template>
        <template #body>
          <div class="w-[min(100vw_-_6rem,_24rem)] mb-6">
            {{ reminders.message }}
          </div>
        </template>
        <template #actions>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-1 border border-sky-600 hover:bg-sky-600 hover:text-white transition duration-200 font-medium rounded-full"
              @click="showReminders = false"
            >
              OK
            </button>
          </div>
        </template>
      </SimpleModalDialog>
    </div>
  </transition>
</template>
<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1s ease;
}
</style>
