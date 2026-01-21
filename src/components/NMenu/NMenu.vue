<template>
  <transition>
    <div
      :id="id"
      class="nitrozen-menu-content"
      :class="{'nitrozen-default-menu': !inverted}"
      @click="toggleMenu = !toggleMenu"
    >
      <nitrozen-inline
        :class="{ 'nitrozen-menu-vertical-dots': mode == 'vertical' }"
        :icon="inverted ? 'white-dots' : 'dots'"
      ></nitrozen-inline>
      <transition name="fade">
        <ul
          v-if="toggleMenu"
          :class="{ 'nitrozen-menu-vertical-dropdown': mode == 'vertical','nitrozen-menu-top': position == 'top'  }"
        >
          <slot />
        </ul>
      </transition>
    </div>
  </transition>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenInline from "../NInline";
export default {
  name: "nitrozen-menu",
  components: {
    "nitrozen-inline": NitrozenInline,
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu" + NitrozenUuid(),
    },
    mode: {
      type: String,
      default: () => "horizontal",
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "bottom"
    },
  },
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggleMenu = false;
    },
  },
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-menu-content {
  height: 30px;
  display: flex;
  justify-content: space-between;
  color: @TypographyPrimaryColor;
  position: relative;
  cursor: pointer;
  .nitrozen-menu-vertical-dots {
    height: 30px;
    transform: rotate(90deg);
  }
  .nitrozen-menu-vertical-dropdown {
    z-index: 2;
    position: absolute;
    right: 20px;
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

    .nitrozen-menu-scrollbar;
  }
  .nitrozen-menu-top{
    bottom: 100%
  }
}
.nitrozen-default-menu{
  &:hover {
    background-color: @HoverColor;
    border-radius: 50%;
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
