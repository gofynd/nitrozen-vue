<template>
    <div :style="spacingStyle">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpacingUtility",
    props: {
      all: {
        type: String,
        default: "",
      },
      horizontal: {
        type: String,
        default: "",
      },
      vertical: {
        type: String,
        default: "",
      },
      top: {
        type: String,
        default: "",
      },
      bottom: {
        type: String,
        default: "",
      },
      left: {
        type: String,
        default: "",
      },
      right: {
        type: String,
        default: "",
      },
    },
    computed: {
      spacingStyle() {
        return {
          padding: this.all,
          paddingLeft: this.horizontal || this.left,
          paddingRight: this.horizontal || this.right,
          paddingTop: this.vertical || this.top,
          paddingBottom: this.vertical || this.bottom,
        };
      },
    },
  };
  </script>
  