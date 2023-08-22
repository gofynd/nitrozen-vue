<template>
    <div>
      <div>
        <slot name="title" />
      </div>
      <div>
        <transition
          name="expand"
          @enter="enter"
          @afterEnter="afterEnter"
          @leave="leave"
        >
          <slot name="content" />
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : "nitrozen-accordion",
    methods: {
      afterEnter(element) {
        element.style.height = "auto";
      },
  
      enter(element) {
        const height = element.scrollHeight;
  
        element.style.height = 0;
  
        setTimeout(() => {
          element.style.height = height + "px";
        });
      },
  
      leave(element) {
        const height = element.scrollHeight;
  
        element.style.height = height + "px";
  
        setTimeout(() => {
          element.style.height = 0;
          element.style.marginBottom = 0;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .expand-enter-active,
  .expand-leave-active {
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }
  </style>
  