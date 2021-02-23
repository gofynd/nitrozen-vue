<template>
  <div class="nitrozen-error-visible">
    <slot />
  </div>
</template>

<script>
export default {
  name: "nitrozen-error"
};
</script>

<style lang="less">
@import "./../../base/base.less";
.nitrozen-error-visible {
  width: 100%;
  color: @ErrorColor;
  font-family: @PrimaryFont;
  font-size: @BaseFontSize;
  padding-top: 5px;
}
</style>
