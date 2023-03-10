<template>
  <div :class="['n-toggle-container', className]">
    <div
      v-if="showIcon"
      :class="['n-toggle-icon', `social-icon-${size}`]"
      :data-testid="`${id}-icon`"
    >
      <slot name="icon" />
    </div>

    <label :for="id" :class="{ 'n-switch': true, [size]: true }">
      <input
        :id="id"
        :data-testid="`${id}-input`"
        type="checkbox"
        @change="onChange"
        :checked="toggleValue"
        :value="toggleValue"
        :disabled="disabled"
        :name="name"
        :class="['n-toggle-input', className]"
        :style="inputStyle"
      />
      <span
        :class="{
          'n-slider n-round': true,
          'n-disabled': disabled,
          'success-state': state == 'success',
          'warning-state': state == 'warning',
          'error-state': state == 'error',
          checked: toggleValue,
        }"
      >
        <div
          :class="{
            'slider-ball': true,
            checked: toggleValue,
          }"
        ></div>
      </span>
      <span
        :class="{
          'label-text': true,
          'n-disabled': disabled,
          checked: toggleValue,
        }"
      >
        <slot />
      </span>
      <n-validation
        :data-testid="id"
        v-if="state !== 'default'"
        :class="'n-toggle-validation'"
        :validationState="state"
        :label="stateMessage"
        :isHidden="state === null"
      />
    </label>
  </div>
</template>
  
<script>
import NValidation from "../NValidation";
import NUuid from "./../../utils/NUuid";

export default {
  name: "n-toggle-button",
  props: {
    id: { type: String, required: true, default: `n-toggle-${NUuid()}` },
    showIcon: { type: Boolean, default: false },
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
    disabled: { type: Boolean, default: false },
    className: { type: String, default: "" },
    name: { type: String, default: "" },
    state: {
      type: String,
      default: "",
      validator(value) {
        return ["success", "error", "warning", "default"].includes(value);
      },
    },
    stateMessage: { type: String, default: "" },
    inputStyle: {},
    labelStyle: {},
  },
  components: {
    "n-validation": NValidation,
  },
  event: "change",
  methods: {
    onChange: function (event) {
      this.toggleValue = !this.toggleValue;
      this.$emit("input", event.target.checked);
      this.$emit("change", event);
    },
  },
  data() {
    return {
      toggleValue: this.value,
    };
  },
};
</script>
<style lang="less">
@import "./NToggleBtn.less";
</style>
  