<template>
  <transition name="nitrozen-badge">
    <div class="nitrozen-badge" :class="[addClass]">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "nitrozen-badge",
  props: {
    state: {
      type: String,
      default: "none"
    },
    title: {
      type: String,
      default: "none"
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addClass() {
      let className = "";
      switch (this.state) {
        case "default":
        case "none":
          className = "nitrozen-badge-default";
          break;
        case "info":
          className = "nitrozen-badge-info";
          break;
        case "success":
          className = "nitrozen-badge-success";
          break;
        case "warn":
          className = "nitrozen-badge-warn";
          break;
        case "error":
          className = "nitrozen-badge-error";
          break;
        case "disable":
          className = "nitrozen-badge-disable";
          break;

        default:
          break;
      }
      if (this.fill) {
        className += "-fill";
      }
      return className;
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-badge {
  height: 16px;
  padding: 4px 8px;
  margin: 0 8px 0 0;
  display: inline-block;
  cursor: default;
  border-radius: 2px;
  border: 1px solid @LabelColor;
  color: @WhiteColor;
  font-size: @BaseFontSize;
  white-space: nowrap;
  font-family: @PrimaryFont;
  line-height: 18px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &.nitrozen-badge-default {
    border: 1px solid @LabelColor;
    color: @LabelColor;
  }

  &.nitrozen-badge-info {
    border: 1px solid @SecondaryColor;
    color: @SecondaryColor;
  }

  &.nitrozen-badge-success {
    border: 1px solid @SuccessColor;
    color: @SuccessColor;
  }

  &.nitrozen-badge-warn {
    border: 1px solid @WarningColor;
    color: @WarningColor;
  }

  &.nitrozen-badge-error {
    border: 1px solid @ErrorColor;
    color: @ErrorColor;
  }

  &.nitrozen-badge-disable {
    border: 1px solid @DisabledColor;
    color: @DisabledColor;
  }

  &.nitrozen-badge-default-fill {
    background: @LabelColor;
    border: 1px solid @LabelColor;
  }

  &.nitrozen-badge-info-fill {
    background: @SecondaryColor;
    border: 1px solid @SecondaryColor;
  }

  &.nitrozen-badge-success-fill {
    background: @SuccessColor;
    border: 1px solid @SuccessColor;
  }

  &.nitrozen-badge-warn-fill {
    background: @WarningColor;
    border: 1px solid @WarningColor;
  }

  &.nitrozen-badge-error-fill {
    background: @ErrorColor;
    border: 1px solid @ErrorColor;
  }

  &.nitrozen-badge-disable-fill {
    background: @DisabledColor;
    border: 1px solid @DisabledColor;
  }
}
</style>
