import { createApp } from "vue";
import { createPinia } from "pinia";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import App from "./App.vue";
import router from "./router";
import "./firebase";
import "./assets/base.css";

let app;
const auth = getAuth();

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);

    app.mount("#app");
  }
});
