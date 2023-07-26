<template>
  <div>
    <div :style="dividerStyle"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "1px",
    },
    color: {
      type: String,
      default: "#e0e0e0",
    },
  },
  computed: {
    dividerStyle() {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.color,
      };
    },
  },
};
</script>

<style>

</style>