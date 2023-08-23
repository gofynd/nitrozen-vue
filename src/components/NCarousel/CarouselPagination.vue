<template>
    <div :class="{ 'pagination-indicator': true, active: isActive }" @click="goToSlide(index)"></div>
  </template>
  
  <script>
  export default {
    name: "carousel-pagination",
    props: {
      isActive: Boolean,
      index: Number,
      goToSlide: Function,
    },
  };
  </script>
  
  <style scoped>
  .pagination-indicator {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .active {
    background-color:lightskyblue;
  }
  </style>
  