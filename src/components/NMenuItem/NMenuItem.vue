<template>
  <transition>
    <li class="nitrozen-menu-item" v-bind="$attrs">
      <slot />
    </li>
  </transition>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";

export default {
  name: "nitrozen-menu-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-menu-item" + NitrozenUuid()
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";
.nitrozen-menu-item {
  font-size: @BaseFontSize + 2;
  color: @TypographyPrimaryColor;
  padding: 12px;
  word-break: break-all;
  line-height: 21px;
  &:hover {
    background-color: @SecondaryColor;
    color: @WhiteColor;
  }
}
</style>