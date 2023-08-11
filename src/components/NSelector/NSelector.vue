<template>
  <div class="button-group-container">
    <div class="radio-group">
      <label
        v-for="(button, index) in buttons"
        :key="index"
        :for="'radio-' + index"
        :class="{'radio-button': true, 'selected': selectedIndex === index}"
      >
        <input
          type="radio"
          :id="'radio-' + index"
          :value="index"
          @change="selectButton(index)"
        />
        {{ button.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nitrozen-selector',
  props:['buttons'],
  components: {},
  data() {
    return {
      //Default selector
      selectedIndex: 1,
    };
  },
  methods: {
    selectButton(index) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null; // Deselect the button if it's already selected
    } else {
      this.selectedIndex = index; // Otherwise, set the selected button index
    }
  },
  
  },
};
</script>

<style lang="less">
@import './NSelector.less';
</style>


