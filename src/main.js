import { createApp } from 'vue'

// import App from './pages/custom-form-demo.vue'
import App from './pages/demo.vue'

import NitrozenVuePlugin from './setup';
import flatBtn from './directives/NFlatBtn';

const app = createApp(App);
app.use(NitrozenVuePlugin);

app.use('flat-btn',flatBtn);
app.use(flatBtn);

app.mount('#app')