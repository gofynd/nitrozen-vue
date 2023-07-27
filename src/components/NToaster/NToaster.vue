
<template>
  <div v-if="showToast" class="toaster" :class="toastType" :key="toastKey" @click="handleClick">

    <div class="toast-message">

      <nitrozen-icon v-if="icon" :name="icon" color="#fff"></nitrozen-icon>

      <div class="content">

        <div class="toast-title">{{ title }}</div>

        <div class="toast-description">{{ description }}</div>

      </div>

      <button><nitrozen-icon name="close" color="#fff" size="16" @click="handleCancelClick"></nitrozen-icon></button>

    </div>

    <div class="toast-cta">
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
          }, 5000);
        }
      },
    },
  },
};
</script>
  
<style>
.toaster{

visibility: visible;

min-width: 360px;

margin-left: 24px;

margin-bottom: 24px;

background-color: rgba(0, 0, 0, .65);

color: #fff;

text-align: center;

border-radius: 16px;

padding: 16px;

position: fixed;

z-index: 70;

font-size: 12px;

letter-spacing: -0.06px;

left: 5%;

bottom: 0;

animation: tfadein 0.5s, tfadeout 0.5s 3s;


@media only screen and (max-width: 767px)  {

left:50%;

margin-left:-180px;

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




.toaster.info {

  background-color: #007bff;

}




.toaster.success {

  background-color: #28a745;

}




.toaster.warning {

  background-color: #ffc107;

}




.toaster.error {

  background-color: #dc3545;

}




.toaster.action {

  background-color: #17a2b8;

}




.toaster .toast-message {

  display: flex;

  align-items: center;

  justify-content: flex-start;

}




.toaster .toast-message .content{

    text-align: left;

    font-size: 14px;

    margin: 0px 12px;

}




.toaster .toast-message .content .toast-title{

    font-size: 16px ;

    font-weight: 600;

    padding-bottom: 4px;

}




.toaster .toast-message .content .toast-description{

    max-width: 320px;

}




.toaster .toast-message i {

  margin-right: 8px;

}




.toaster .toast-message button {

  background-color: transparent;

  color: #fff;

    position: absolute;

    right: 0;

    margin-right: 12px;

  padding: 6px 12px;

  border-radius: 4px;

  border: none;

  cursor: pointer;

  transition: background-color 0.3s ease, color 0.3s ease;

}

.toast-cta{
  display:flex;
  justify-content: flex-end;
  max-width: 360px;
}
.toast-cta button{
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 24px;
  border-width: 1px;
  max-height: 2.5em;
  padding: 4px 16px;
  margin: 12px 8px 0px 8px;
}

</style>
  