<template>
  <div
    class="scrollbar-container"
    :class="{ 'hover-scroll': hover }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="content-wrapper" ref="contentWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scrollbar",
  props: {
    hover: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleMouseEnter() {
      if (this.hover) {
        this.$refs.contentWrapper.style.overflowY = "scroll";
      }
    },
    handleMouseLeave() {
      if (this.hover) {
        this.$refs.contentWrapper.style.overflowY = "hidden";
        this.$refs.contentWrapper.scrollTop = 0;
      }
    },
  },
};
</script>

<style>
.scrollbar-container {
  height: 300px;
  width: 100px;
  overflow: hidden;
  position: relative;
}

.content-wrapper {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

.hover-scroll .content-wrapper::-webkit-scrollbar {
  width: 8px;
}

.hover-scroll .content-wrapper::-webkit-scrollbar-thumb {
  background: #b5b5b5;
  border-radius: 4px;
}

.hover-scroll .content-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.65);
}
</style>
