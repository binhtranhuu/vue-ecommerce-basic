// i18n
import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

import App from "./App.vue";
import router from "@/router";

// windicss
import "virtual:windi.css";
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import "virtual:windi-devtools";

const i18n = createI18n({
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
