import NToggleBtn from './index';
import NIcon from '../NIcon';
import NUuid from '../../utils/NUuid';

export default {
  title: 'Components/Button/Toggle',
  component: NToggleBtn,
  argTypes: {
    id: {
      control: { type: 'text' },
      default: null,
      description: "Toggle button ID"
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
    state: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      default: null,
      description: "Validation state"
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      default: "small",
      description: "Toggle element size"
    },
    stateMessage: {
      control: { type: 'text' },
      default: null,
      description: "Validation message"
    },
    name: {
      control: { type: 'text' },
      default: "n-toggle-button",
      description: "Component Name"
    },
    value: {
      control: { type: 'boolean' },
      default: false,
      description:"selected toggle value in parent component"
    },
    showIcon: {
      control: { type: 'boolean' },
      default: false,
      description: "Show icon if passed via v-slot: icon"
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
  console.log('change(event){ }', e);
};
const input = (value) => {
  console.log('input(value){  }', value);
};
const Template = (args, { argTypes }) => ({
  components: { "n-toggle-button": NToggleBtn, NIcon },
  props: Object.keys(argTypes),
  template: `
  <div style="display:flex; justify-content:center;">
    <n-toggle-button v-bind="$props" @change=change @input=input>
      <template v-slot:icon>    
        <NIcon name="twitter" color="#1DA1F2"/>
      </template>
        {{text}}
    </n-toggle-button>
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

export const Toggle = Template.bind({});
Toggle.args = {
  id: `n-toggle-${NUuid()}`,
  text: 'Twitter',
  state: 'default',
  stateMessage: "You've checked twitter",
  value: true,
  size:"medium",
  showIcon: true,
  disabled: false,
  inputStyle:{},
  labelStyle:{},
  name: "n-toggle-button",
};
