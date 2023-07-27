
<template>
  <div v-if="showToast" class="toaster" :class="toastType" :key="toastKey" @click="handleClick">

    <div class="toaster-message">

      <nitrozen-icon v-if="icon" :name="icon" color="#fff"></nitrozen-icon>

      <div class="content">

        <div class="toast-title">{{ title }}</div>

        <div class="toast-description">{{ description }}</div>

      </div>

      <button><nitrozen-icon name="close" color="#fff" size="16" @click="handleCancelClick"></nitrozen-icon></button>

    </div>

    <div class="toaster-cta">
    <nitrozen-button rounded  v-if="showPrimaryButton" @click="handlePrimaryClick">{{ primaryButtonLabel }}</nitrozen-button>
    <nitrozen-button rounded v-if="showSecondaryButton" @click="handleSecondaryClick">{{ secondaryButtonLabel }}</nitrozen-button>
    </div>

  </div>
</template>
  
<script>
import NHeader from '../NHeading/index';
import NText from '../NText';
import NIcon from '../NIcon/NIcon.vue';

export default {
  name: 'nitrozen-toaster',
  components: {
    NHeader,
    NText,
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
          }, 5000);
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
    handlePrimaryClick() {
      this.$emit('onClickPrimary');
    },
    handleSecondaryClick() {
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
          }, 3000);
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
  min-width: 360px;
  margin-left: 24px;
  margin-bottom: 24px;
  background-color: @ColorPrimaryGrey80;
  color: @WhiteColor;
  text-align: center;
  border-radius: 16px;
  padding: 16px;
  position: fixed;
  z-index: 70;
  font-size: 12px;
  letter-spacing: -0.06px;
  bottom: 0;
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

   .content {
      text-align: left;
      font-size: 14px;
      margin: 0px 12px;

      .toast-title {
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 4px;
        }

      .toast-description {
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


@keyframes tfadein {
from {left: 0; opacity: 0;}
to {left: 5%; opacity: 1;}
}

@keyframes tfadeout {
from {left: 5%; opacity: 1;}
to {left: 0; opacity: 0;}
}

</style>
  