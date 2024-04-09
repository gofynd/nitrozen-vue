// import Vue from 'vue';

// const flatBtn = Vue.directive('flat-btn', {
//   bind: function (el, binding, vnode) {
//     el.classList.add('n-flat-button');
//     if(vnode.componentOptions.propsData.theme == 'secondary'){
//       el.classList.add('n-flat-button-secondary');
//     }
//     else if(vnode.componentOptions.propsData.theme == 'destructive'){
//       el.classList.add('n-flat-button-destructive');
//     }
//     else{
//       el.classList.add('n-flat-button-primary');
//     }
//   }
// })
// Vue.use(flatBtn);

// // bind
// // inserted
// // update
// // componentUpdated
// // unbind

// export default flatBtn;

const flatBtn = {
  beforeMount(el, binding, vnode) {
    el.classList.add('n-flat-button');
    if (vnode.props.theme == 'secondary') {
      el.classList.add('n-flat-button-secondary');
    }
    else if (vnode.propsData.theme == 'destructive') {
      el.classList.add('n-flat-button-destructive');
    }
    else {
      el.classList.add('n-flat-button-primary');
    }
  }
}

export default flatBtn;