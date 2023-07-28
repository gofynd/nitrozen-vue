<template>
    <nav class="bottom-nav">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.href"
        :aria-label="item['aria-label']"
        @click="handleItemClick(item)"
      >
        <div class="icon-wrapper">
          <div v-html="item.icon"></div>
        </div>
        <div class="title">{{ item.title }}</div>
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'BottomNav',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    methods: {
      handleItemClick(item) {
        if (!item.disabled && item.onClick) {
          item.onClick();
        }
      },
    },
  };
  </script>
  
  <style>
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  .bottom-nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;
  }
  
  .bottom-nav a .icon-wrapper {
    width: 24px;
    height: 24px;
  }
  
  .bottom-nav a .title {
    font-size: 12px;
    margin-top: 4px;
  }
  </style>
  