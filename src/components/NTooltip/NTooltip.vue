<template>
  <div class="nitrozen-tooltip">
    <nitrozen-inline :icon="icon"></nitrozen-inline>
    <span class="nitrozen-tooltiptext" :class="tooltipPositionClass" :style="tooltipStyle">
      <template v-if="tooltipText" >
        <span>{{tooltipText}}</span>
        </template>
        <template v-if="link" >
        <br/>
        <a :href="link" class="nitrozen-tooltip-link">{{ tooltipLinkText }}</a>
      </template>
      <template v-else><slot/></template>
    </span>
  </div>
</template>

<script>
import NitrozenInline from "./../NInline";

export default {
  name: "nitrozen-tooltip",
  components: {
    "nitrozen-inline": NitrozenInline
  },
  props: {
    contentBgColor:{
      type: String,
      default: "#3d3d3d"
    },
    contentColor:{
      type: String,
      default: "#ffffff"
    },
    position: {
      type: String,
      default: "bottom"
    },
    tooltipText: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    tooltipLinkText: {
      type: String,
      default: ""
    },
    icon: {
      type: Element,
    }
  },
  computed: {
    tooltipPositionClass: function() {
      return `nitrozen-tooltip-${this.position}`;
    },
    tooltipStyle: function () {
      return {
        'background': this.contentBgColor,
        'color': this.contentColor,
        '--toolTipBgColor': this.contentBgColor
      }
    }
  }
};
</script>
<style lang="less">
@import "./../../base/base.less";
@import "./NTooltip.less";
</style>
