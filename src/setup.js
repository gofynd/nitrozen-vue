import * as NitrozenComponents from './components';
import NitrozenSnackbar from './components/NSnackbar';

let NitrozenVuePlugin = {
  install: (Vue) => {
    Object.values(NitrozenComponents).forEach((NComponent) => {
      Vue.component(NComponent.name, NComponent)
    });

    // Snackbar
    Vue.use(NitrozenSnackbar);
    Vue.snackbar.register(
      'show',
      message => message,
      {
        position: 'top-center',
        duration: 2000
      }
    );
    Vue.snackbar.register(
      'showSuccess',
      message => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'success'
      }
    );
    Vue.snackbar.register(
      'showError',
      message => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'error'
      }
    );
    Vue.snackbar.register(
      'showWarning',
      message => message,
      {
        position: 'top-center',
        duration: 2000,
        type: 'warning'
      }
    );
  }
}

export default NitrozenVuePlugin;
