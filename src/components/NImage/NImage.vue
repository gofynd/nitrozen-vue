<template>
    <div :class="['image-container', aspectRatio, { 'rounded-corner': roundedCorner }]">
      <img
        :src="src"
        :alt="alt"
        :style="imageFocusStyle"
        @load="handleLoad"
        @error="handleError"
        @click="handleClick"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'nitrozen-image',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      aspectRatio: {
        type: String,
        default: '1:1',
      },
      roundedCorner: {
        type: Boolean,
        default: false,
      },
      imageFocus: {
        type: String,
        default: 'center',
        validator: (value) =>
          ['top', 'bottom', 'left', 'right', 'center'].includes(value),
      },
    },
    computed: {
      imageFocusStyle() {
        return {
          objectPosition: this.imageFocus,
        };
      },
    },
    methods: {
      handleLoad(event) {
        // Your onLoad logic here
        this.$emit('load', event);
      },
      handleError(event) {
        // Your onError logic here
        this.$emit('error', event);
      },
      handleClick(event) {
        // Your onClick logic here
        this.$emit('click', event);
      },
    },
  };
  </script>
  
  <style>
 .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .image-container.rounded-corner img {
    border-radius: 8px; /* Set your desired border radius */
  }
  </style>
  