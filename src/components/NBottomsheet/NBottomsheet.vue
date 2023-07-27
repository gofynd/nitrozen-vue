<template>
    
      <div v-if="show" class="bottom-sheet-overlay" @click="onClose">
        <transition name="bottom-sheet">
        <div class="bottom-sheet-content" @click.stop>
            <button class="bottom-sheet-close" @click="onClose"><nitrozen-icon  name="close" size="24"></nitrozen-icon></button>
          <div class="bottom-sheet-header">
            <h3 v-if="title">{{ title }}</h3>
          <p v-if="description">{{ description }}</p>
          </div>
          <div class="bottom-sheet-inner-content">
            <slot></slot>
          </div>
        </div>
    </transition>

      </div>
  </template>
  
  <script>
 import NIcon from '../NIcon/NIcon.vue';
 export default {
    name: 'nitrozen-bottomsheet',
    components: {
    'nitrozen-icon': NIcon,
  },
    props: {
      title: String,
      description: String,
      close: Boolean,
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      open() {
        this.show = true;
      },
      onClose() {
        this.show = false;
      },
    },
  };
  </script>
  
  <style>
.bottom-sheet-overlay {

position: fixed;

top: 0;

left: 0;

right: 0;

bottom: 0;

background-color: rgba(0, 0, 0, 0.5);

display: flex;

justify-content: center;

align-items: flex-end;

z-index: 9999;

}
.bottom-sheet-content {

background-color: #fff;

border-radius: 24px 24px 0 0;

padding: 40px 24px 24px 24px;

width: 100%;

position: absolute;

max-width: 360px;

right: 0;

bottom: 0;

margin-right: 60px;

@media only screen and (max-width: 767px)  {

  max-width:100%;

  width:100%;

  margin-right: 0px;

}

}

.bottom-sheet-header {

text-align: left;

margin-bottom: 10px;

}



.bottom-sheet-inner-content {

margin-bottom: 20px;

}



.bottom-sheet-actions {

display: flex;

justify-content: flex-end;

}



.bottom-sheet-enter-active, .bottom-sheet-leave-active {

transition: opacity 0.3s, transform 0.3s;

}



.bottom-sheet-enter, .bottom-sheet-leave-to {

opacity: 0;

transform: translateY(100%);

}




.bottom-sheet-close{

position: absolute;

right: 0;

top: 0;

height: 48px;

margin-top: 24px;

margin-right: 16px;

padding: 12px;

border: none;

background: transparent;

}




.bottom-sheet-close:hover{

border-radius: 24px;

background-color: #e7ebf8;

cursor: pointer;

padding: 12px;

}
  </style>
  