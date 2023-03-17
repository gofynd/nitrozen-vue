import Vue from 'vue'
import NitrozenChips from './NChips.vue'
import icons from '../../assets/icons.json'

// Create a wrapper component here using IconComponent

export default {
  title: 'Components/Chips',
  component: NitrozenChips,
  argTypes: {
    theme: {
        type: String,
        default: 'primary',
        control: { type: "select" },
        options: ['primary', 'secondary']
    },
    state: {
        type: String,
        default: 'none',
        control: { type: "select" },
        options: ['none', 'error', 'success', 'progress']
    },
    icon: {
        type: String,
        default: 'info',
        control: { type: 'select' },
        options: Object.keys(icons)
    }
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenChips },
  props: Object.keys(argTypes),
  template: '<nitrozen-chips v-bind="$props">{{ slotText }}</nitrozen-chips>',
});

export const DefaultChip = Template.bind({})
DefaultChip.args = {
    slotText: 'Default Chip',
}
