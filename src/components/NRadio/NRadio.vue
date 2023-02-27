<template>
  <div class="n-radio-group">
    <div v-if="showIcon" class="n-radio-icon" :data-testid="`${id}-icon`">
      <slot name="icon" />
    </div>
    <input
      class="n-radio-input"
      :id="id"
      type="radio"
      @input="changeEvent($event, 'input')"
      @change="changeEvent($event, 'change')"
      :checked="value === radioValue"
      :value="radioValue"
      :name="name"
      :disabled="disabled"
      :style="inputStyle"
    />
    <label :for="id" :style="labelStyle" class="n-radio-label">
      <slot />
    </label>
    <n-validation
      :data-testid="id"
      v-if="state !== 'default'"
      :class="'n-radio-validation'"
      :validationState="state"
      :label="stateMessage"
      :isHidden="state === null"
    />
  </div>
</template>
<script>
import NValidation from "../NValidation";
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "n-radio",
  components: {
    "n-validation": NValidation,
  },
  event: "change",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    radioValue: {
      type: [String, Number],
      default: "",
    },
    id: {
      type: [Number, String],
      default: () => "n-radio" + NitrozenUuid(),
    },
    name: {
      type: [Number, String],
      required: true,
      default: () => "n-radio-name",
    },
    value: {},
    state: {
      type: String,
      default: "default",
    },
    stateMessage: {
      type: String,
      default: "",
    },
    labelStyle: {
      type: Object,
      default: null,
    },
    inputStyle: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },
  methods: {
    changeEvent: function (event, type) {
      this.$emit(type, this.radioValue);
    },
  },
};
</script>
<style lang="less">
@import "./NRadio.less";
</style>
