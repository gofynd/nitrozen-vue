<template>
  <component :is="tag"  :class="[sizeClass, colorClass]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </component>
</template>
  
<script>
export default {
  name: "nitrozen-text",
  props: {
    level: {
      type: String,
      default: "p",
      validator: (value) => ["p", "span", "b", "strong"].includes(value),
    },
    color: {
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
    sizeClass() {
      return this.size ? `size-${this.size.toLowerCase()}` : '';
    },
    colorClass() {
      return this.color ? `jm-fc-${this.color}` : '';
    },
  },
};
</script>
  
<style lang="less">
@import '../../base/jds.less';
.size-body {
  &-l {
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -0.12px;
    line-height: 1.3333333333333333;

    &-light {
      font-weight: 300;
    }

    &-bold {
      font-weight: 700;
    }

    &-link {
      font-weight: 700;
    }
  }

  &-m {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.09px;
    line-height: 1.3333333333333333;

    &-light {
      font-weight: 300;
    }

    &-bold {
      font-weight: 700;
    }

    &-link {
      font-weight: 700;
    }
  }

  &-s {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.08px;
    line-height: 1.5;

    &-light {
      font-weight: 300;
    }

    &-bold {
      font-weight: 700;
    }

    &-link {
      font-weight: 700;
    }
  }

  &-xs {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.07px;
    line-height: 1.4285714285714286;

    &-light {
      font-weight: 300;
    }

    &-bold {
      font-weight: 700;
    }

    &-link {
      font-weight: 700;
    }
  }

  &-xxs {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.06px;
    line-height: 1.3333333333333333;

    &-light {
      font-weight: 300;
    }

    &-bold {
      font-weight: 700;
    }

    &-link {
      font-weight: 700;
    }
  }
}

</style>