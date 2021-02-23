import { createApp } from "vue";
// import App from './pages/custom-form-demo.vue';
import App from "./pages/demo.vue";
import NitrozenDirectives from "./directives";

import NitrozenVuePlugin from "./setup";

createApp(App)
  .use(NitrozenVuePlugin)
  .use(NitrozenDirectives)
  .mount("#app");
