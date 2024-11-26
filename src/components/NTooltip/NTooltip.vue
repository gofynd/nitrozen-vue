<template>
  <div class="nitrozen-tooltip">
    <nitrozen-inline :icon="icon"></nitrozen-inline>
    <span class="nitrozen-tooltiptext" v-bind:class="tooltipPositionClass">
      <template v-if="tooltipText">{{tooltipText}}</template>
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
    position: {
      type: String,
      default: "bottom"
    },
    tooltipText: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "tooltip"
    }
  },
  computed: {
    tooltipPositionClass: function() {
      return {
        "nitrozen-tooltip-top": this.position == "top",
        "nitrozen-tooltip-right": this.position == "right",
        "nitrozen-tooltip-left": this.position == "left",
        "nitrozen-tooltip-bottom": this.position == "bottom"
      };
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .nitrozen-tooltiptext {
    visibility: hidden;
    min-width: 150px;
    color: @WhiteColor;
    text-align: center;
    border-radius: 6px;
    font-family: @PrimaryFont;
    position: absolute;
    font-size: @BaseFontSize;
    background-color: @Gray1;
    padding: 10px;
    z-index: 1000; /* Make sure the tooltip is above other elements */
    line-height: 19px;
    font-weight: 400;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease-in-out; 

    & a{
      color: @WhiteColor;
        text-decoration: underline;
        margin-top: 4px;
        font-size: 11px;
        font-weight: 400;
    }

    &::after {
      content: " ";
      position: absolute;
      border-style: solid;
      border-width: 6px;
      border-color: @Gray1 transparent transparent transparent;
    }
  }

  &:hover {
    .nitrozen-tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
}

/* Position the nitrozen-tooltip */
.nitrozen-tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  &::after {
    bottom: 100%; /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    transform: rotate(180deg);
  }
}

.nitrozen-tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  &::after {
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    transform: translateX(-50%) rotate(0deg)
  }
}

.nitrozen-tooltip-left {
  top: 50% ;
  right: 105%;
  transform: translateY(-50%);
  margin-right: 10px; 
  &::after {
    top: 50%;
    left: 100%; /* To the left of the tooltip */
    transform: rotate(270deg);
    transform: translateY(-50%) rotate(270deg); 
  }
}

.nitrozen-tooltip-right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 10px; 
  &::after {
    top: 50%;
    right: 100%; /* To the right of the tooltip */;
    transform: translateY(-50%) rotate(90deg); /* Pointing right */
  }
}
</style>
