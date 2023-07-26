<template>
  <div v-if="isOpen" :class="['side-panel', className, {'side-panel-right': direction === 'right'}]">
      <div class="side-panel-header">
        <div class="side-panel-header-prefix" @click="emitHeaderPrefixClickEvent">{{ headerPrefix }}</div>
        <div class="side-panel-header-text">{{ header }}</div>
        <div v-if="showClose" class="side-panel-close" @click="emitCloseEvent">×</div>
      </div>
      <div class="side-panel-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SidePanel',
    props: {
      header: String,
      showClose: Boolean,
      isOpen: Boolean,
      direction: String,
      disableTransition: Boolean,
      maxWidth: Boolean,
      className: String,
    },
    data() {
      return {
        headerPrefix: '◀',
      };
    },
    methods: {
    emitCloseEvent() {
      this.$emit('onClose');
    },
    emitHeaderPrefixClickEvent() {
      this.$emit('headerPrefixClickEvent');
    },
    },
  };
  </script>
  
  <style>
 .side-panel {
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 25.75rem; 
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  z-index: 9999;
}
.side-panel-right {
  right: 0;
  left: unset;
}
.side-panel-content {
  padding: 16px;
}
  </style>
  