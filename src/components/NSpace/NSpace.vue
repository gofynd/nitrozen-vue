<template>
    <div :class="['sp', `sp--${size}`, `pd--${position}`]" :style="spacingStyle">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "nitrozen-space",
    props: {
      size: {
        type: String,
        default: "base",
      },
      position: {
        type: String,
        default: "all",
      },
    },
    computed: {
      spacingStyle() {
        return {
          padding: this.calculatePadding(),
        };
      },
      positionClass() {
        return this.position === "vertical" ? "v" : this.position;
      },
    },
    methods: {
      calculatePadding() {
        switch (this.size) {
          case "xxs":
            return "var(--spacing-xxs)";
          case "xs":
            return "var(--spacing-xs)";
          case "s":
            return "var(--spacing-s)";
          case "m":
            return "var(--spacing-m)";
          case "l":
            return "var(--spacing-l)";
          case "xl":
            return "var(--spacing-xl)";
          case "xxl":
            return "var(--spacing-xxl)";
          case "huge":
            return "var(--spacing-huge)";
          case "massive":
            return "var(--spacing-massive)";
          default:
            return "var(--spacing-base)";
        }
      },
    },
  };
  </script>
  
  <style lang="less">
  
  @spacing-base: 16px; // 16px
  
  @spacing-xxxs: @spacing-base * 0.125;
  
  @spacing-xxs: @spacing-base * 0.25; // 4px
  
  @spacing-xs: @spacing-base * 0.5; // 8px
  
  @spacing-s: @spacing-base * 0.75; // 12px
  
  @spacing-xm: @spacing-base * 1.25; // 20px
  
  @spacing-m: @spacing-base * 1.5; // 24px
  
  @spacing-l: @spacing-base * 2; // 32px
  
  @spacing-xl: @spacing-base * 2.5; // 40px
  
  @spacing-xxl: @spacing-base * 3; // 48px
  
  @spacing-huge: @spacing-base * 4; // 64px
  
  @spacing-massive: @spacing-base * 5; // 80px
  
  .apply-padding-left(@padding-size) {
    padding-left: @padding-size;
  }
  
  /* Spacing classes */
  .sp {
    box-sizing: border-box;
  }
  
  .sp--base {
    --spacing-base: @spacing-base;
    --spacing-base-calc: 16px;
  }
  
  .sp--xxs {
    --spacing-xxs: @spacing-xxs;
    --spacing-xxs-calc: 4px;
  }
  
  .sp--xs {
    --spacing-xs: @spacing-xs;
    --spacing-xs-calc: 8px;
  }
  
  .sp--s {
    --spacing-s: @spacing-s;
    --spacing-s-calc: 12px;
  }
  
  .sp--m {
    --spacing-m: @spacing-m;
    --spacing-m-calc: 24px;
  }
  
  .sp--l {
    --spacing-l: @spacing-l;
    --spacing-l-calc: 32px;
  }
  
  .sp--xl {
    --spacing-xl: @spacing-xl;
    --spacing-xl-calc: 40px;
  }
  
  .sp--xxl {
    --spacing-xxl: @spacing-xxl;
    --spacing-xxl-calc: 48px;
  }
  
  .sp--huge {
    --spacing-huge: @spacing-huge;
    --spacing-huge-calc: 64px;
  }
  
  .sp--massive {
    --spacing-massive: @spacing-massive;
    --spacing-massive-calc: 80px;
  }
  
  /* Position classes */
  .pd--all {
    padding: @spacing-base;
  }
  
  .pd--horizontal {
    .apply-padding-left(@spacing-base);
  }
  
  .pd--vertical {
    padding-top: @spacing-base;
    padding-bottom: @spacing-base;
  }
  
  .pd--top {
    padding-top: @spacing-base;
  }
  
  .pd--bottom {
    padding-bottom: @spacing-base;
  }
  
  .pd--left {
    .apply-padding-left(@spacing-base);
  }
  
  .pd--right {
    padding-right: @spacing-base;
  }
  
  
  </style>