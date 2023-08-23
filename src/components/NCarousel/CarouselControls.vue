<template>
    <div class="carousel-controls">
      <button @click="prevSlide" class="prev-btn btn"> <img src="./../../assets/jds-icons/angle-left-primary-icon.svg" alt="Previous" /></button>
      <button @click="nextSlide" class="next-btn btn"> <img src="./../../assets/jds-icons/angle-right-primary-icon.svg" alt="Next" /></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      prevText: String,
      nextText: String,
      prevSlide: Function,
      nextSlide: Function,
    },
  };
  </script>
  
  <style scoped lang="less">
  
  .btn {
    position: absolute;
    top: 50%;
    width: auto;
    z-index: 10;
    transform: translate(0%, -50%);
    background-color: transparent;
    padding: unset;
    cursor: pointer;
    
    
    @media screen and (max-width:768px) {
      display: none;
    }
  }
  .next-btn {
    right: 16px;
    background: rgba(255,255,255,.6588235294) center no-repeat;
    right: 0px ;
    outline: none;
    width: 48px;
    height: 48px;
    border-width: 1px;
    min-height: 3em;
    border-radius: 50px;
    border-style: solid;
    border-color: #e0e0e0;
    margin-right: 24px;
  }
  .prev-btn {
    left: 16px;
    background: rgba(255,255,255,.6588235294) center no-repeat;
    left: 0px;
    outline: none;
    width: 48px;
    height: 48px;
    border-width: 1px;
    min-height: 3em;
    border-radius: 50px;
    border-style: solid;
    border-color: #e0e0e0;
    margin-left: 24px;
  }
  </style>
  