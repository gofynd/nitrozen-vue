<template>
  <div v-if="show" class="bottom-sheet-overlay" @click="onClose">
    <transition name="bottom-sheet">
      <div class="bottom-sheet-content" @click.stop>
        <button
          v-if="shouldShowCloseButton"
          class="bottom-sheet-close"
          @click="onClose"
        >
          <nitrozen-icon name="close" :size="24"></nitrozen-icon>
        </button>
        <div v-else-if="controlType === 'stepper'" class="bottom-sheet-stepper">
          <button
            class="bottom-sheet-back"
            @click="goToPreviousStep"
            v-if="currentStep > 0"
          >
            <nitrozen-icon name="arrow_back" :size="24"></nitrozen-icon>
          </button>
          <div class="bottom-sheet-step-indicator">
            {{ currentStep + 1 }}/{{ stepperConfig.totalStep }}
          </div>
          <button
            class="bottom-sheet-next"
            @click="goToNextStep"
            v-if="currentStep < stepperConfig.totalStep - 1"
          >
            <nitrozen-icon name="arrow_next" :size="24"></nitrozen-icon>
          </button>
        </div>
        <div class="bottom-sheet-header">
          <h3 v-if="title">{{ title }}</h3>
          <p v-if="description">{{ description }}</p>
        </div>
        <div class="bottom-sheet-inner-content">
          <slot></slot>
          <slot name="dynamicContent" :currentStep="currentStep"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>
import NIcon from '../NIcon/NIcon.vue';
export default {
name: 'nitrozen-bottomsheet',
components: {
'nitrozen-icon': NIcon,
},
props: {
  title: String,
  description: String,
  close: Boolean,
  controlType: String,
  stepperConfig: Object, // Add stepperConfig prop
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

  &-back {
    position: absolute;
    left: 0;
    top: 0;
    height: 48px;
    margin-top: 24px;
    margin-left: 16px;
    padding: 12px;
    border: none;
    background: transparent;

    &:hover {
      border-radius: 24px;
      background-color: @ColorPrimaryGrey20;
      cursor: pointer;
      padding: 12px;
    }
  }

  &-step-indicator {
    margin: 0 auto;
    font-size: 18px;
    font-weight: bold;
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
  padding: 40px 24px 24px 24px;
  width: 100%;
  position: absolute;
  max-width: 360px;
  right: 0;
  bottom: 0;
  margin-right: 60px;

  @media only screen and (max-width: 767px)  {
    max-width:100%;
    width:100%;
    margin-right: 0px;
  }
}

&-header {
  text-align: left;
  margin-bottom: 10px;
}

&-inner-content{
  margin-bottom: 20px;
}

&-actions {
  display: flex;
  justify-content: flex-end;
}

&-enter-active, &-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

&-close{
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  margin-top: 24px;
  margin-right: 16px;
  padding: 12px;
  border: none;
  background: transparent;

  &:hover{
      border-radius: 24px;
      background-color: @ColorPrimaryGrey20;
      cursor: pointer;
      padding: 12px;
  }
}

&-enter, &-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
}
</style>
