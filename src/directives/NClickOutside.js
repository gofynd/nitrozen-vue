const clickOutside = app => {
  app.directive("click-outside", {
    beforeMount: function(el, binding, vNode) {
      // Provided expression must evaluate to a function.
      if (typeof binding.value !== "function") {
        const compName = vNode.context.name;
        let warn = `[Nitrozen-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
        if (compName) {
          warn += ` Found in component '${compName}'`;
        }

        console.warn(warn);
      }
      // Define Handler and cache it on the element
      const bubble = binding.modifiers.bubble;
      const handler = e => {
        if (bubble || -1 == e.path.indexOf(el)) {
          binding.value(e);
        }
      };
      el.__nitrozenClickOutside__ = handler;

      // add Event Listeners
      document.addEventListener("click", handler);
    },

    unmounted: function(el, binding) {
      // Remove Event Listeners
      document.removeEventListener("click", el.__nitrozenClickOutside__);
      el.__nitrozenClickOutside__ = null;
    }
  });
};

export default clickOutside;
