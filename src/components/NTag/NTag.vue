<template>
<span :class="['j-tag', { active: isActive, 'dark-blue-hover': kind === 'toggle' || kind === 'filter' }]"
     aria-label="tag-label"
     @click="handleClick">
    <span class="j-text">
        {{label}}
    </span>
    <i class="j-tag-icon" v-if="kind ==='filter'">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!isActive">
        <path d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z" fill="currentColor">
    </path>
</svg>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
    <path d="M13.41 12l6.3-6.29a1.004 1.004 0 00-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 10-1.42 1.42l6.3 6.29-6.3 6.29a.999.999 0 000 1.42 1 1 0 001.42 0l6.29-6.3 6.29 6.3a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095L13.41 12z" fill="currentColor">
</path>
</svg>
</i>
</span>
</template>

<style lang="less" scoped>
@import "./../../base/base.less";
.j-tag .j-tag-icon {
    width: @SpacingBase;
    box-sizing: content-box;
    line-height: 0;
    padding-left: @SpacingXxs;
}
.j-tag.active {
    color: @ColorSparkle80;
    background-color: @ColorSparkle20;
    border-color: @ColorSparkle20;
}

.j-tag {
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: @SpacingXl;
    border-radius: @RadiusLarge;
    padding: @SpacingXxs @SpacingS;
    color: @ColorPrimaryGrey100;
    background-color: rgba(0,0,0,0);
    border: 1px solid @ColorPrimaryGrey80;
    max-width: 100%;
    transition: var(--transitions-default);
}

.j-tag .j-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: @PrimaryFont;
}
.j-tag.dark-blue-hover:hover {
  background-color: @ColorSparkle30;
}

</style>

<script>
export default{
    name: "nitrozen-tag",
    props: {
        kind: {
        type: String,
        default: "normal"
      },
      label: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      active:{
        type: Boolean,
      }
    },
    data() {
    return {
        isActive: this.active,
    };
  },
  computed: {
    tagBackgroundColor() {
      if (this.kind === "toggle" || this.kind === "filter") {
        return this.isActive ? "@ColorSparkle20" : "white";
      } else {
        return this.isActive ? "@ColorSparkle20" : "";
      }
    },
  },
    methods: {
    handleClick() {
        if ((this.kind === "toggle" || this.kind === "filter") && !this.disabled) {
        this.isActive = !this.isActive;
      }
    },
}
}

</script>