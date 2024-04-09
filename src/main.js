import { createApp } from 'vue'

// import App from './pages/custom-form-demo.vue'
import App from './pages/demo.vue'

import NitrozenVuePlugin from './setup';
import flatBtn from './directives/NFlatBtn.vue';

const app = createApp(App);
app.use(NitrozenVuePlugin);
app.directive('flat-btn', flatBtn);

app.mount('#app')