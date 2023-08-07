<template>
    <div class="carousel">
      <div v-if="items.length > 4" class="prev-btn btn" @click="previousClicked">
        <img src="./../../assets/arrow-left.svg" alt="Previous" />
      </div>
      <div class="item-wrapper" ref="itemwrapper">
        <slot />
      </div>
      <div v-if="items.length > 4" class="next-btn btn" @click="nextClicked">
        <img src="./../../assets/arrow-right.svg" alt="Next" />
      </div>
    </div>
  </template>
  
  <style lang="less" scoped>
  .carousel {
    width: 100%;
    position: relative;
  
    .btn {
      position: absolute;
      top: 50%;
      width: auto;
      z-index: 10;
      transform: translate(0%, -50%);
      background-color: transparent;
      padding: unset;
      cursor: pointer;
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
    .next-btn {
      right: 1.6rem;
    }
    .prev-btn {
      left: 1.6rem;
    }
    .item-wrapper {
      padding-left: 0;
    }
  }
  </style>
  
  <script>
  import { animate, easeInOutQuad } from "../../animate.js";
  export default {
    name: "nitrozen-carousel",
    components: {},
    props: {
      items: {
        type: Array,
      },
    },
    methods: {
      previousClicked(event) {
        this.moveCarousel("LEFT");
      },
      nextClicked(event) {
        this.moveCarousel("RIGHT");
      },
      moveCarousel(direction) {
        let itemsLength = this.items.length;
        let totalWidth = this.$refs["itemwrapper"].scrollWidth;
  
        let singleItemScroll = totalWidth / itemsLength;
        let currentLeft = this.$refs["itemwrapper"].scrollLeft;
        let tobeScroll = singleItemScroll;
        switch (direction) {
          case "LEFT": {
            if (currentLeft - singleItemScroll < 0) {
              tobeScroll = currentLeft;
            }
            this.sideScroll(-tobeScroll);
            break;
          }
          case "RIGHT": {
            if (currentLeft + singleItemScroll > totalWidth) {
              tobeScroll = totalWidth - currentLeft;
            }
            this.sideScroll(tobeScroll);
            break;
          }
        }
      },
      sideScroll(rangeInPixels) {
        let element = this.$refs["itemwrapper"];
  
        if (element) {
          var sequenceObj = {};
          var seconds = 0.8;
          var startingScrollPosition = element.scrollLeft;
          sequenceObj.progress = (percentage) => {
            element.scroll(
              startingScrollPosition + easeInOutQuad(percentage) * rangeInPixels,
              0
            );
          };
          animate(sequenceObj, seconds);
        }
      },
    },
    mounted() {},
  };
  </script>
  