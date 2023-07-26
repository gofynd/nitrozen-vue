<template>
    <div class="grid-container" :style="gridStyles">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name:'Grid',
    props: {
      gap: {
        type: String,
        default: "30px",
      },
      template: {
        type: String,
        default: "1fr 1fr 1fr 1fr",
      },
      templateMobile: {
        type: String,
        default: "1fr",
      },
      templateTablet: {
        type: String,
        default: "1fr 1fr",
      },
    },
    computed: {
      gridStyles() {
        return {
          gridGap: this.gap,
          display: "grid",
          gridTemplateColumns: this.template,
        };
      },
    },
  };
  </script>
  
  <style>
  </style>
  