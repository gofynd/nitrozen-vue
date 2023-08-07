<template>
  <component :is="tag" :style="customStyle" :class="sizeClass" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </component>
</template>

  
<script>

export default {
  name: "nitrozen-heading",
  props: {
    level: {
      type: String,
      default: "h2",
      validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
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
.size-l {
  font-size: 40px;
  letter-spacing: -1.44px;
  line-height: 1;
  font-weight: 900;

  @media (min-width: 992px) {
    font-size: 64px;
    letter-spacing: -1.92px;
  }
}

.size-m {
  font-size: 40px;
  letter-spacing: -1.44px;
  line-height: 1;
  font-weight: 900;
}

.size-s {
  font-size: 32px;
  letter-spacing: -0.72px;
  line-height: 1;
  font-weight: 900;
}

.size-xs {
  font-size: 24px;
  letter-spacing: -0.72px;
  line-height: 1;
  font-weight: 900;
}

.size-base {
  font-size: 20px;
  letter-spacing: -0.72px;
  line-height: 1;
  font-weight: 900;
}

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