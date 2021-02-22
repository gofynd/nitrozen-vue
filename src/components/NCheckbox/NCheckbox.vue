<template>
  <div>
    <label class="nitrozen-checkbox-container">
      <slot />
      <input
        :id="id"
        type="checkbox"
        @change="toggle"
        :value="checkboxValue || value"
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
    value: {
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
      if (Array.isArray(this.value)) {
        return this.value.includes(this.checkboxValue);
      }
      return this.checkboxValue
        ? this.checkboxValue === this.value
        : this.value;
    }
  },
  methods: {
    toggle: function(event) {
      let checkboxModel = this.value;
      if (Array.isArray(this.value)) {
        checkboxModel = [...this.value];
        let index = checkboxModel.indexOf(this.checkboxValue);
        if (index == -1) {
          checkboxModel.push(this.checkboxValue);
        } else {
          checkboxModel.splice(index, 1);
        }
        this.$emit("input", checkboxModel);
        this.$emit("change", checkboxModel);
      } else {
        this.$emit("change", event); // TODO: need to look into this, why we need?
        this.$emit("input", event.target.checked);
      }
    },
    toggleAll: function(items) {
		this.$emit("input", items);
        this.$emit("change", items);
    }
  }
};
</script>
<style lang="less">
@import "./NCheckbox.less";
</style>