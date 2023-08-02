<template>
    <div class="custom-spinner">
      <!-- Customize the spinner appearance with CSS -->
      <div class="spinner" :class="[addClass]"></div>
    </div>
  </template>
 
<script>
  export default {
    name: 'nitrozen-spinner',
    props: {
        size: {
            type: String,
            default: 'medium'
        },
    },
    computed: {
        addClass() {
        let className = "";
        switch (this.size) {
            case "small":
            className = " nitrozen-spinner-small";
            break;
            case "medium":
            className = " nitrozen-spinner-medium";
            break;
            case "large":
            className = " nitrozen-spinner-large";
            break;
            default:
            className = " nitrozen-spinner-medium";
            break;
        }
        return className;
        },
    }
  };
  </script>
  
  <style lang="less">
    @import './NSpinner.less';
  </style>