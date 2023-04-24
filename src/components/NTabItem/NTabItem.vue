<template>
  <div class="nitrozen-item">
    <li
      class="nitrozen-tab-item"
      :class="className"
      :style="styles"
      v-on="$listeners"
    >
      <nitrozen-inline
        v-if="icon"
        :icon="icon"
        class="nitrozen-icon"
      ></nitrozen-inline>
      <span class="tab-item">
        <slot />
      </span>
    </li>
    <div class="active-bottom-line"></div>
  </div>
</template>

<script>
import NitrozenUuid from './../../utils/NUuid';
import NitrozenInline from './../NInline';

export default {
  name: 'nitrozen-tab-item',
  components: {
    'nitrozen-inline': NitrozenInline,
  },
  props: {
    id: {
      type: [Number, String],
      default: () => 'nitrozen-tab-item' + NitrozenUuid(),
    },
    icon: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="less" scoped>
@import "./../../base/base.less";
.nitrozen-item{
.nitrozen-tab-item {
  display: flex;
  justify-content: center;
  color: @ColorPrimaryGrey80;
  font-family: @PrimaryFont;
  cursor: pointer;
  margin-right: 24px;
  padding: 12px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  gap: 8px;
  align-items: center;
  width: 100%;

  .nitrozen-icon {
    height: unset;
    opacity: 0.65;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: @ColorPrimaryGrey100;
    opacity: 1;
    .nitrozen-icon {
      opacity: 1;
    }
  }

  &:active{
    color: @ColorPrimary60;
    opacity: 1;
    .nitrozen-icon {
      opacity: 1;
    }
  }

  &:focus{
    padding: 12px;
    border: 1px solid black;
    border-radius: 12px;

     .nitrozen-icon {
      opacity: 1;

      /deep/ svg{
        fill: red;
        height: 70px;
      }
    }
  }

}


}
.nitrozen-tab-active {
  display: flex;
  flex-direction: column;

  .nitrozen-tab-item{
    color: @ColorPrimaryGrey100;
  }

  .active-bottom-line{
    height: 4px;
    width: 100%;
    border-radius: 100px;
    background: @ColorPrimary50;
  }
}
</style>
