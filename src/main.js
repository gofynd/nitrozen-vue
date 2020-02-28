import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/demo.vue'
import NitrozenVuePlugin from './setup';
Vue.use(NitrozenVuePlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
