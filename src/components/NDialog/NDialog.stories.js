import Vue from 'vue'
import NDialog from './NDialog.vue'

export default {
  title: 'Components/Dialog',
  component: NDialog,
  argTypes: {
    title: { 
        control: "text",
        default: "Title"
    },
  }
}


const Template = (args, { argTypes }) => ({
  components: {NDialog},
  props: Object.keys(argTypes),
  template: `
  <div>
  <n-dialog ref="dialog" v-bind="$props">
  <template slot="body"> {{body}}</template>
  </n-dialog>
  </div>
  `,
  data: function () {
    return {
    };
  },
  methods: {
  },
});

export const dialog = Template.bind({})

dialog.args = {
  title: 'Are you sure you would like to proceed?',
  kind : 'dialog',
  body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
  size : 's'
}

export const acknowledgement = Template.bind({})
acknowledgement.args = {
    title: 'Are you sure you would like to proceed?',
    kind : 'acknowledgement',
    body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
    size : 's'
}

export const informational = Template.bind({})
informational.args = {
    title: 'Are you sure you would like to proceed?',
    kind : 'informational',
    body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
    size : 's'
}

