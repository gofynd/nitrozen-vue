<template>
    <div :style="containerStyle">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name:'FlexBox',
    props: {
      direction: {
        type: String,
        default: "row", 
      },
      justifyContent: {
        type: String,
        default: "flex-start", 
      },
      alignItems: {
        type: String,
        default: "stretch", 
      },
    },
    computed: {
      containerStyle() {
        return {
          display: "flex",
          flexDirection: this.direction,
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
        };
      },
    },
  };
  </script>
  