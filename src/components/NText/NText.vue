<template>
  <component :is="tag" :style="customStyle" :class="sizeClass" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </component>
</template>
  
<script>
export default {
  name: "TextComponent",
  props: {
    level: {
      type: String,
      default: "p",
      validator: (value) => ["p", "span", "b", "strong"].includes(value),
    },
    color: {
      type: String,
      default: "#222",
    },
    fontSize: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    tag() {
      return this.level;
    },
    customStyle() {
      return {
        color: this.color,
        fontSize: this.fontSize,
      };
    },
    sizeClass() {
      return this.size ? `size-${this.size.toLowerCase()}` : '';
    },
  },
};
</script>
  
<style lang="less">
.size-body {

  &-l {
    font-weight: 500 !important;
    font-size: 24px !important;
    letter-spacing: -0.12px !important;
    line-height: 1.3333333333333333 !important;

    &-light {
      font-weight: 300 !important;
    }

    &-bold {
      font-weight: 700 !important;
    }

    &-link {
      font-weight: 700 !important;
    }
  }

  &-m {
    font-weight: 500 !important;
    font-size: 18px !important;
    letter-spacing: -0.09px !important;
    line-height: 1.3333333333333333 !important;

    &-light {
      font-weight: 300 !important;
    }

    &-bold {
      font-weight: 700 !important;
    }

    &-link {
      font-weight: 700 !important;
    }
  }

  &-s {
    font-weight: 500 !important;
    font-size: 16px !important;
    letter-spacing: -0.08px !important;
    line-height: 1.5 !important;

    &-light {
      font-weight: 300 !important;
    }

    &-bold {
      font-weight: 700 !important;
    }

    &-link {
      font-weight: 700 !important;
    }
  }

  &-xs {
    font-weight: 500 !important;
    font-size: 14px !important;
    letter-spacing: -0.07px !important;
    line-height: 1.4285714285714286 !important;

    &-light {
      font-weight: 300 !important;
    }

    &-bold {
      font-weight: 700 !important;
    }

    &-link {
      font-weight: 700 !important;
    }
  }

  &-xxs {
    font-weight: 500 !important;
    font-size: 12px !important;
    letter-spacing: -0.06px !important;
    line-height: 1.3333333333333333 !important;

    &-light {
      font-weight: 300 !important;
    }

    &-bold {
      font-weight: 700 !important;
    }

    &-link {
      font-weight: 700 !important;
    }
  }
}
</style>