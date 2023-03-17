<template>
  <div class="nitrozen-tooltip">
    <nitrozen-icon v-if="icon" :name="icon" :size="iconSize" class="nitrozen-tooltip-icon" :color="iconColor"/>
    <span class="nitrozen-tooltiptext" :class="tooltipPositionClass" :style="tooltipStyle">
      <template v-if="tooltipText">
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
import NIcon from './../NIcon/NIcon.vue';
export default {
  name: "nitrozen-tooltip",
  components: {
    'nitrozen-icon': NIcon,
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
      type: String,
      default:'twitter'
    },
    iconColor: {
      type: String,
      default:'#000000'
    },
    iconSize: {
      type: Number,
      default:26
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
