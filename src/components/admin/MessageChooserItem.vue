<script setup>
import { ref } from "vue";
import deleteMessage from "../../composables/api/deleteMessage";
import ConfirmDialog from "../dialogs/ConfirmDialog.vue";

const props = defineProps({
  message: Object,
});

const emit = defineEmits(["itemClicked", "itemDeleted"]);

const isDeleteDialogVisible = ref(false);

const onDelete = async () => {
  await deleteMessage(props.message.uid);
  emit("itemDeleted", props.message.uid);
};
</script>

<template>
  <div
    class="flex justify-between items-center px-3 py-2 hover:bg-gray-200 transition"
    :class="{ 'bg-gray-100': props.message.clicked }"
    @click="emit('itemClicked', message)"
  >
    <div>{{ message.senderName }}</div>
    <div>
      <button
        class="px-3 py-1 border text-sm border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-3xl"
        @click.stop="isDeleteDialogVisible = true"
      >
        Delete
      </button>
    </div>
  </div>
  <ConfirmDialog v-if="isDeleteDialogVisible">
    <template #header>Delete Message</template>
    <template #body> Are you sure you want to delete this message? </template>
    <template #actions>
      <button
        class="px-3 py-2 border border-teal-500 text-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-lg"
        @click="isDeleteDialogVisible = false"
      >
        Cancel
      </button>
      <button
        class="px-3 py-2 bg-red-500 hover:bg-red-400 transition duration-200 text-white rounded-lg"
        @click="onDelete()"
      >
        Delete
      </button>
    </template>
  </ConfirmDialog>
</template>
