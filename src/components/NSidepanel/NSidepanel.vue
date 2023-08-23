<template>
  <div v-if="isOpen">
      <div class="side-panel-backdrop" @click="emitCloseEvent"></div>
      <div class="side-panel-container" :class="['side-panel', className, {'side-panel-right': direction === 'right'}]">
      <div class="side-panel-header">
        <div class="side-panel-header-content">
          <nitrozen-icon v-if="icon" :name="icon" color="#000000" size="32"></nitrozen-icon>
          <div class="side-panel-header-text">{{ header }}</div>
        </div>
        <button class="side-panel-close" @click="emitCloseEvent"><nitrozen-icon  name="close" :size="24"></nitrozen-icon></button>
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
      icon: {
      type: String,
      default: "",
    },
    },
    data() {
      return {
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
  
<style lang="less">
@import '../../../src/base/variable.less';
.side-panel{
  &-backdrop{
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 60;
        position: fixed;
        background-color: @ColorPrimaryGrey80;
      }

      &-container{
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

      &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: @WhiteColor;
        color: @ColorPrimary50;
        padding: 12px 24px;
        height: 4em;

            &-content{
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          &-text{
            font-size: 18px;
            margin-left: 12px;
          }
      }

      &-right {
        right: 0;
        left: unset;
      }

      &-content {
        padding:24px;
        font-size: 16px;
      }

      &-close{
    position: absolute;
    right: 0;
    top: 0;
    height: 48px;
    margin-top: 8px;
    margin-right: 16px;
    padding: 12px;
    border: none;
    background: transparent;

        &:hover{
            background-color: @ColorPrimaryGrey20;
        }
      }


}

</style>
  