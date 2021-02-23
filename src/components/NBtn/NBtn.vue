<script>
import { h } from "vue";
import NButtonContent from "./NBtnContent";

export default {
  name: "nitrozen-button",
  components: {
    NButtonContent
  },
  props: {
    href: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: Boolean,
    content: String,
    rounded: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "primary"
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "small"
    },
    focused: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  render() {
    const nButtonContent = h(
      NButtonContent,
      {
        showProgress: this.showProgress,
        icon: this.icon
      },
      this.$slots.default
    );

    let buttonAttrs = {
      class: [
        "n-button ripple",
        {
          "n-button-rounded": this.rounded,
          "n-button-primary": this.theme == "primary",
          "n-button-secondary": this.theme == "secondary",
          "n-button-large": this.size == "large",
          "n-button-mid": this.size == "medium",
          "n-button-focused": this.focused
        }
      ],
      href: this.href,
      disabled: this.disabled,
      type: !this.href && (this.type || "button"),
      ...this.$attrs
    };
    let tag = "button";
    if (this.href) {
      tag = "a";
    }
    return h(tag, buttonAttrs, [nButtonContent]);
  }
};
</script>

<style lang="less">
@import "./NBtn.less";
</style>
