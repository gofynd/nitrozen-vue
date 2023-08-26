<template>
  <transition name="nitrozen-badge">
    <div class="nitrozen-badge" :class="[addClass]">
      <nitrozen-icon v-if="icon" :name="icon" :class="[addClass]" :size="getIconSize"/>
      <span class="nitrozen-badge-text">
        <slot />
      </span>
    </div>
  </transition>
</template>

<script>
import NIcon from '../NIcon'
export default {
  name: "nitrozen-badge",
  components: {
    'nitrozen-icon': NIcon
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value){
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    kind: {
      type: String,
      default: 'normal',
      validator(value){
        return ['normal', 'service'].includes(value)
      }
    },
    state: {
      type: String,
      default: "none"
    },
    fill: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    rounded: {
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
      switch (this.size) {
        case "small":
          className += " nitrozen-badge-small";
          break;
        case "medium":
          className += " nitrozen-badge-medium";
          break;
        case "large":
          className += " nitrozen-badge-large";
          break;
        default:
          className += " nitrozen-badge-medium";
          break;
      }
      if(this.icon){
        className += ` nitrozen-badge-icon nitrozen-badge-icon-${this.state}`
      }
      if(this.rounded){
        className += ` nitrozen-badge-rounded`
      }
      return className;
    },
    getIconSize(){
      let iconSize = {
        'small': 9,
        'medium': 14,
        'large': 18
      }
      return iconSize[this.size]
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-border-primary {
  border: 0.1rem solid @PrimaryColor;
}

.nitrozen-border-secondary-disable {
  border: 0.1rem solid @SecondaryDisabledColor;
}

.nitrozen-vertical-horizontal-center {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.nitrozen-badge-icon {
  &-info svg path {
    fill: @PrimaryColor;
    color: @PrimaryColor;
  }
  &-success svg path {
    color: @SuccessColor;
    fill: @SuccessColor;
  }
  &-error svg path {
    color: @ErrorColor;
    fill: @ErrorColor;
  }
  &-default svg path {
    color: @Zambezi;
    fill: @Zambezi;
  }
  &-warn svg path {
    fill: @WarningColor;
    color: @WarningColor;
  }
  &-disable svg path {
    fill: @LabelColor;
    color: @LabelColor;
  }
}



.nitrozen-badge {
  height: 1.6rem;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: default;
  border-radius: 0.4rem;
  color: @WhiteColor;
  font-size: @BaseFontSize + 2;
  white-space: nowrap;
  font-family: @PrimaryFont;
  line-height: 1.8rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  &.nitrozen-badge-default {
    border: 0.1rem solid @Zambezi;
    color: @Zambezi;
  }

  &.nitrozen-badge-info {
    .nitrozen-border-primary();
    color: @PrimaryColor;
  }

  &.nitrozen-badge-success {
    border: 0.1rem solid @SuccessColor;
    color: @SuccessColor;
  }
  &.nitrozen-badge-warn {
    border: 0.1rem solid @ColorFeedbackWarning20;
    color: @ColorFeedbackWarning80;
  }
  &.nitrozen-badge-error {
    border: 0.1rem solid @ErrorColor;
    color: @ErrorColor;
  }
  &.nitrozen-badge-disable {
    border: 0.1rem solid @LabelColor;
    color: @LabelColor;
  }
  &.nitrozen-badge-default-fill {
    background: @ColorPrimaryGrey20;
    color: @JDSDefaultColor;
  }
  &.nitrozen-badge-info-fill {
    background: @PrimaryColor;
    .nitrozen-border-primary();
  }
  &.nitrozen-badge-success-fill {
    background: @ColorFeedbackSuccess20;
    color: @ColorFeedbackSuccess80;
  }
  &.nitrozen-badge-warn-fill {
    background: @ColorFeedbackWarning20;
    color: @ColorFeedbackWarning80;
  }
  &.nitrozen-badge-error-fill {
    background: @ColorFeedbackError20;
    color: @ColorFeedbackError50;
  }
  &.nitrozen-badge-disable-fill {
    background: @ColorPrimaryGrey40;
    color: @JDSDefaultColor;
  }
  &.nitrozen-badge-small {
    font-size: @BaseFontSize + 2;
    line-height: 1.6rem;
    letter-spacing: -0.005em;
  }
  &.nitrozen-badge-medium {
    font-size: @BaseFontSize + 6;
  }
  &.nitrozen-badge-large {
    font-size: @BaseFontSize + 14;
    padding: 8px 24px;
    line-height: 2.4rem;
    letter-spacing: -0.005em;
  }
  &-rounded {
    border-radius: 0.8rem;
  }
}
</style>
