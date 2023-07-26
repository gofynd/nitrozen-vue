<template>
    <component :is="tag" :style="customStyle">
      <slot></slot>
    </component>
  </template>
  
  <script>
  export default {
    name: "ListBlock",
    props: {
      type: {
        type: String,
        default: "ul",
        validator: (value) => ["ul", "ol"].includes(value),
      },
      color: {
        type: String,
        default: "#222",
      },
      fontSize: {
        type: String,
        default: "",
      },
      listStyleType: {
        type: String,
        default: "none",
        validator: (value) => ["disc", "circle", "square", "none"].includes(value),
      },
    },
    computed: {
      tag() {
        return this.type;
      },
      customStyle() {
        return {
          color: this.color,
          fontSize: this.fontSize,
          listStyleType: this.listStyleType,
        };
      },
    },
  };
  </script>

<style lang="less">
ul, ol {
margin: 0;
padding: 0;
}
</style>
  