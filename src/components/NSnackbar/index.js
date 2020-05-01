// import NSnackbar from './NSnackbar';
// export default NSnackbar;

/**
 * Clone from https://github.com/shakee93/vue-toasted
 */

import { Snackbar as T } from './js/snackbar';
import NitrozenSnackbar from './NSnackbar.vue';

const NSnackbar = {
    install(Vue, options) {
        if (!options) {
            options = {};
        }

        const Snack = new T(options);
        Vue.component('nitrozen-snackbar', NitrozenSnackbar);
        Vue.Snackbar = Vue.snackbar = Vue.prototype.$snackbar = Snack;
    }
};

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Snackbar = window.snackbar = NSnackbar;
}

export default NSnackbar