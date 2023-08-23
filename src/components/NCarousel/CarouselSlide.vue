<template>
    <div class="carousel-slide">
      <img :src="image" :alt="alt" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      alt: String,
    },
  };
  </script>
  
  <style scoped lang="less">
  .carousel-slide {
    width: 100%;
    flex-shrink: 0;
    justify-content: center;
  }
  </style>
  