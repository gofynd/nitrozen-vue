<template>
  <div>
    <label class="nitrozen-container">
      <slot />
      <input :id="id" type="checkbox" @change="valueChange" :value="checkboxValue || value"  :checked="isSelected" :disabled="disabled" />
      <!-- <input :id="id" type="checkbox" v-model="checkboxModel" @change="valueChange" :value="checkboxValue" :disabled="disabled">         -->
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
  computed:{
    isSelected(){
       if (Array.isArray(this.value)) {
          return this.value.includes(this.checkboxValue);
       }
       return this.checkboxValue?this.checkboxValue===this.value:this.value;
    }
  },
  methods: {
    valueChange: function(event) {
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
        this.$emit("change", event);
        this.$emit("input", event.target.checked);
      }
    }
  }
};
</script>
<style lang="less">
@import './NCheckbox.less';
</style>