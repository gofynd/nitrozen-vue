<template>
  <div :id="id" class="nitrozen-tab-container">
    <ul class="nitrozen-tab" ref="tabsContainer">
      <nitrozen-tab-item
        :icon="tabIcon[index]"
        @click="selectTab(index, item)"
        :class="{ 'nitrozen-tab-active': activeTab == index , 'inactive-tab': activeTab !== index}"
        v-for="(item, index) in tabItem"
        :key="index"
      >{{ item[label] || item }}</nitrozen-tab-item>
      <div v-if="showBottomBar" class="bottom-bar" :style="activeTabStyle"></div>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "./../../base/base.less";
.nitrozen-tab-container {
  display: flex;
  width: 100%;
  transition: background-color var(@TransitionsEaseQuick);

  .nitrozen-tab {
    position: relative;
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
    transition: transform 0.3s ease;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .bottom-bar {
  position: absolute;
  bottom: 0;
  height: 3px; 
  background-color: @ColorPrimary50;
  transition: @TransitionsDurationRapid; 
  z-index: 1;
}

.inactive-tab {
  color: grey; /* Set the text color to grey for inactive tabs */
}
}
.nitrozen-tab-item:hover:not(.nitrozen-tab-active) {
  color: black; 
}

.nitrozen-tab-active{
  color: black; 
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
    tabIcon:{
      type:Array,
      default: () => [],
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
      activeTab: this.activeIndex,
      currentOffset: 0,
      showBottomBar: true,
      activeTabElement: null
    };
  },
  mounted() {
    this.updateActiveTabStyle();
  },
  watch: {
  tabItem: {
    immediate: true,
    handler(newVal) {
      this.$nextTick(() => {
        this.showBottomBar = newVal && newVal.length > 0;
        this.updateActiveTabStyle();
      });
    },
  },
},
  computed: {
    activeTabStyle() {
    if (this.activeTabElement) {
      const activeTabElement = this.$refs.tabsContainer.children[this.activeTab];
      const activeTabRect = activeTabElement.getBoundingClientRect();
      const transformX = activeTabRect.left - this.$refs.tabsContainer.getBoundingClientRect().left;
      const width = activeTabRect.width;
      return {
        transform: `translateX(${transformX}px)`,
        width: `${width}px`
      };
    }

    return {
      display: 'none'
    };
    },
 
  },
  methods: {
    selectTab: function(index, item) {
      let obj = {
        index: index,
        item: item
      };
      this.activeTab = index;
      this.$emit("tab-change", obj);
      this.currentOffset = index * -100;
      this.showBottomBar=true;
      this.updateActiveTabStyle();
    },
    updateActiveTabStyle() {
      if (this.$refs.tabsContainer && this.$refs.tabsContainer.children.length > 0) {
        this.activeTabElement = this.$refs.tabsContainer.children[this.activeTab];
      }
    },
  }
};
</script>