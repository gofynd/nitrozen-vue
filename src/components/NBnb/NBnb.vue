<template>
  <nav class="bottom-nav">
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :aria-label="item['aria-label']"
      @click="handleItemClick(item)"
      :class="{ active: item.isActive }"
    >
      <div class="icon-wrapper">
        <div v-html="item.icon"></div>
      </div>
      <div v-if="item.title" class="title">{{ item.title }}</div>
    </a>
  </nav>
</template>

<script>
export default {
  name: "niotrozen-bottom-nav",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleItemClick(item) {
  this.items.forEach(navItem => {
    navItem.isActive = navItem === item;
  });
  
  if (!item.disabled && item.onClick) {
    item.onClick();
  }
},
  },
};
</script>

<style lang="less">
@import "../../../src/base/variable.less";

.bottom-nav {
  display: flex;
  justify-content: space-around;
  background-color: @GreyColor;
  padding: 16px 24px;
  gap: 24px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  left: 0;
  box-shadow: 0 4px 16px @Shadow;
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: @TypographySecondaryColor;
    &.active {
    .icon-wrapper {
      color: @DialogNegativeColor; 
    }
    .title {
      color: @BlackColor; 
    }
  }
    .icon-wrapper {
      width: 24px;
      height: 24px;
    }
    .title {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        letter-spacing: -0.06px;
        margin-top: 4px;
    }
  }
}
</style>
