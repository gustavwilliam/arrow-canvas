import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import Aura from "@primevue/themes/aura";
import VueShortkey from "vue3-shortkey";

const pinia = createPinia();
const app = createApp(App);

app.directive("tooltip", Tooltip);

app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(VueShortkey);

app.mount("#app");
