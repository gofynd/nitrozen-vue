<template>
  <div v-if="isOpen">
      <div class="side-panel-backdrop"></div>
      <div class="side-panel-container" :class="['side-panel', className, {'side-panel-right': direction === 'right'}]">
      <div class="side-panel-header">
      <nitrozen-icon :name="profile" color="#fff" size="40"></nitrozen-icon>
        <!-- <div class="side-panel-header-prefix" @click="emitHeaderPrefixClickEvent">{{ headerPrefix }}</div> -->
        <div class="side-panel-header-text">{{ header }}</div>
        <div v-if="showClose" class="side-panel-close" @click="emitCloseEvent">×</div>
      </div>
      <div class="side-panel-content">
        <slot></slot>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import NIcon from '../NIcon/NIcon.vue';
  export default {
    name: 'nitrozen-sidepanel',
    components:{
      'nitrozen-icon': NIcon,
    },
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
  .side-panel-backdrop{
    top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 60;
        position: fixed;
        background-color: rgb(0,0,0,0.65);
  }

.side-panel-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 25.75rem; 
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  z-index: 9999;
  max-width: 41.5rem;
}
.side-panel-header{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #0F3CC9;
  color: #f5f5f5;
  padding: 10px 40px;
}

.side-panel-right {
  right: 0;
  left: unset;
}
.side-panel-content {
  padding:24px 40px;
  font-size: 16px;
}

.side-panel-header-text{
  font-size: 18px;
  margin-left: 12px;
}
.side-panel-close{
  cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 32px;
    padding: 12px;
    font-size: 24px;
}
.side-panel-close:hover{
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 6px 12px;
  color: #0a2885;
}
  </style>
  