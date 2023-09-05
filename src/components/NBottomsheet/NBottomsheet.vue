<template>
  <div v-if="show" class="bottom-sheet-overlay" @click="onClose">
    <transition name="bottom-sheet">
      <div class="bottom-sheet-content" @click.stop>
        <div v-if="shouldShowCloseButton" class="bottom-sheet-close">
          <button @click="onClose">
            <nitrozen-icon name="close" :size="24"></nitrozen-icon>
          </button>
        </div>
        <div v-else-if="controlType === 'stepper'" class="bottom-sheet-stepper">
          <button class="bottom-sheet-back" @click="goToPreviousStep" v-if="currentStep > 0">
            <nitrozen-icon name="arrow_back" :size="24"></nitrozen-icon>
          </button>
          <div class="bottom-sheet-step-indicator">
            {{ currentStep + 1 }}/{{ stepperConfig.totalStep }}
          </div>
          <button class="bottom-sheet-next" @click="goToNextStep" v-if="currentStep < stepperConfig.totalStep - 1">
            <nitrozen-icon name="arrow_next" :size="24"></nitrozen-icon>
          </button>
        </div>
        <div class="bottom-sheet-header">
          <div v-if="title" class="title">{{ title }}</div>
          <div v-if="description" class="description">{{ description }}</div>
        </div>
        <div class="bottom-sheet-inner-content">
          <slot></slot>
          <slot name="dynamicContent" :currentStep="currentStep"></slot>
        </div>
        <div class="bottom-sheet-buttons">
          <nitrozen-button
      rounded 
      theme="primary"
      size="large"
        v-if="showPrimaryButton"
        @click="onPrimaryButtonClick"
        >{{ primaryButtonLabel }}</nitrozen-button
      >
      <nitrozen-button
      rounded
      size="large"
        v-if="showSecondaryButton"
        @click="onSecondaryButtonClick"
        >{{ secondaryButtonLabel }}</nitrozen-button
      >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NIcon from '../NIcon/NIcon.vue';
import  NBtn  from '../NBtn/NBtn.vue';
export default {
  name: 'nitrozen-bottomsheet',
  components: {
    'nitrozen-icon': NIcon,
    'nitrozen-button':NBtn,
  },
  props: {
    title: String,
    description: String,
    close: Boolean,
    controlType: String,
    stepperConfig: Object,
    showPrimaryButton: Boolean,
    primaryButtonLabel: String,
    showSecondaryButton: Boolean,
    secondaryButtonLabel: String,
  },
  data() {
    return {
      show: false,
      currentStep: 0,
    };
  },
  computed: {
    shouldShowCloseButton() {
      return this.controlType === 'normal' && this.close;
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    goToNextStep() {
      if (this.currentStep < this.stepperConfig.totalStep - 1) {
        this.currentStep++;
      }
    },
    onPrimaryButtonClick() {
      this.$emit('primaryButtonClick');
    },
    onSecondaryButtonClick() {
      this.$emit('secondaryButtonClick');
    },
  },
};
</script>

<style lang="less">
@import '../../../src/base/variable.less';
// .bottom-sheet{
// &-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: @ColorPrimaryGrey80;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   z-index: 9999;
// }

// &-content {
//   background-color: @WhiteColor;
//   border-radius: 24px 24px 0 0;
//   padding: 40px 24px 24px 24px;
//   width: 100%;
//   position: absolute;
//   max-width: 360px;
//   right: 0;
//   bottom: 0;
//   margin-right: 60px;

//   @media only screen and (max-width: 767px)  {
//     max-width:100%;
//     width:100%;
//     margin-right: 0px;
//   }
// }

// &-header {
//   text-align: left;
//   margin-bottom: 10px;
// }

// &-inner-content{
//   margin-bottom: 20px;
// }

// &-actions {
//   display: flex;
//   justify-content: flex-end;
// }

// &-enter-active, &-leave-active {
//   transition: opacity 0.3s, transform 0.3s;
// }

// &-close{
//   position: absolute;
//   right: 0;
//   top: 0;
//   height: 48px;
//   margin-top: 24px;
//   margin-right: 16px;
//   padding: 12px;
//   border: none;
//   background: transparent;

//   &:hover{
//       border-radius: 24px;
//       background-color: @ColorPrimaryGrey20;
//       cursor: pointer;
//       padding: 12px;
//   }
// }

// &-enter, &-leave-to {
//   opacity: 0;
//   transform: translateY(100%);
// }

// }

.bottom-sheet {
  /* ... Your existing styles ... */

  &-back,
  &-next {
    padding: 4px;
    border: none;
    background: transparent;

    &:hover {
      border-radius: 24px;
      background-color: @ColorPrimaryGrey20;
      cursor: pointer;
      padding: 4px;
    }
  }

  &-step-indicator {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.07px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.65);
  }

  &-stepper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: @ColorPrimaryGrey80;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 9999;
  }

  &-content {
    background-color: @WhiteColor;
    border-radius: 24px 24px 0 0;
    padding: 24px;
    width: 100%;
    position: absolute;
    max-width: 360px;
    right: 0;
    bottom: 0;
    margin-right: 60px;

    @media only screen and (max-width: 767px) {
      max-width: 100%;
      width: 100%;
      margin-right: 0px;
    }
  }

  &-header {
    text-align: left;

    .title {
      font-size: 24px;
      font-style: normal;
      font-weight: 900;
      line-height: 28px;
      letter-spacing: -0.72px;
    }

    .description {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.07px;
    }
  }

  &-inner-content {
    padding: 24px 0px;
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.08px;
  }

  &-actions {
    display: flex;
    justify-content: flex-end;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  &-close {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      border: none;
      background: transparent;
      padding: 12px;

      &:hover {
        border-radius: 24px;
        background-color: @ColorPrimaryGrey20;
        cursor: pointer;
        padding: 12px;
      }
    }
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
.bottom-sheet-buttons{

display: flex;

flex-direction: column;

gap:16px;

}
</style>
