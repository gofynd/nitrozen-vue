<template>
  <div>
    <label class="nitrozen-checkbox-container" :class="{'nitrozen-checkbox-container-disabled': disabled}">
      <slot />
      <input
        :id="id"
        type="checkbox"
        @change="toggle"
        :value="checkboxValue || modelValue"
        :checked="isSelected"
        :disabled="disabled"
      />
      <span :for="id" class="nitrozen-checkbox"></span>
    </label>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-checkbox",
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkboxValue: {
      type: [Number, Array, Object, Boolean, String],
      default: true
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-checkbox" + NitrozenUuid()
    }
  },
  event: "change",
  computed: {
    isSelected() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.checkboxValue);
      }
      return this.checkboxValue
        ? this.checkboxValue === this.modelValue
        : this.modelValue;
    }
  },
  methods: {
    toggle: function(event) {
      let checkboxModel = this.modelValue;
      if (Array.isArray(this.modelValue)) {
        checkboxModel = [...this.modelValue];
        let index = checkboxModel.indexOf(this.checkboxValue);
        if (index == -1) {
          checkboxModel.push(this.checkboxValue);
        } else {
          checkboxModel.splice(index, 1);
        }
        this.$emit("update:modelValue", checkboxModel);
        this.$emit("change", checkboxModel);
      } else {
        this.$emit("change", event); // TODO: need to look into this, why we need?
        this.$emit("update:modelValue", event.target.checked);
      }
    }
  }
};
</script>
<style lang="less">
@import "./NCheckbox.less";
</style>