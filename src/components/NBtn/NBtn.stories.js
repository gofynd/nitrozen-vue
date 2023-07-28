import Vue from 'vue'
import NitrozenBtn from './NBtn.vue'
import icons from '../../assets/icons.json'

export default {
  title: 'Components/Button',
  component: NitrozenBtn,
  argTypes: {
    theme: {
        type: String,
        default: 'secondary',
        control: { type: "select" },
        options: ['primary', 'secondary','destructive']
    },
    rounded: {
        control: { type: "boolean" },
        description: "This property sets the border radius of the button",
    },
    size: {
        control: "select",
        description: "This property sets the size of the button",
        default:'large',
        options: ["small", "medium", "large"],
    },
    focused: {
        control: { type: "boolean" },
        description: "This property sets focus on the button.",
    },
    showProgress: {
        control: { type: "boolean" },
        description: "This property adds a loader on the button.",
    },
    icon:{
      control:'select',
      options: Object.keys(icons)
    },
    iconColor: {
      control: "color",
      description: "Set the icon color within the button",
      value:""
    },
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenBtn },
  props: Object.keys(argTypes),
  template: ' <nitrozen-btn v-bind="$props">Flat</nitrozen-btn>',
});

export const Flat = Template.bind({})
Flat.args = {
  rounded:true,
  theme:'secondary',
  icon: 'basketball'
};

const StrokedButton = (args, { argTypes }) => ({
  components: { NitrozenBtn },
  props: Object.keys(argTypes),
  template: '<nitrozen-btn v-bind="$props" >Stroked</nitrozen-btn>',
});

export const Stroked = StrokedButton.bind({})
Stroked.args = {
    rounded:true,
    theme:'primary'
  };
const Simple = (args, { argTypes }) => ({
  components: { NitrozenBtn },
  props: Object.keys(argTypes),
  template: '<nitrozen-btn v-bind="$props">Cancel</nitrozen-btn>',
});

export const simpleBtn = Simple.bind({})
simpleBtn.args = {
    rounded:true,
    theme:'destructive'
  };
