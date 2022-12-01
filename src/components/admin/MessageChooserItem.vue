<script setup>
const props = defineProps({
  message: Object,
})

const emit = defineEmits(["itemClicked", "itemArchived"])

const onArchive = () => {
  emit("itemArchived", props.message.uid)
}
</script>

<template>
  <div class="flex justify-between items-center px-3 py-2 hover:bg-gray-200 transition"
    :class="{ 'bg-gray-100': props.message.clicked }" @click="emit('itemClicked', message.uid)">
    <div>{{ message.senderName }}</div>
    <div class=" lg:visible">
      <span class="">{{ new Date(message.createdAtUnixSecs * 1000).getHours() }}</span>
      <span class="">:</span>
      <span class="">{{ new Date(message.createdAtUnixSecs * 1000).getMinutes() }}</span>
      <span class=" mr-3"></span>
      <span class="">{{ new Date(message.createdAtUnixSecs * 1000).getMonth() }}</span>
      <span class="">/</span>
      <span class="">{{ new Date(message.createdAtUnixSecs * 1000).getDay() }}</span>
      <span class="">/</span>
      <span class="">{{ new Date(message.createdAtUnixSecs * 1000).getFullYear() }}</span>
      <span class=" mr-3"></span>
      <button v-if="message.isArchived"
        class="px-3 py-1 border text-sm border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-3xl"
        @click.stop="onArchive">
        Unarchive
      </button>
      <button v-else
        class="px-3 py-1 border text-sm border-teal-500 hover:bg-teal-400 hover:text-white transition duration-200 rounded-3xl"
        @click.stop="onArchive">
        Archive
      </button>
    </div>
  </div>
</template>
