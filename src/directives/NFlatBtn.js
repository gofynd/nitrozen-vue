const flatBtn = {
  beforeMount(el, binding, vnode) {
    el.classList.add('n-flat-button');
    if (vnode.props.theme === 'secondary') {
      el.classList.add('n-flat-button-secondary');
    } else if (vnode.props.theme === 'destructive') {
      el.classList.add('n-flat-button-destructive');
    } else {
      el.classList.add('n-flat-button-primary');
    }
  }
};

export default flatBtn;
