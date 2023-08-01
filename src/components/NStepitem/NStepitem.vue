<template>
    <div class="step-item">
      <div class="step-header">
        <span class="step-number">{{ stepNumber }}</span>
        <h3 class="step-title">{{ title }}</h3>
      </div>
      <div class="step-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'nitrozen-stepitem',
    props: {
      stepNumber: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .step-item {
    margin-bottom: 20px;
    display: inline-block; /* Display items side by side */
    vertical-align: top; /* Align items from the top */
    width: 33.33%; /* Adjust the width based on the number of steps */
    box-sizing: border-box; /* Include padding and border in the width */
  }
  
  .step-header {
    display: flex;
    align-items: center;
    flex-direction: column; /* Place items vertically */
    justify-content: center;
  }
  
  .step-number {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #007bff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .step-title {
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
  
  .step-content {
    margin-top: 10px;
    text-align: center;
  }
  </style>
  