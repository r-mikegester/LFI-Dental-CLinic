<script setup>
import BoxDialog from "../../components/dialogs/BoxDialog.vue";
import { onMounted, reactive, ref } from "vue";
import updateEmail from "../../composables/account/updateEmail";
import { getAuth } from "firebase/auth";
import updateFullName from "../../composables/account/updateFullName";
import updatePassword from "../../composables/account/updatePassword";
import uploadProfilePicture from "../../composables/account/uploadProfilePicture";
import updateProfilePicture from "../../composables/account/updateProfilePicture";
import deleteProfilePicture from "../../composables/account/deleteProfilePicture";
import getDownloadURL from "../../composables/account/getDownloadURL";
import { useProfilePictureStore } from "../../stores/profilePicture";
import { useUserFullnameStore } from "../../stores/userFullname";

const userInfo = reactive({
  fullName: "",
  email: "",
  profilePictureURL: "",
  profilePictureDownloadURL: "",
});

const auth = getAuth();
onMounted(async () => {
  userInfo.fullName = auth.currentUser.displayName;
  userInfo.email = auth.currentUser.email;
  userInfo.profilePictureURL = auth.currentUser.photoURL;
  if (userInfo.profilePictureURL)
    userInfo.profilePictureDownloadURL = await getDownloadURL(
      userInfo.profilePictureURL
    );
});

const userCredentials = reactive({
  newEmail: "",
  newPassword: "",
  password: "",
  fullName: "",
});

const clearUserCredentials = () => {
  Object.keys(userCredentials).forEach((property) => {
    userCredentials[property] = "";
  });
};

const isEmailDialogVisible = ref(false);
const onChangeEmail = async () => {
  try {
    await updateEmail(userCredentials.password, userCredentials.newEmail);
    userInfo.email = userCredentials.newEmail;
    isEmailDialogVisible.value = false;
  } catch (e) {
    switch (e.code) {
      case "auth/invalid-email":
        isErrorDialogVisible.value = true;
        errorDialog.header = "Invalid email";
        errorDialog.body = "Please enter a valid email address.";
        break;
      case "auth/wrong-password":
        isErrorDialogVisible.value = true;
        errorDialog.header = "Wrong password";
        errorDialog.body = "Please enter the correct password.";
        break;
      default:
        throw e;
    }
  } finally {
    clearUserCredentials();
  }
};

const userFullnameStore = useUserFullnameStore();

const isNameDialogVisible = ref(false);
const onChangeName = async () => {
  await updateFullName(userCredentials.fullName);
  userInfo.fullName = userCredentials.fullName;
  userFullnameStore.$reset;
  await userFullnameStore.initialize();
  isNameDialogVisible.value = false;
  clearUserCredentials();
};

const isPasswordlDialogVisible = ref(false);
const onChangePassword = async () => {
  try {
    await updatePassword(userCredentials.newPassword, userCredentials.password);
    isPasswordlDialogVisible.value = false;
  } catch (e) {
    switch (e.code) {
      case "auth/wrong-password":
        isErrorDialogVisible.value = true;
        errorDialog.header = "Wrong password";
        errorDialog.body = "Please enter the correct password.";
        break;
      default:
        throw e;
    }
  } finally {
    clearUserCredentials();
  }
};

const isProfilePicturelDialogVisible = ref(false);
const inputFile = ref();
const onChangeProfilePicture = async () => {
  if (inputFile.value.files.length === 1) {
    const imagePath = await uploadProfilePicture(inputFile.value.files[0]);
    await updateProfilePicture(imagePath);
    profilePictureStore.$reset;
    await profilePictureStore.initialize();
    userInfo.profilePictureURL = imagePath;
    userInfo.profilePictureDownloadURL = await getDownloadURL(imagePath);
  }
};

const profilePictureStore = useProfilePictureStore();
const onRemoveProfilePicture = async () => {
  if (userInfo.profilePictureURL) {
    await deleteProfilePicture();
    await updateProfilePicture("");

    profilePictureStore.$reset;
    await profilePictureStore.initialize();

    userInfo.profilePictureURL = "";
    userInfo.profilePictureDownloadURL = "";
  }
};

