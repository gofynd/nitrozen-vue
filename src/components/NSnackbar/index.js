import { Snackbar as T } from './js/snackbar';
import NitrozenSnackbar from './NSnackbar.vue';

const NSnackbar = {
    install(app, options) {
        if (!options) {
            options = {};
        }

        const Snack = new T(options);
        app.component('nitrozen-snackbar', NitrozenSnackbar);
        app.config.globalProperties.$snackbar = Snack;
    }
};

// Register the plugin if used via CDN or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Snackbar = NSnackbar;
}

export default NSnackbar;
