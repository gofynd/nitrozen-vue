import NCheckbox from './NCheckbox';
import NIcon from '../NIcon';
import NUuid from './../../utils/NUuid';

export default {
  title: 'Components/Input/Checkbox',
  component: NCheckbox,
  argTypes: {
    id: {
      control: { type: 'text' },
      default: null,
    },
    disabled: {
      control: { type: 'boolean' },
      default: false,
    },
    state: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      default: null,
    },
    stateMessage: {
      control: { type: 'text' },
      default: null,
    },
    name: {
      control: { type: 'text' },
      default: null,
    },
    checkboxValue: {
      control: { type: 'boolean' },
      default: false,
    },
    value: {
      control: { type: 'boolean' },
      default: null,
    },
    showIcon: {
      control: { type: 'boolean' },
      default: false,
    },
    isIndeterminate: {
      control: { type: 'boolean' },
      default: false,
    },
    inputStyle: {
      control: { type: 'object' },
      default: {},
    },
    labelStyle: {
      control: { type: 'object' },
      default: {},
    },
  },
};

const change = (e) => {
  console.log('change(event){ }');
};
const input = (value) => {
  console.log('input(value){  }', value);
};
const Template = (args, { argTypes }) => ({
  components: { NCheckbox, NIcon },
  props: Object.keys(argTypes),
  template: `
  <div style="display:flex; justify-content:center;">
    <n-checkbox v-bind="$props" @change="change" @input="input">
      <template v-slot:icon>    
        <NIcon name="twitter" color="#2e2e2e"/>
      </template>
        {{text}}
    </n-checkbox>
  </div>`,
  data: function () {
    return {
      value: true,
      checkboxValue: true,
    };
  },
  methods: {
    change: change,
    input: input,
  },
});

export const CheckBox = Template.bind({});
CheckBox.args = {
  id: `n-checkbox-${NUuid()}`,
  text: 'Twitter',
  state: 'default',
  stateMessage: "You've checked twitter",
  checkboxValue: true,
  value: true,
  showIcon: false,
  isIndeterminate: false,
  disabled: false,
  inputStyle:{},
  labelStyle:{}
};
