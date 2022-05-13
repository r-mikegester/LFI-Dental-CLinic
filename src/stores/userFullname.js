import "../firebase";
import { getAuth } from "@firebase/auth";
import { defineStore } from "pinia";
const auth = getAuth();

export const useUserFullnameStore = defineStore({
  id: "userFullname",
  state: () => ({
    fullName: null,
    initialized: false,
  }),
  getters: {
    getFullname: (state) => state.fullName,
    isInitialized: (state) => state.initialized,
  },
  actions: {
    async initialize() {
      this.fullName = auth.currentUser.displayName;
      this.initialized = true;
    },
  },
});
