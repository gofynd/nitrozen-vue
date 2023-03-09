import Vue from 'vue'
import NTooltip from './NTooltip.vue'
export default {
  title: 'Components/Tooltip',
  component: NTooltip,
  argTypes: {
    contentBgColor: {
      control: "color",
      description: "Set the background color of the tooltip container",
      value:"red"
    },
    position:{
        control: "select",
        options: [
          "top",
          "right",
          "left",
          "bottom",
          "right-start",
          "right-end",
          "left-start",
          "left-end",
          "bottom-start",
          "bottom-end",
          "top-start",
          "top-end",
        ]
    },
    tooltipText:{
      control:"text",
      value:"hello there i am a tooltip"
    },
    icon:{
      control:'select',
      options: [
        "twitter",
        "info",
        "404_error",
        "4g_bar_four",
        "add_circle"
      ]
    },
    iconColor: {
      control: "color",
      description: "Set the icon color of the tooltip",
      value:"red"
    },
    iconSize:{
      control:"number",
      value:26
    }
  }
}
const Template = (args, { argTypes }) => ({
  components: { NTooltip },
  props: Object.keys(argTypes),
  template: `<div class="tooltip-story-wrapper space-between">
 <n-tooltip  v-bind="$props"/>
  </div>`,
  data: function () {
    return {};
  },
  methods: {},
});

export const TooltipSimple = Template.bind({})
TooltipSimple.args = {
  position: "bottom",
  tooltipText:
    "This is a tooltip that shows helpful information when we hover over an icon.",
  iconSize:50
};

export const TooltipWithLink = Template.bind({})
TooltipWithLink.args = {
  position: "bottom",
  tooltipText:"This is a tooltip that shows helpful information when we hover over an icon.",
  tooltipLinkText:"Click here",
  link: "https://www.example.com",
  iconSize:50
};

