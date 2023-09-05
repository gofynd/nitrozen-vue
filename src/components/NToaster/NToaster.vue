<template>
  <div
    v-if="showToast"
    class="toaster"
    :class="toastType"
    :key="toastKey"
    @click="handleClick"
  >
    <div class="toaster-message">
      <nitrozen-icon v-if="icon" :name="icon" color="#3535F3" :size="24"></nitrozen-icon>

      <div class="content-toaster">
        <div v-if="title" class="toast-title">{{ title }}</div>

        <div v-if="description" class="toast-description">
          {{ description }}
        </div>
      </div>

      <button>
        <nitrozen-icon
          name="close"
          color="#3535F3"
          :size="24"
          @click="handleCancelClick"
        ></nitrozen-icon>
      </button>
    </div>

    <div class="toaster-cta">
      <nitrozen-button
        rounded
        theme="secondary"
        v-if="showSecondaryButton"
        @click="onClickSecondary"
        >{{ primaryButtonLabel }}</nitrozen-button
      >
      <nitrozen-button
        rounded
        theme="primary"
        v-if="showPrimaryButton"
        @click="onClickPrimary"
        >{{ secondaryButtonLabel }}</nitrozen-button
      >
    </div>
  </div>
</template>

<script>
import NIcon from '../NIcon/NIcon.vue';
import NBtn from '../NBtn/NBtn.vue';

export default {
  name: 'nitrozen-toaster',
  components: {
    'nitrozen-button': NBtn,
    'nitrozen-icon': NIcon,
  },
  props: {
    showToast: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    toastType: {
      type: String,
      default: '', // Default type (info, success, warning, error, action, etc.)
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
      default: 'Primary',
    },
    showSecondaryButton: {
      type: Boolean,
      default: false,
    },
    secondaryButtonLabel: {
      type: String,
      default: 'Secondary',
    },
  },
  data() {
    return {
      toastKey: 0,
    };
  },
  methods: {
    showToastMessage() {
      if (this.showToast) {
        this.toastKey++;

        if (this.toastType !== 'action') {
          setTimeout(() => {
            this.hideToast();
          }, 10000);
        }
      }
    },
    handleCancelClick() {
      this.showToast = false;
    },
    hideToast() {
      this.$emit('onClose');
    },
    handleClick() {
      this.$emit('onClose');
    },
    onClickPrimary() {
      this.$emit('onClickPrimary');
    },
    onClickSecondary() {
      this.$emit('onClickSecondary');
    },
  },
  watch: {
    showToast: {
      immediate: true,
      handler(newVal) {
        if (newVal && this.toastType !== 'action') {
          setTimeout(() => {
            this.$emit('onClose');
          }, 33000);
        }
      },
    },
  },
};
</script>

<style lang="less">
@import '../../../src/base/variable.less';
.toaster {
  visibility: visible;
  min-width: 312px;
  max-width: 484px;
  background-color: @WhiteColor;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  color: @BlackColor;
  text-align: center;
  border-radius: 16px;
  padding: 16px;
  position: fixed;
  z-index: 70;
  font-size: 12px;
  letter-spacing: -0.06px;
  bottom: 8%;
  left: 5%;
  animation: tfadein 0.5s, tfadeout 0.5s 2.5s;

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

    .content-toaster {
      text-align: left;
      margin: 0px 12px;

      .toast-title {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.08px;
        padding-bottom: 4px;
      }

      .toast-description {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.07px;
        max-width: 320px;

        i {
          margin-right: 8px;
        }
      }
    }

    button {
      background-color: transparent;
      color: @WhiteColor;
      position: absolute;
      right: 0;
      margin-right: 8px;
      padding: 6px 12px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }

  &-cta {
    display: flex;
    justify-content: flex-end;
    max-width: 360px;
    padding-top: 16px;

    button{
      margin: 0px 4px;
    }
  }
}

@keyframes tfadein {
  from {
    left: 0;
    opacity: 0;
  }
  to {
    left: 5%;
    opacity: 1;
  }
}

@keyframes tfadeout {
  from {
    left: 5%;
    opacity: 1;
  }
  to {
    left: 0;
    opacity: 0;
  }
}
</style>
