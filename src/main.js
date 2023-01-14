import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueQueryPlugin } from "@tanstack/vue-query"

import App from "./App.vue"
import router from "./router"
import { authStateInitialized } from "./utils/firebase"
import "./assets/base.css"

// Make sure Firebase Auth is fully loaded
// before initializing the Vue app.
authStateInitialized
  .then(() => {
    const app = createApp(App)

    app.use(VueQueryPlugin)
    app.use(createPinia())
    app.use(router)

    app.mount("#app")
  })
  .catch(() => {
    // Error message in case we encounter errors
    // while initializing.
    document.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LFI Dental Clinic</title>

    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: sans-serif;
        color: #262626;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div {
        max-width: 24rem;
        text-align: center;
      }

      div .sad-icon {
        font-size: 6rem;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 1rem;
      }

      div .header {
        max-width: 20rem;
        margin: 0 auto;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    </style>
  </head>
  <body>
    <div>
      <p class="sad-icon">) :</p>
      <p class="header">An error occured while initializing Firebase 🔥</p>
      <p>
        Please contact the administrators of this website.
      </p>
    </div>
  </body>
</html>
    `)
  })
