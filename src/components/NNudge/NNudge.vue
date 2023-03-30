<template>
 <div class="nudge-outer" :class="{...classes}">
    <div class="nudge-container" :id="index" :class="{ active: nudgeCount.active }" v-for="(nudgeCount, index) in nudgeList" :key="index">
    <div class="nudge-head">
        <div class="left">
          <slot name="left"></slot>
          <div class="head-text">
              <div class="heading" v-if="heading">{{ heading }}</div>
              <div class="support-text" v-if="supportText">{{ supportText }}</div>
          </div>
        </div>
        <slot name="right"></slot>
    </div>
    <div class="cta">
      <nitrozen-button class="cta2" @click="$emit('cta2-action')" v-if="cta2">{{ cta2 }}</nitrozen-button>
      <nitrozen-button class="cta1" @click="$emit('cta1-action')" v-if="cta1">{{ cta1 }}</nitrozen-button>
    </div>
  </div>
  </div>
</template>

<script>
import NitrozenButton from './../NBtn';
export default {
  name: 'nitrozen-nudge',
  components: {
    NitrozenButton,
  },
  props: {
    leftImg: String,
    rightImg: String,
    cta1: String,
    cta2: String,
    heading: String,
    supportText: String,
    duration: {
      type: Number,
      default: 7000, // miliseconds
    },
    position: {
      type: String,
      default: "top-right"
    }
  },
  data() {
    return {
      active: false,
      nudgeList: [],
      totalNudge: 1,
    };
  },
  computed: {
    classes() {
      return {
        "top-right": this.position == "top-right",
        "top-bottom": this.position == "top-bottom",
      }
    }
  },
  methods: {
    open() {
      let top = 25 + this.nudgeList.length * 200;
      this.nudgeList.push({
        active: false,
        id: this.totalNudge++,
        top: top,
        right: 25,
      });
      setTimeout(() => {
        this.nudgeList[this.nudgeList.length - 1].active = true;
      },100)
      // setTimeout(() => {
      //   this.close();
      // }, this.duration);
    },
    close() {
      if (this.nudgeList.length > 0) {
        const firstNudgeIndex = 0;
          this.nudgeList[firstNudgeIndex].active = false;
        this.$nextTick(() => {
          this.nudgeList.shift();
        })
      }
    },
  },
};
</script>

<style lang="less">
@import './NNudge.less';
</style>
