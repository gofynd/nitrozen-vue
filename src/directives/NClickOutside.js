const clickOutside = {
  beforeMount(el, binding) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = binding.instance && binding.instance.proxy?._uid
      let warn = `[Nitrozen-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) {
        warn += ` Found in component '${compName}'`
      }
      console.warn(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      let path = e.composedPath ? e.composedPath() : e.path;
      if (bubble || path && -1 == path.indexOf(el)) {
        binding.value(e)
      }
    }
    el.__nitrozenClickOutside__ = handler
    // add Event Listeners
    document.addEventListener('click', handler)
  },
  unmounted(el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__nitrozenClickOutside__)
    el.__nitrozenClickOutside__ = null
  }
};

export default clickOutside;