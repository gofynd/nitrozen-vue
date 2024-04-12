import { createApp } from 'vue'

// import App from './pages/custom-form-demo.vue'
import App from './pages/demo.vue'

import NitrozenVuePlugin from './setup';
import flatBtn from './directives/NFlatBtn';
import { clickOutside, strokeBtn } from './directives';

const app = createApp(App);
app.use(NitrozenVuePlugin);

app.directive('flat-btn',flatBtn);
app.directive('stroke-btn', strokeBtn);
app.directive('click-outside', clickOutside);

app.mount('#app')