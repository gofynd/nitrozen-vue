import Vue from 'vue'
import NitrozenBadge from './NBadge.vue'
import icons from '../../assets/icons.json'

// Create a wrapper component here using IconComponent

export default {
  title: 'Components/Badges',
  component: NitrozenBadge,
  argTypes: {
    labelText: { 
        control: "text",
        default: "Success"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      default: 'medium'
    },
    kind: {
      control: "select",
      options: ["normal", "service"],
      default: 'normal'
    },
    state: {
      control: "select",
      options: ["info", "success", "warn", "error", "default", "disable"],
      default: 'info'
    },
    fill: {
      options: [true, false],
      control: { type: "radio" },
      default: false
    },
    icon: {
        control: { type: 'select' },
        options: Object.keys(icons),
        default: 'info'
    }
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenBadge },
  props: Object.keys(argTypes),
  template: '<div><nitrozen-badge v-bind="$props">{{slotText}}</nitrozen-badge></div>',
});

export const SuccessBadge = Template.bind({})
SuccessBadge.args = {
    slotText: "Success",

}
