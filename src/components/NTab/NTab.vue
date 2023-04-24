<template>
  <div :id="id" class="nitrozen-tab-container">
    <ul class="nitrozen-tab">
      <nitrozen-tab-item
        v-for="(item, index) in tabItem"
        :class="{ 'nitrozen-tab-active': activeTab == index }"
        :key="index"
        :icon="item.icon"
        @click="selectTab(index, item)"
      >
        {{ item.label }}
      </nitrozen-tab-item
      >
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "./../../base/base.less";
.nitrozen-tab-container {
  display: flex;
  width: 100%;
  .nitrozen-tab {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    justify-content: flex-start;
    background-color: @WhiteColor;
    overflow-x: scroll;
    -ms-overflow-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .nitrozen-tab-active{

    /deep/ .nitrozen-icon{
      opacity: 1 !important;
    }
  }
}
</style>

<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenTabItem from "./../NTabItem";
export default {
  name: "nitrozen-tab",
  components: {
    "nitrozen-tab-item": NitrozenTabItem
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab" + NitrozenUuid()
    },
    tabItem: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeTab: this.activeIndex
    };
  },
  methods: {
    selectTab: function(index, item) {
      let obj = {
        index: index,
        item: item
      };
      this.activeTab = index;
      this.$emit("tab-change", obj);
    }
  }
};
</script>
