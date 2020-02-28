import Vue from 'vue';

const strokeBtn = Vue.directive('stroke-btn', {
  bind: function (el, binding, vnode) {
    el.classList.add('n-button-stroke');
    if(vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    }
    else {
      el.classList.add('n-button-stroke-primary');
    }

  }
})
Vue.use(strokeBtn);

// bind
// inserted
// update
// componentUpdated
// unbind

export default strokeBtn;