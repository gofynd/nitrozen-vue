<template>
    <div class="custom-scrollbar" ref="scrollContainer" @scroll="handleScroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Scrollbar",
    methods: {
      handleScroll() {
      },
    },
  };
  </script>
  
  <style>
  .custom-scrollbar {
    height: 300px;
    width: 100px;
    overflow: auto;
    scrollbar-width: thin; 
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
    border-radius: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.65);
  }
  </style>
  