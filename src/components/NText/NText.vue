<template>
  <component :is="tag" :style="customStyle" v-bind="$attrs" v-on="$listeners">
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
  },
};
</script>
  
<style lang="less">
@TextBodyXXS: 12px;

p {

  font-weight: 500 !important;

  font-size: @TextBodyXXS !important;

  letter-spacing: -0.06px !important;

  line-height: 1.3333333333333333 !important;

}


b,
strong {

  font-weight: 700 !important;

  font-size: @TextBodyXXS !important;

  letter-spacing: -0.06px !important;

  line-height: 1.3333333333333333 !important;

}

span {
  font-weight: 500;
  font-size: @TextBodyXXS;
  letter-spacing: -0.06px;
  line-height: 1.3333333333333333;
}
</style>