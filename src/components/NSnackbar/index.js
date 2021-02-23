// import NSnackbar from './NSnackbar';
// export default NSnackbar;

/**
 * Clone from https://github.com/shakee93/vue-toasted
 */

import { Snackbar as T } from "./js/snackbar";
import NitrozenSnackbar from "./NSnackbar.vue";

const NSnackbar = {
  install(app, options) {
    if (!options) {
      options = {};
    }

    const Snack = new T(options);
    app.component("nitrozen-snackbar", NitrozenSnackbar);
    app.config.globalProperties.Snackbar = app.config.globalProperties.snackbar = app.config.globalProperties.$snackbar = Snack;
  }
};

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Snackbar = window.snackbar = NSnackbar;
}

export default NSnackbar;
