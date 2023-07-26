
<template>
    <div v-if="showNudge" class="nudge" :class="nudgeType" :key="nudgeKey" @click="handleClick">
  
      <div class="nudge-message">
  
        <nitrozen-icon v-if="icon" :name="icon" color="#fff"></nitrozen-icon>
  
        <div class="content">
  
          <div class="nudge-title">{{ title }}</div>
  
          <div class="nudge-description">{{ description }}</div>
  
        </div>
  
        <button><nitrozen-icon name="close" color="#fff" @click="handleCancelClick"></nitrozen-icon></button>
  
  
  
        <button v-if="showPrimaryButton" @click="handlePrimaryClick">{{ primaryButtonLabel }}</button>
  
        <button v-if="showSecondaryButton" @click="handleSecondaryClick">{{ secondaryButtonLabel }}</button>
  
      </div>
  
    </div>
  </template>
    
  <script>
  import NHeader from '../NHeading/index';
  import NText from '../NText';
  import NIcon from '../NIcon/NIcon.vue';
  
  export default {
    name: 'Nudge',
    components: {
      NHeader,
      NText,
      'nitrozen-icon': NIcon,
    },
    props: {
        showNudge: {
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
      nudgeType: {
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
        nudgeKey: 0,
      };
    },
    methods: {
      showToastMessage() {
        if (this.showNudge) {
          this.nudgeKey++;
  
          if (this.nudgeType !== 'action') {
            setTimeout(() => {
              this.hideToast();
            }, 5000);
          }
        }
      },
      handleCancelClick() {
        this.showNudge = false;
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
    showNudge: {
        immediate: true,
        handler(newVal) {
          if (newVal && this.nudgeType !== 'action') {
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
  .nudge{
  
  visibility: visible;
  
  min-width: 360px;
  
  margin-right: 24px;
  
  margin-top: 24px;
  
  background-color: rgba(0, 0, 0, .65);
  
  color: #fff;
  
  text-align: center;
  
  border-radius: 16px;
  
  padding: 16px;
  
  position: fixed;
  
  z-index: 70;
  
  font-size: 12px;
  
  letter-spacing: -0.06px;
  top: 0;
  right: 0;
  
  
  @media only screen and (max-width: 767px)  {
  
  left:50%;
  
  margin-left:-180px;
  
  }
  

  
  }
  
  
  
  
  @keyframes tfadein {
  
  from {left: 0; opacity: 0;}
  
  to {left: 10; opacity: 1;}
  
  }
  
  
  
  
  @keyframes tfadeout {
  
  from {left: 10%; opacity: 1;}
  
  to {left: 0; opacity: 0;}
  
  }
  
  
  
  
  .nudge.info {
  
    background-color: #007bff;
  
  }
  
  
  
  
  .nudge.success {
  
    background-color: #28a745;
  
  }
  
  
  
  
  .nudge.warning {
  
    background-color: #ffc107;
  
  }
  
  
  
  
  .nudge.error {
  
    background-color: #dc3545;
  
  }
  
  
  
  
  .nudge.action {
  
    background-color: #17a2b8;
  
  }
  
  
  
  
  .nudge .nudge-message {
  
    display: flex;
  
    align-items: center;
  
    justify-content: flex-start;
  
  }
  
  
  
  
  .nudge .nudge-message .content{
  
      text-align: left;
  
      font-size: 14px;
  
      margin: 0px 12px;
  
  }
  
  
  
  
  .nudge .nudge-message .content .toast-title{
  
      font-size: 16px ;
  
      font-weight: 600;
  
      padding-bottom: 4px;
  
  }
  
  
  
  
  .nudge .nudge-message .content .nudge-description{
  
      max-width: 320px;
  
  }
  
  
  
  
  .nudge .nudge-message i {
  
    margin-right: 8px;
  
  }
  
  
  
  
  .nudge .nudge-message button {
  
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
  </style>
    