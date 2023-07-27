<template>
    <div class="n-progress-bar-main">
        <div class="bar" :style="{ width: progress + '%' }">
            <div class="determinate-tracker">
                <div class="background-tracker"></div>
                       
            </div>
        </div>
        <div class="initial-value">₹{{ inital_value }}
            <span class="determinate" >
            </span>
        </div>
        <div class="fixed-value" :style="{ width: progress + '%' }">₹{{ fixed_value }}
            <span class="determinate-fixed" >
            </span>
        </div>
        <div class="final-value">₹{{ final_value }}</div>
     </div>
</template>
  
  <script>
 
  export default {
    name: 'nitrozen-progressbar',
  
    props: {
      progress: {
        type: String,
        
      },
      inital_value: {
        type: String,
        
      },
      fixed_value: {
        type: String,
        
      },
      final_value: {
        type: String,
        
      },
    },
  };
  </script>
  
  <style lang="less">
  @import './NProgressBar.less';
  </style>
  