<template>
    <div
      class="scrollbar-container"
      :class="{ 'hover-scroll': hover }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="content-wrapper" ref="contentWrapper">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "nitrozen-scrollbar",
    props: {
      hover: {
        type: Boolean,
        default: true,
      },
      dynamicHeight: {
      type: String,
      default: '100px',
    },
    dynamicWidth: {
      type: String,
      default: '100px',
    },
    },
    methods: {
      handleMouseEnter() {
        if (this.hover) {
          this.$refs.contentWrapper.style.overflowY = "scroll";
        }
      },
      handleMouseLeave() {
        if (this.hover) {
          this.$refs.contentWrapper.style.overflowY = "hidden";
          this.$refs.contentWrapper.scrollTop = 0;
        }
      },
    },
    computed: {
    // customStyle() {
    //   return {
    //     width: this.dynamicWidth,
    //     heigth: this.dynamicHeight,
    //   };
    // },
  },
  };
  </script>
  
  <style lang="less">
  @import '../../../src/base/variable.less';
  .scrollbar-container {
    height: 300px;
    width: 100px;
    overflow: hidden;
    position: relative;
  }
  
  .content-wrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  
  .hover-scroll .content-wrapper::-webkit-scrollbar {
    width: 8px;
  }
  
  .hover-scroll .content-wrapper::-webkit-scrollbar-thumb {
    background: @ColorPrimaryGrey60;
    border-radius: 4px;
  }
  
  .hover-scroll .content-wrapper::-webkit-scrollbar-thumb:hover {
    background: @ColorPrimaryGrey80;
  }
  </style>
  