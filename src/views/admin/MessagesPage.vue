<script setup>
import { onMounted, ref } from "vue";
import BaseLayout from "../../components/admin/BaseLayout.vue";
import MessageChooserItem from "../../components/admin/MessageChooserItem.vue";
import getAllMessages from "../../composables/api/getAllMessages";

const messageItems = ref([]);
const selectedItemBody = ref("");

onMounted(async () => {
  const messages = await getAllMessages();
  messages.forEach((message) => {
    messageItems.value.push({
      uid: message.uid,
      senderName: message.senderName,
      body: message.body,
      clicked: false,
    });
  });
});

const onItemClicked = (uid) => {
  messageItems.value = messageItems.value.map((message) => {
    if (message.uid === uid) {
      selectedItemBody.value = message.body;
      return {
        uid: message.uid,
        senderName: message.senderName,
        body: message.body,
        clicked: true,
      };
    } else
      return {
        uid: message.uid,
        senderName: message.senderName,
        body: message.body,
        clicked: false,
      };
  });
};
</script>

<template>
  <BaseLayout>
    <div class="px-6">
      <h1 class="font-semibold text-2xl pb-3">Messages</h1>
      <div class="grid grid-cols-2 border-b border-t border-teal-500">
        <!-- Messages column -->
        <div class="py-1 pr-1 border-r border-teal-500">
          <MessageChooserItem
            v-for="message in messageItems"
            :key="message.uid"
            :message="message"
            @itemClicked="onItemClicked"
          />
        </div>
        <!-- Message content column -->
        <div class="px-3 py-1">{{ selectedItemBody }}</div>
      </div>
    </div>
  </BaseLayout>
</template>
