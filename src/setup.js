import * as NitrozenComponents from './components';
import NitrozenSnackbar from './components/NSnackbar';

let NitrozenVuePlugin = {
  install: (Vue) => {
    Object.values(NitrozenComponents).forEach((NComponent) => {
      Vue.component(NComponent.name, NComponent)
    });

    Vue.use(NitrozenSnackbar);
    Vue.snackbar.register(
      'show',
      message => {
        return message;
      },
      {
        theme: 'nitrozen-snackbar-primary',
        position: 'top-center',
        duration: 2000
      }
    );
  }
}

export default NitrozenVuePlugin;
