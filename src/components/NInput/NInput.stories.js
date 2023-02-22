import NitrozenInput from '.';
import icons from '../../assets/icons.json';
export default {
  title: 'Components/Input/InputFields',
  component: NitrozenInput,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'textarea'],
    },
    validationState: {
      control: 'select',
      options: ['success', 'error', 'warning', 'default'],
    },
    validationMessage: {
      control: 'text',
      default: '',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NitrozenInput },
  props: Object.keys(argTypes),
  template: '<nitrozen-input v-bind="$props"></nitrozen-input>',
});

export const Input = Template.bind({});
Input.args = {
  helperText:
    'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
  label: 'Enter your name',
  disabled: false,
  autocomplete: 'off',
  type: 'text',
  placeholder: 'Your full name please',
  required: true,
  showSearchIcon: false,
  validationState: '',
  validationMessage: '',
  showPrefix: true,
  showSuffix: true,
};
