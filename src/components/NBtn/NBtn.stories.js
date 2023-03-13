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
      value:"white"
    },
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenBtn },
  props: Object.keys(argTypes),
  template: ' <nitrozen-btn v-flat-btn v-bind="$props">Cancel</nitrozen-btn>',
});

export const DefaultButtonThemes = Template.bind({})
DefaultButtonThemes.args = {
  rounded:false,
  theme:'primary'
};

const StrokedButtonTemplate = (args, { argTypes }) => ({
  components: { NitrozenBtn },
  props: Object.keys(argTypes),
  template: '<nitrozen-btn v-bind="$props" v-stroke-btn>Cancel</nitrozen-btn>',
});

export const StrokedButtonThemes = StrokedButtonTemplate.bind({})
StrokedButtonThemes.args = {
    rounded:true,
  };

const IconFilledButtonTemplate = (args, { argTypes }) => ({
    components: { NitrozenBtn },
    props: Object.keys(argTypes),
    template: '<nitrozen-btn v-bind="$props" v-stroke-btn>Cancel</nitrozen-btn>',
  });

export const IconFilledButtonThemes = IconFilledButtonTemplate.bind({})
IconFilledButtonThemes.args = {
  rounded:true,
  icon:'twitter'
  };
