<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import BaseLayout from "../../components/admin/BaseLayout.vue";
import MessageChooserItem from "../../components/admin/MessageChooserItem.vue";
import getAllMessages from "../../composables/api/getAllMessages";

const messageItems = ref([]);
const selectedItem = reactive({
  subject: "",
  body: "",
});

const pageIsLoading = ref(true);

onMounted(async () => {
  const messages = await getAllMessages();
  messages.forEach((message) => {
    messageItems.value.push({
      uid: message.uid,
      senderName: message.senderName,
      subject: message.subject,
      body: message.body,
      createdAtUnixSecs: message.createdAt._seconds,
      clicked: false,
    });
  });
  messageItems.value.sort((a, b) => {
    if (a.createdAtUnixSecs < b.createdAtUnixSecs) return 1;
    if (a.createdAtUnixSecs > b.createdAtUnixSecs) return -1;
    return 0;
  });
  await nextTick();
  pageIsLoading.value = false;
});

const onItemClicked = (uid) => {
  messageItems.value = messageItems.value.map((message) => {
    if (message.uid === uid) {
      selectedItem.subject = message.subject;
      selectedItem.body = message.body;
      return {
        uid: message.uid,
        senderName: message.senderName,
        subject: message.subject,
        body: message.body,
        createdAtUnixSecs: message.createdAtUnixSecs,
        clicked: true,
      };
    } else
      return {
        uid: message.uid,
        senderName: message.senderName,
        subject: message.subject,
        body: message.body,
        createdAtUnixSecs: message.createdAtUnixSecs,
        clicked: false,
      };
  });
};

const onItemDeleted = (uid) => {
  messageItems.value = messageItems.value.filter((message) => {
    if (message.uid === uid) return false;
    else return true;
  });
  selectedItem.subject = "";
  selectedItem.body = "";
};
</script>

<template>
  <BaseLayout>
    <div class="px-6">
      <h1 class="font-semibold text-2xl pb-3">Messages</h1>
      <div v-if="pageIsLoading">
        <!-- Loading message -->
        <div>Loading messages ...</div>
      </div>
      <div v-else>
        <div v-if="messageItems.length > 0">
          <!-- List of Messages -->
          <div class="grid grid-cols-2 border-b border-t border-teal-500">
            <!-- Messages column -->
            <div class="py-1 pr-1 border-r border-teal-500">
              <MessageChooserItem
                v-for="message in messageItems"
                :key="message.uid"
                :message="message"
                @itemClicked="onItemClicked"
                @itemDeleted="onItemDeleted"
              />
            </div>
            <!-- Message content column -->
            <div class="px-3 pt-1 pb-3">
              <div
                v-if="selectedItem.subject !== '' && selectedItem.body !== ''"
              >
                <div class="font-bold">Subject</div>
                <div class="pl-4 mb-3">{{ selectedItem.subject }}</div>
                <div class="font-bold">Message</div>
                <div class="pl-4">{{ selectedItem.body }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- No messages -->
          <div>No messages at this time</div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
