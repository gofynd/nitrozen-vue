<template>
  <div class="nitrozen-toggle-container">
    <label class="nitrozen-switch">
      <input
        type="checkbox"
        @change="change"
        :disabled="disabled"
        :checked="modelValue"
        :value="modelValue"
      />
      <span
        class="nitrozen-slider nitrozen-round"
        :class="{ 'nitrozen-disabled': disabled }"
      ></span>
    </label>
  </div>
</template>
<style lang="less">
@import "./NToggleBtn.less";
</style>
<script>
export default {
  name: "nitrozen-toggle-btn",
  // props: {
  //     curstate: {
  //         default: false,
  //         type: Boolean
  //     }
  // },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedState: this.modelValue
    };
  },
  methods: {
    change(event) {
      // console.log(this.modelValue,'selectedState',this.selectedState)
      this.$emit("update:modelValue", event.target.checked);
      this.$emit("change", event);
    }
  }
};
</script>
