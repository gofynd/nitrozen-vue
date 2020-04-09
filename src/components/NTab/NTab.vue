<template>
  <div :id="id" class="tab-container">
    <ul class="tab">
      {{activeTab}} 
      <nitrozen-tab-item @click="selectTab(index)" :class="{'active': activeTab == index}" v-for="(item, index) in tabItem" :key="index">{{item[label]}}</nitrozen-tab-item>
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
import NitrozenTabItem from "./../NTabItem";
export default {
  name: "nitrozen-tab",
  components: {
    'nitrozen-tab-item': NitrozenTabItem
  },
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab" + NitrozenUuid(),
    },
    tabItem: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      activeTab: this.activeIndex
    }
  },
  methods: {
    selectTab: function(index){
      this.activeTab = index;
    }
  }
};
</script>
