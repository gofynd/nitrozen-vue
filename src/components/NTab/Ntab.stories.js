import Vue from 'vue'
import NitrozenTab from './NTab.vue'
import icons from '../../assets/icons.json'

export default {
  title: 'Components/Tab',
  component: NitrozenTab,
  argTypes: {
    id: {
        control: "text",
        default: "1"
    },
    icon: {
        control: { type: 'select' },
        options: Object.keys(icons),
        default: 'info'
    },
    activeIndex:{
        control: "text",
        default: "0"
    },
    tabItem: {
        control: "text",
        default: "[]",
      },
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenTab },
  props: Object.keys(argTypes),
  template: '<div><nitrozen-tab v-bind="$props">{{slotText}}</nitrozen-tab></div>',
});

export const SuccessBadge = Template.bind({})
SuccessBadge.args = {
    slotText: "Tab1",

}
