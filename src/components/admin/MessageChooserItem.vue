<script setup>
import deleteMessage from "../../composables/api/deleteMessage";

const props = defineProps({
  message: Object,
});

const emit = defineEmits(["itemClicked", "itemDeleted"]);

const onDelete = async () => {
  await deleteMessage(props.message.uid);
  emit("itemDeleted", props.message.uid);
};
</script>

<template>
  <div
    class="flex justify-between items-center px-3 py-2 hover:bg-gray-200 transition"
    :class="{ 'bg-gray-100': props.message.clicked }"
    @click="emit('itemClicked', message.uid)"
  >
    <div>{{ message.senderName }}</div>
    <div>
      <button
        class="px-3 py-1 border text-sm border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-3xl"
        @click.stop="onDelete()"
      >
        Delete
      </button>
    </div>
  </div>
</template>
