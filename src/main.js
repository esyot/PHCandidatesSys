import { createApp } from "vue";
import App from "./App.vue";
import "font-awesome/css/font-awesome.css";
import "vue-toastification/dist/index.css";

import Toast, { POSITION } from "vue-toastification";

import "./firebase";
import router from "./router";

createApp(App)
  .use(router)
  .use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
  })
  .mount("#app");
