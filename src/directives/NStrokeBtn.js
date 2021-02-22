const strokeBtn = (app) => {
  app.directive('stroke-btn', {
    beforeMount: function(el, binding, vnode) {
      el.classList.add('n-button-stroke');
      if (vnode.props.theme == 'secondary') {
        el.classList.add('n-button-stroke-secondary');
      } else {
        el.classList.add('n-button-stroke-primary');
      }
    },
  });
};

// bind
// inserted
// update
// componentUpdated
// unbind

export default strokeBtn;
