<template>
  <div :style="containerStyle">
    <div v-if="isHorizontal" :style="horizontalDividerStyle"></div>
    <div v-else :style="verticalDividerStyle"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "nitrozen-divider",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    gap: {
      type: String,
      default: "8px",
    },
    color: {
      type: String,
      default: "#e0e0e0",
    },
  },
  computed: {
    isHorizontal() {
      return this.direction === "horizontal";
    },
    horizontalDividerStyle() {
      return {
        width: "100%",
        height: "1px",
        backgroundColor: this.color,
      };
    },
    verticalDividerStyle() {
      return {
        width: "1px",
        height: "312px",
        backgroundColor: this.color,
      };
    },
    containerStyle() {
      return {
        position: "relative",
        display: "flex",
        flexDirection: this.direction === "horizontal" ? "row" : "column",
        alignItems: "center",
      };
    },
  },
};
</script>

<style>

.container {
  position: relative;
}

.vertical-divider {
  position: absolute;
  top: 20px;
  left: 907px;
  gap: 8px;
}
</style>
