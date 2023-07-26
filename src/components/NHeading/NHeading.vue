<template>
  <component :is="tag" :style="customStyle" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </component>
</template>
  
<script>
export default {
  name: "Heading",
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
@HeadingXXS: 16px;

@HeadingBase: 20px;

@HeadingXS: 24px;

@HeadingS: 32px;

@HeadingM: 40px;

@HeadingL: 64px;

@HeadingXL: 88px;



h1, .h1 {

    font-weight: 900 !important;

    font-size: @HeadingM !important;

    letter-spacing: -1.44px !important;

    line-height: 1 !important;




    @media (min-width: 992px) {

        font-size: @HeadingL !important;

        letter-spacing: -1.92px !important;

    }

}




h2, .h2 {

    font-weight: 900 !important;

    font-size: @HeadingM !important;

    letter-spacing: -1.2px !important;

    line-height: 1 !important;  

}




h3, .h3 {

    font-weight: 900 !important;

    font-size: @HeadingS !important;

    letter-spacing: -0.96px !important;

    line-height: 1 !important;

}




h4, .h4 {

    font-weight: 900 !important;

    font-size: @HeadingXS !important;

    letter-spacing: -0.72px !important;

    line-height: 1 !important;

}




h5, .h5 {

    font-weight: 900 !important;

    font-size: @HeadingBase !important;

    letter-spacing: -0.62px !important;

    line-height: 1 !important;

}




h6, .h6 {

    font-weight: 900 !important;

    font-size: @HeadingXXS !important;

    letter-spacing: -0.48px !important;

    line-height: 1 !important;

}


</style>