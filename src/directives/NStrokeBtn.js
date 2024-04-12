const strokeBtn =  function (el, binding, vnode) {
    el.classList.add('n-button-stroke');
    if(vnode.props.theme == 'secondary') {
      el.classList.add('n-button-stroke-secondary');
    }
    else if(vnode.props.theme == 'destructive'){
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