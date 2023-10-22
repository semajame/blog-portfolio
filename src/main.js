import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import router from "./router";
import reset from "./styles/reset.css";
import style from "./styles/style.css";

createApp(App).use(router).mount("#app");
