<template>
  <ul class="menu">
    <slot />
  </ul>
</template>

<style lang="less" scoped>
.menu {
  display: flex;
  list-style: none;
  justify-content: flex-start;
  background-color: white;
  overflow-x: scroll;
  -ms-overflow-style: none;
  padding: 0 24px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-tab",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab" + NitrozenUuid(),
    },
  },
};
</script>
