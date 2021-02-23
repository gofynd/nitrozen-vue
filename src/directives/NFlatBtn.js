const flatBtn = app => {
  app.directive("flat-btn", {
    beforeMount: function(el, binding, vnode) {
      el.classList.add("n-flat-button");
      if (vnode.props.theme == "secondary") {
        el.classList.add("n-flat-button-secondary");
      } else {
        el.classList.add("n-flat-button-primary");
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
