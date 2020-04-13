<template>
  <transition>
    <div
      :id="id"
      v-clickOutside="closeMenu"
      class="nitrozen-menu-content"
      @click="toggleMenu = !toggleMenu"
    >
      <nitrozen-inline v-bind:class="{ vertical: mode == 'vertical' }" :icon="'dots'"></nitrozen-inline>
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
import clickOutside from "./../../directives/NClickOutside";
import NitrozenInline from "../NInline";
export default {
  name: "nitrozen-menu",
  directives: {
    clickOutside
  },
  components: {
    "nitrozen-inline": NitrozenInline
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu" + NitrozenUuid()
    },
    mode:{
      type: String,
      default: () => "horizontal"

    }
  },
  data() {
    return {
      toggleMenu: false
    };
  },
  methods: {
    closeMenu() {
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
  .vertical{
    transform: rotate(90deg);
    position: relative;
    left: 190px;
  }
  ul {
    width: 200px;
    height: auto;
    max-height: 150px;
    overflow-y: auto;
    background-color: @WhiteColor;
    font-family: @PrimaryFont;
    list-style: none;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    padding-left: 0px;
    margin-top: 2em;
    border-radius: 2px;

    .nitrozen-scrollbar;
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