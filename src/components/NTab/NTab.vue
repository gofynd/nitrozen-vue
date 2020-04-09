<template>
  <div :id="id" class="tab-container">
    <ul class="tab">
      <slot />
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "./../../base/base.less";
.tab-container {
  display: flex;
  .tab {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    background-color: @WhiteColor;
    overflow-x: scroll;
    -ms-overflow-style: none;
    padding: 0 24px;
    &::-webkit-scrollbar {
      display: none;
    }
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
