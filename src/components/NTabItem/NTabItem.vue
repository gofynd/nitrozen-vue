<template>
  <li class="nitrozen-tab-item" v-on="$listeners">
    <div class="icon-container">
      <img v-if = "icon" :src="icon" alt="Icon">
    </div>
    <div class="text-container">
      <slot />
    </div>
  </li>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";

export default {
  name: "nitrozen-tab-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab-item" + NitrozenUuid()
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="less" scoped>
@import "./../../base/base.less";
.nitrozen-tab-item {
  display: flex;
  justify-content: center;
  color: @TypographyPrimaryColor;
  font-family: @PrimaryFont;
  cursor: pointer;
  padding: @SpacingS;
  font-size: 18px;
  font-weight: 500;
}
.icon-container img {
  width: @SpacingM;
  height:  @SpacingM;
  margin-right: @SpacingXs;
}
.text-container{
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
