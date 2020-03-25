<template>
  <transition>
    <div :id="id" v-clickOutside="closeMenu" class="nitrozen-menu-content" @click="toggleMenu = !toggleMenu">
      <nitrozen-inline :icon="'dots'"></nitrozen-inline>
      <transition name="fade">
        <ul v-if="toggleMenu">
          <slot />
          <!-- <li v-for="(item, index) in menuItem" :key="index">{{item.text}}</li> -->
        </ul>
      </transition>
    </div>
  </transition>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";
import clickOutside from "./../../directives/NClickOutside"

export default {
  name: "nitrozen-menu",
  directives: {
    clickOutside
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu" + NitrozenUuid()
    }
  },
  data() {
    return {
      toggleMenu: false
    };
  },
  methods: {
    closeMenu(){
      this.toggleMenu = false;
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-menu-content {
  display: flex;
  justify-content: space-between;
  color: @TypographyPrimaryColor;
  position: relative;
  cursor: pointer;
  ul {
    width: 200px;
    height: auto;
    max-height: 150px;
    overflow-y: scroll;
    background-color: @WhiteColor;
    font-family: @PrimaryFont;
    list-style: none;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    padding-left: 0px;
    margin-top: 2em;
    border-radius: 2px;
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: @WhiteColor;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: @TypographyPrimaryColor;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>