const isErrorDialogVisible = ref(false);
const errorDialog = reactive({
  header: "",
  body: "",
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 pt-12 pb-24">
    <h1 class="text-3xl mb-3 font-semibold">Account Settings</h1>
    <div class="border-y-[3px] border-teal-500">
      <!-- Profile Picture -->
      <div class="border-b border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]">
        <div class="font-semibold">Profile Picture</div>
        <div></div>
        <div class="text-right text-teal-500 hover:text-teal-400">
          <button type="button" @click="isProfilePicturelDialogVisible = true">
            Edit
          </button>
        </div>
      </div>
      <!-- Name -->
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
      >
        <div class="font-semibold">Name</div>
        <div>{{ userInfo.fullName }}</div>
        <div class="text-right text-teal-500 hover:text-teal-400">
          <button type="button" @click="isNameDialogVisible = true">
            Edit
          </button>
        </div>
      </div>
      <!-- Email -->
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[2fr_4fr_3fr]"
      >
        <div class="font-semibold">Email</div>
        <div>{{ userInfo.email }}</div>
        <div class="text-right text-teal-500 hover:text-teal-400">
          <button type="button" @click="isEmailDialogVisible = true">
            Edit
          </button>
        </div>
      </div>
      <!-- Password -->
      <div class="p-4 grid grid-cols-2">
        <div class="font-semibold">Password</div>
        <div
          class="text-right text-teal-500 hover:text-teal-400"
          @click="isPasswordlDialogVisible = true"
        >
          <button>Edit</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Email dialog -->
  <BoxDialog v-if="isEmailDialogVisible">
    <template #body>
      <div class="mb-3">
        <div>New Email:</div>
        <input
          type="text"
          class="border border-sky-600 px-2 py-1"
          v-model="userCredentials.newEmail"
        />
      </div>
      <div class="mb-5">
        <div>Password:</div>
        <input
          type="password"
          class="border border-sky-600 px-2 py-1"
          v-model="userCredentials.password"
        />
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between">
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isEmailDialogVisible = false"
        >
          Cancel
        </button>
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="onChangeEmail()"
        >
          Save
        </button>
      </div>
    </template>
  </BoxDialog>

  <!-- Name dialog -->
  <BoxDialog v-if="isNameDialogVisible">
    <template #body>
      <div class="mb-5">
        <div>Name:</div>
        <input
          type="text"
          class="border border-sky-600 px-2 py-1"
          v-model="userCredentials.fullName"
        />
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between">
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isNameDialogVisible = false"
        >
          Cancel
        </button>
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="onChangeName()"
        >
          Save
        </button>
      </div>
    </template>
  </BoxDialog>

  <!-- Password dialog -->
  <BoxDialog v-if="isPasswordlDialogVisible">
    <template #body>
      <div class="mb-3">
        <div>Old Password:</div>
        <input
          type="password"
          class="border border-sky-600 px-2 py-1"
          v-model="userCredentials.password"
        />
      </div>
      <div class="mb-5">
        <div>New Password:</div>
        <input
          type="password"
          class="border border-sky-600 px-2 py-1"
          v-model="userCredentials.newPassword"
        />
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between">
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isPasswordlDialogVisible = false"
        >
          Cancel
        </button>
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="onChangePassword()"
        >
          Update
        </button>
      </div>
    </template>
  </BoxDialog>

  <!-- Profile Picture dialog -->
  <BoxDialog v-if="isProfilePicturelDialogVisible">
    <template #body>
      <div class="mb-5 text-center">
        <div class="mb-3" v-if="userInfo.profilePictureURL">
          <img
            :src="userInfo.profilePictureDownloadURL"
            alt="Profile picture"
            class="h-36 w-36 rounded-full object-cover mx-auto"
          />
        </div>
        <div v-else>
          <img
            src="../../assets/img/nav-person.png"
            alt="Person icon"
            class="h-36 w-36 object-cover mx-auto"
          />
        </div>
        <div class="mb-3">Change Profile Picture</div>
        <div>
          <input
            type="file"
            accept="image/*"
            class="text-sm w-48"
            ref="inputFile"
          />
        </div>
      </div>
    </template>
    <template #actions>
      <div class="flex justify-between gap-4">
        <button
          type="button"
          class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isProfilePicturelDialogVisible = false"
        >
          Close
        </button>
        <div class="flex gap-4">
          <button
            type="button"
            class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
            @click="onRemoveProfilePicture()"
            v-if="userInfo.profilePictureURL"
          >
            Remove
          </button>
          <button
            type="button"
            class="font-semibold border border-sky-600 px-2 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
            @click="onChangeProfilePicture()"
          >
            Update
          </button>
        </div>
      </div>
    </template>
  </BoxDialog>

  <BoxDialog v-if="isErrorDialogVisible">
    <template #header>
      <div class="text-2xl font-semibold">
        {{ errorDialog.header }}
      </div>
    </template>
    <template #body>
      <div class="mb-3">
        {{ errorDialog.body }}
      </div>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <button
          type="button"
          class="font-semibold border border-sky-600 px-4 py-1 text-sm hover:bg-sky-600 hover:text-white transition duration-200"
          @click="isErrorDialogVisible = false"
        >
          OK
        </button>
      </div>
    </template>
  </BoxDialog>
</template>
