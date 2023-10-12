import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import reset from "./styles/reset.css";
import style from "./styles/style.css";

createApp(App).use(router).mount("#app");
