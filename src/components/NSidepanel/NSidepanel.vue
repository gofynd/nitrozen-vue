<template>
  <div v-if="isOpen">
    <div class="side-panel-backdrop" @click="emitCloseEvent"></div>
    <div
      class="side-panel-container"
      :class="[
        'side-panel',
        className,
        { 'side-panel-right': direction === 'right' },
      ]"
    >
      <div class="side-panel-header">
        <div class="side-panel-header-content">
          <nitrozen-icon
            v-if="icon"
            :name="icon"
            color="#fff"
            :size="24"
          ></nitrozen-icon>
          <div class="side-panel-header-text">{{ header }}</div>
        </div>
        <button class="side-panel-close" @click="emitCloseEvent">
          <nitrozen-icon name="close" color="#fff" :size="24"></nitrozen-icon>
        </button>
      </div>
      <div class="side-panel-content">
        <slot></slot>
        <slot name="additionalContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NIcon from "../NIcon/NIcon.vue";
export default {
  name: "nitrozen-sidepanel",
  components: {
    "nitrozen-icon": NIcon,
  },
  props: {
    header: String,
    showClose: Boolean,
    isOpen: Boolean,
    direction: String,
    disableTransition: Boolean,
    maxWidth: Boolean,
    className: String,
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    emitCloseEvent() {
      this.$emit("onClose");
    },
    emitHeaderPrefixClickEvent() {
      this.$emit("headerPrefixClickEvent");
    },
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = "auto"; 
      }
    },
  },
  beforeDestroy() {
    document.body.style.overflow = "auto"; 
  },
};
</script>

<style lang="less">
@import "../../../src/base/variable.less";
.side-panel {
  &-backdrop {
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 60;
    position: fixed;
    background-color: @ColorPrimaryGrey80;
  }

  &-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 25.75rem;
    height: 100%;
    background-color: hsl(0, 0%, 100%);
    z-index: 9999;
    max-width: 41.5rem;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3535F3;
    color: @WhiteColor;
    padding-bottom: 24px;
    height: 64px;
    max-height: 65px;
    padding: 0px 24px;

    &-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &-text {
      margin: 0px;
      padding-left: 12px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.08px;
    }
  }

  &-right {
    right: 0;
    left: unset;
  }

  &-content {
    margin: 24px 24px 0px;
    padding-bottom: 32px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.08px;
  }

  &-close {
    position: absolute;
    right: 0;
    top: 0;
    height: 48px;
    margin-top: 8px;
    margin-right: 16px;
    padding: 12px;
    border: none;
    background: transparent;

    &:hover {
      background-color: #000;
      border-radius: 24px;
      cursor: pointer;
    }
  }
}
</style>
