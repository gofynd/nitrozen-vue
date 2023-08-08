<template>
    <div>
      <template v-if="newTab">
        <!-- External link using a regular anchor tag with target="_blank" -->
        <a :href="href" target="_blank" @click="handleClick" :title="title" :class="kindClass">
          <slot></slot>
        </a>
      </template>
  
      <template v-else>
        <!-- Internal link using Vue Router's router-link component or a regular anchor tag based on provider prop -->
        <a v-if="provider" :href="href" :to="provider.to" :title="title" :class="kindClass">
          <slot></slot>
        </a>
        <a v-else :href="href" @click="handleClick" :title="title" :class="kindClass">
          <slot></slot>
        </a>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    name: 'nitrozen-link',
    props: {
      title: {
        type: String,
        default: "Click here",
      },
      href: {
        type: String,
        default: "",
      },
      newTab: {
        type: Boolean,
        default: false,
      },
      kind: {
        type: String,
        default: "default",
      },
      textAppearance: {
        type: String,
        default: "body-xs",
      },
      button: {
        type: Object,
        default: null,
      },
      provider: {
        type: Object,
        default: null,
      },
    },
    computed: {
      kindClass() {
        return this.kind === "rich-text" ? "rich-text" : "default";
      },
    },
    methods: {
      handleClick(event) {
        if (this.button && this.button.onClick) {
          // Handle the click event for button functionality
          // For example: eval(this.button.onClick);
        }
      },
    },
  };
  </script>
  
  <style lang="less">
  @import './NLink.less';
  </style>
  