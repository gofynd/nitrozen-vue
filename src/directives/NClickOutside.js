const clickOutside = {
    beforeMount(el, binding, vnode) {
        if (typeof binding.value !== 'function') {
            const compName = vnode.component?.name;
            let warn = `[Nitrozen-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
            if (compName) {
                warn += ` Found in component '${compName}'`;
            }
            console.warn(warn);
        }

        const bubble = binding.modifiers?.bubble;
        const handler = (e) => {
            let path = e.composedPath ? e.composedPath() : (e.path || []);
            if (bubble || path && !path.includes(el)) {
                binding.value(e);
            }
        };
        el.__nitrozenClickOutside__ = handler;
        document.addEventListener('click', handler);
    },

    unmounted(el) {
        document.removeEventListener('click', el.__nitrozenClickOutside__);
        el.__nitrozenClickOutside__ = null;
    }
};