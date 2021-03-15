const flatBtn = app => {
  app.directive("flat-btn", {
    beforeMount: function(el, binding, vnode) {
      el.classList.add("n-flat-button");
      if (vnode.props.theme == "primary") {
        el.classList.add("n-flat-button-primary");
      } else {
        el.classList.add("n-flat-button-secondary");
      }
    }
  });
};

// bind
// inserted
// update
// componentUpdated
// unbind

export default flatBtn;
