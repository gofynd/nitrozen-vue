import Vue from 'vue'
import NitrozenTabItem from './NTabItem.vue'
import icons from '../../assets/icons.json'

// Create a wrapper component here using IconComponent

export default {
  title: 'Components/TabItem',
  component: NitrozenTabItem,
  argTypes: {
    id: {
        control: "text",
        default: "1"
    },
    icon: {
        control: { type: 'select' },
        options: Object.keys(icons),
        default: 'info'
    }
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenTabItem },
  props: Object.keys(argTypes),
  template: '<div><nitrozen-tab-item v-bind="$props">{{slotText}}</nitrozen-tab-item></div>',
});

export const SuccessBadge = Template.bind({})
SuccessBadge.args = {
    slotText: "Tab1",

}
