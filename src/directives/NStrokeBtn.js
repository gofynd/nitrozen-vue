const strokeBtn =  function (el, binding, vnode) {
    el.classList.add('n-button-stroke');
    if(vnode.componentOptions.propsData.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    }
    else if(vnode.componentOptions.propsData.theme == 'destructive'){
      el.classList.add('n-button-stroke-destructive');
    }
    else {
      el.classList.add('n-button-stroke-primary');
    }
  }

// bind
// inserted
// update
// componentUpdated
// unbind

export default strokeBtn;