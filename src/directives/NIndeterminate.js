import Vue from 'vue';

const indeterminate = Vue.directive('indeterminate', {
  bind: (el, binding) => {
    if (el.type && el.type === 'checkbox') {
      el.indeterminate = binding.value;
      console.log('binding value', binding.value);
    }
  },
  update: (el, binding) => {
    if (el.type && el.type === 'checkbox') {
      el.indeterminate = binding.value;
      console.log('binding value', binding.value);
    }
  },
});
Vue.use(indeterminate);

// bind
// inserted
// update
// componentUpdated
// unbind

export default indeterminate;
