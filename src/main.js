import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./registerServiceWorker";
import "./registerServiceWorker";

const vuetify = createVuetify({
  components,
  directives,
});
loadFonts();
createApp(App).use(router).use(store).use(vuetify).mount("#app");
