import Vue from 'vue';
import NitrozenCode from '.';

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
      control: 'string',
      description: 'Label for the input field',
    },
    codeId: {
      control: 'string',
      description: 'Unique code id. Important to be sent',
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
};
