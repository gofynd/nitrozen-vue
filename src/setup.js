import * as NitrozenComponents from './components';
import NitrozenSnackbar from './components/NSnackbar';

const NitrozenVuePlugin = {
  install: (app) => {
    // Register components
    Object.values(NitrozenComponents).forEach((NComponent) => {
      app.component(NComponent.name, NComponent);
    });

    // Register Snackbar
    app.use(NitrozenSnackbar);
    app.config.globalProperties.$snackbar.register(
      'show',
      (message) => message,
      {
        position: 'top-center',
        duration: 2000
      }
    );
    app.config.globalProperties.$snackbar.register(
      'showSuccess',
      (message) => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'success'
      }
    );
    app.config.globalProperties.$snackbar.register(
      'showError',
      (message) => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'error'
      }
    );
    app.config.globalProperties.$snackbar.register(
      'showWarning',
      (message) => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'warning'
      }
    );
  }
};

export default NitrozenVuePlugin;
