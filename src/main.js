import Vue from 'vue'

// import App from './pages/custom-form-demo.vue'
import App from './pages/demo.vue'

import NitrozenVuePlugin from './setup';

Vue.use(NitrozenVuePlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
