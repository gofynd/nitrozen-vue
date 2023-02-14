import Vue from 'vue'
import NitrozenValidation from '.'

export default {
  title: 'Components/Validation',
  component: NitrozenValidation,
  argTypes: {
    validationState: {
        control: "select",
        options: ['success', 'error', 'warning', 'default']
    }
  }
}


const Template = (args, { argTypes }) => ({
  components: { NitrozenValidation },
  props: Object.keys(argTypes),
  template: '<nitrozen-validation v-bind="$props"></nitrozen-validation>',
});

export const Success = Template.bind({})
Success.args = {
    label: 'All fields are valid',
    validationState: 'success',
    isHidden: false
}
