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
      // Compute the size class based on the "size" prop
      return this.size ? `size-${this.size.toLowerCase()}` : '';
    },
  },
};
</script>
  
<style lang="less">
.size-body-xs, .size-span
{
  font-weight: 500 ;

  font-size:14px;

  letter-spacing: -0.06px ;

  line-height: 1.3333333333333333 ;
}

.size-body-xxs, .size-span
{
  font-weight: 500 ;

  font-size:12px;

  letter-spacing: -0.06px ;

  line-height: 1.3333333333333333 ;
}

.size-strong {
  font-weight: 700 ;

font-size: 12px;

letter-spacing: -0.06px ;

line-height: 1.3333333333333333 ;
}

</style>