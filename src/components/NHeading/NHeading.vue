<template>
  <component :is="tag" :style="customStyle" :class="sizeClass" v-bind="$attrs" v-on="$listeners">
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
      // Compute the size class based on the "size" prop
      return this.size ? `size-${this.size.toLowerCase()}` : '';
    },
  },
};
</script>



<style lang="less">

.size-l{
  font-size: 40px;
  letter-spacing: -1.44px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  @media (min-width: 992px) {

    font-size: 64px;

letter-spacing: -1.92px !important;

}
}
.size-m{
  font-size: 40px;
  letter-spacing: -1.44px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}
.size-s{
  font-size: 32px;
  letter-spacing: -0.72px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}
.size-xs{
  font-size: 24px;
  letter-spacing: -0.72px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}
.size-base{
  font-size: 20px;
  letter-spacing: -0.72px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}
</style>