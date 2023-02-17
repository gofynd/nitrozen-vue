import NitrozenCode from '.';
import NitrozenUuid from './../../utils/NUuid';

// Create a wrapper component here using NitrozenCodeComponent

export default {
  title: 'Components/Input/Code',
  component: NitrozenCode,
  argTypes: {
    fields: {
      control: 'select',
      options: [4, 6],
      description: 'Number of input fields',
      default: 4,
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    codeId: {
      control: 'text',
      description: 'Unique code id. Important to be sent',
    },
    type: {
      control: 'select',
      options: ['text', 'password'],
      description: 'Type of the text fields in the component',
    },
    validationState: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      default: 'default',
      description: 'validationState for the input fields',
    },
    hideValidation: {
      control: 'boolean',
    },
    getCode: {
      control: 'function',
    },
    toolTipIcon: {
      control: 'text',
      default: '',
    },
    tooltip: {
      control: 'text',
      default: '',
    },
    id: {
      control: 'text',
      default: 'nitrozen-input' + NitrozenUuid(),
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NitrozenCode },
  props: Object.keys(argTypes),
  template:
    '<div class="n-code-wrapper"><div><nitrozen-code v-bind="$props"></nitrozen-code></div></div>',
});

export const Code = Template.bind({});
Code.args = {
  fields: 4,
  codeId: 'custom-otp',
  type: 'text',
  helperText: 'This is a supoort text',
  required: true,
  getCode: () => {},
  label: 'Enter your OTP',
  hideValidation: true,
  id: '',
};
