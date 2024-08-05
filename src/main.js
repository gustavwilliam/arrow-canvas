import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.directive("tooltip", Tooltip);

app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");
