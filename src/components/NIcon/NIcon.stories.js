import Vue from 'vue'
import IconComponent from './index'
import icons from '../../assets/icons.json'

// Create a wrapper component here using IconComponent

export default {
  title: 'Assets/Icon',
  component: IconComponent,
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(icons),
      description: "Icon name to use. One of the supported icons",
    },
    size: {
      control: "number",
      description: "Size of the icon",
    },
    color: {
      control: "color",
      description: "Color of the icon",
    }
  }
}


const Template = (args, { argTypes }) => ({
  components: { IconComponent },
  props: Object.keys(argTypes),
  template: '<icon-component v-bind="$props" />',
});

export const Icon = Template.bind({})
