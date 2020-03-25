import Vue from 'vue';

const clickOutside = Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // Check that click was outside the element
            if (!(el === event.target || el.contains(event.target))) {
                // call  function expression assigned
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});

Vue.use(clickOutside);

export default clickOutside;