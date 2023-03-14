import NRadio from './NRadio';
import NIcon from '../NIcon';
import NUuid from './../../utils/NUuid';

export default {
  title: 'Components/Input/Radio',
  component: NRadio,
  argTypes: {
    id: {
      control: { type: 'text' },
      default: null,
      description: "Radio button ID"
    },
    text: {
      control: { type: 'text' },
      default: null,
      description: "label text passed as default slot"
    },
    disabled: {
      control: { type: 'boolean' },
      default: false,
      description: "Disable check"
    },
    showIcon: {
      control: { type: 'boolean' },
      default: true,
      description: "Show icon if passed via v-slot: icon"
    },
    state: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      default: "success",
      description: "Validation state"
    },
    stateMessage: {
      control: { type: 'text' },
      default: null,
      description: "Validation message"
    },
    radioValue: {
      control: { type: 'text' },
      default: null,
      description: "Radio button value"
    },
    value: {
      control: { type: 'text' },
      default: null,
      description:"selected radio value in parent"
    },
    name: {
      control: { type: 'text' },
      default: null,
      description: "Radio button Name"
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

const input = (e) => {
  console.log('input(radioValue){ }');
};
const change = (e) => {
  console.log('change(radioValue){ }');
};
const Template = (args, { argTypes }) => ({
  components: { NRadio, NIcon },
  props: Object.keys(argTypes),
  template: `
  <div style="display:flex; justify-content:center;">
    <n-radio v-bind="$props" @change="change" @input="input">
      <template v-slot:icon>    
        <NIcon name="twitter" color="#2e2e2e"/>
      </template>
        {{text}}
    </n-radio>
  </div>`,
  data: function () {
    return {
    };
  },
  methods: {
    change: change,
    input: input,
  },
});

export const Radio = Template.bind({});
Radio.args = {
  id: `n-radio-${NUuid()}`,
  name: `n-radio-name`,
  text: 'Twitter',
  value: "twitter",
  radioValue: "_twitter",
  state: 'success',
  stateMessage: "You've selected twitter",
  disabled: false,
  showIcon: true,
  inputStyle: {},
  labelStyle: {},
};
