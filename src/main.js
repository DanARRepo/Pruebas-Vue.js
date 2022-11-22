import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { VueSpinners } from "@saeris/vue-spinners";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import { Chart } from "chart.js";

createApp(App)
  .use(router)
  .use(VueChartkick.use(Chart))
  .use(VueSpinners)
  .mount("#app");
