<template>
  <div
    v-if="showNudge"
    class="nudge"
    :class="nudgeType"
    :key="nudgeKey"
    @click="handleClick"
  >
    <div class="nudge-message">
      <nitrozen-icon v-if="icon" :name="icon" color="#fff"></nitrozen-icon>

      <div class="content-nudge">
        <div v-if="title" class="nudge-title">{{ title }}</div>

        <div v-if="description" class="nudge-description">{{ description }}</div>
      </div>

      <button>
        <nitrozen-icon
          name="close"
          color="#fff"
          :size="16"
          @click="handleCancelClick"
        ></nitrozen-icon>
      </button>
    </div>

    <div class="nudge-cta">
      <nitrozen-button
      rounded 
      theme="primary"
        v-if="showPrimaryButton"
        @click="handlePrimaryClick"
        >{{ primaryButtonLabel }}</nitrozen-button
      >
      <nitrozen-button
      rounded
        v-if="showSecondaryButton"
        @click="handleSecondaryClick"
        >{{ secondaryButtonLabel }}</nitrozen-button
      >
    </div>
  </div>
</template>

<script>

import NIcon from "../NIcon/NIcon.vue";
import  NBtn  from '../NBtn/NBtn.vue';
export default {
  name: "nitrozen-nudge",
  components: {
    'nitrozen-button':NBtn,
    "nitrozen-icon": NIcon,
  },
  props: {
    showNudge: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    nudgeType: {
      type: String,
      default: "", // Default type (info, success, warning, error, action, etc.)
    },
    icon: {
      type: String,
      default: null,
    },
    showPrimaryButton: {
      type: Boolean,
      default: false,
    },
    primaryButtonLabel: {
      type: String,
      default: "Primary",
    },
    showSecondaryButton: {
      type: Boolean,
      default: false,
    },
    secondaryButtonLabel: {
      type: String,
      default: "Secondary",
    },
  },
  data() {
    return {
      nudgeKey: 0,
    };
  },
  methods: {
    showToastMessage() {
      if (this.showNudge) {
        this.nudgeKey++;

        if (this.nudgeType !== "action") {
          setTimeout(() => {
            this.hideToast();
          }, 10000);
        }
      }
    },
    handleCancelClick() {
      this.showNudge = false;
    },
    hideToast() {
      this.$emit("onClose");
    },
    handleClick() {
      this.$emit("onClose");
    },
    handlePrimaryClick() {
      this.$emit("onClickPrimary");
    },
    handleSecondaryClick() {
      this.$emit("onClickSecondary");
    },
  },
  watch: {
  showNudge: {
      immediate: true,
      handler(newVal) {
        if (newVal && this.nudgeType !== 'action') {
          setTimeout(() => {
            this.$emit('onClose');
          }, 10000);
        }
      },
    },
  },
};
</script>

<style lang="less">
@import '../../../src/base/variable.less';
.nudge {
  visibility: visible;
  min-width: 360px;
  margin-right: 24px;
  margin-top: 24px;
  background-color: @ColorPrimaryGrey80;
  color: @WhiteColor;
  text-align: center;
  border-radius: 16px;
  padding: 16px;
  position: fixed;
  z-index: 70;
  font-size: 12px;
  letter-spacing: -0.06px;
  top: 0;
  right: 5%;
  animation: nfadein 0.5s, nfadeout 0.5s 2.5s;

  @media only screen and (max-width: 767px) {
    left: 50%;
    margin-left: -180px;
  }

  .info {
    background-color: #007bff;
  }

  .success {
  background-color: @ColorFeedbackSuccess50;
  }

  .warning {
  background-color: @ColorFeedbackWarning50;
  }

  .error {
  background-color: @ColorFeedbackError50;
  }


  .action {
  background-color: #17a2b8;
  }

  &-message {
  display: flex;
  align-items: center;
  justify-content: flex-start;

   .content-nudge {
      text-align: left;
      font-size: 14px;
      margin: 0px 12px;

      .toast-title {
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 4px;
        }

      .nudge-description {
          max-width: 320px;

           i{
                margin-right: 8px;
              }
        }
    }

    button {
      background-color: transparent;
      color: @WhiteColor;
      position: absolute;
      right: 0;
      margin-right: 12px;
      padding: 6px 12px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }

  &-cta {
      display:flex;
      justify-content: flex-end;
      max-width: 360px;

      button {
        background-color: transparent;
        color: @WhiteColor;
        border: 1px solid @WhiteColor;
        border-radius: 24px;
        border-width: 1px;
        max-height: 2.5em;
        padding: 4px 16px;
        margin: 12px 8px 0px 8px;
      }
    }

}

@keyframes nfadein {
  from {
    right: 0;
    opacity: 0;
  }

  to {
    right: 5%;
    opacity: 1;
  }
}

@keyframes nfadeout {
  from {
    right: 5%;
    opacity: 1;
  }

  to {
    right: 0;
    opacity: 0;
  }
}

</style>
