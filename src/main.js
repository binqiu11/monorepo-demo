import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";

import { createAppRouter } from "./router";
import "../tailwind.css";

const app = createApp(App);
const pinia = createPinia();
const router = createAppRouter();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.mount("#app");
