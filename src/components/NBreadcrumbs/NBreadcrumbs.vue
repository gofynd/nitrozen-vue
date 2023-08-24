<template>
    <nav class="breadcrumbs" aria-label="breadcrumb">
      <div class="breadcrumb-item" v-for="(crumb, index) in breadcrumbs" :key="index">
        <a :to="crumb.to" :style="getLabelStyle(crumb)">{{ crumb.label }}</a>
        <span v-if="index < breadcrumbs.length - 1" class="separator">{{ separator }}</span>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'nitrozen-breadcrumbs',
    props: {
      breadcrumbs: {
        type: Array,
        required: true,
      },
      separator: {
        type: String,
        default: '/',
      },
      labelStyle: {
        type: Object,
        default: () => ({
          color: 'blue',
          fontWeight: 'bold',
        }),
      },
    },
    methods: {
      getLabelStyle(crumb) {
        // Merge the default labelStyle with crumb-specific styles, if any
        return { ...this.labelStyle, ...crumb.style };
      },
    },
  };
  </script>
  
  <style>
  .breadcrumbs {
    display: flex; 
  }
  .breadcrumb-item {
    display: flex; 
    align-items: center; 
  }
  .separator {
    margin: 0 0.5rem; 
  }
  </style>
  