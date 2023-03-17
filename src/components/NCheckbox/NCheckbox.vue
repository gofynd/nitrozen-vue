<template>
  <label
    :data-testid="`${id}-label`"
    :for="id"
    :class="[
      'n-checkbox-container',
      { 'n-checkbox-container-disabled': disabled },
    ]"
    :style="labelStyle"
  >
    <input
      :id="id"
      :data-testid="`${id}-input`"
      type="checkbox"
      @change="toggle"
      :checked="isSelected"
      :value="checkboxValue || value"
      :disabled="disabled"
      :name="name"
      :class="['n-checkbox-input', className]"
      :style="inputStyle"
    />
    <slot />
    <div v-if="showIcon" class="n-checkbox-icon" :data-testid="`${id}-icon`">
      <slot name="icon" />
    </div>
    <span
      :data-testid="`n-checkbox-${id}-span`"
      :class="{
        'n-checkbox': true,
        'success-state': state === 'success',
        'warning-state': state === 'warning',
        'error-state': state === 'error',
        'n-checkbox-indeterminate': isIndeterminate,
      }"
    ></span>
    <n-validation
      :data-testid="id"
      v-if="state !== 'default'"
      :class="'n-checkbox-validation'"
      :validationState="state"
      :label="stateMessage"
      :isHidden="state === null"
    />
  </label>
</template>

<script>
import NValidation from '../NValidation';
import NUuid from './../../utils/NUuid';

export default {
  name: 'n-checkbox',
  props: {
    id: { type: String, default: `n-checkbox-${NUuid()}` },
    checkboxValue: {
      type: [Number, Array, Object, Boolean, String],
      default: false,
    },
    icon: { type: String },
    showIcon: { type: Boolean, default: false },
    value: {
      type: [Array, Boolean],
      default: false,
    },
    disabled: { type: Boolean, default: false },
    className: { type: String, default: '' },
    name: { type: String, default: '' },
    state: {
      type: String,
      default: 'default',
      validator(value) {
        return ['success', 'error', 'warning', 'default'].includes(value);
      },
    },
    stateMessage: { type: String, default: '' },
    isIndeterminate: { type: Boolean, default: false },
    inputStyle: {},
    labelStyle: {},
  },
  data() {
    return {};
  },
  components: {
    'n-validation': NValidation,
  },
  event: 'change',
  methods: {
    toggle: function (event) {
      let checkboxModel = this.value;
      if (Array.isArray(this.value)) {
        checkboxModel = [...this.value];
        let index = checkboxModel.indexOf(this.checkboxValue);
        console.log(index);
        if (index == -1) {
          checkboxModel.push(this.checkboxValue);
        } else {
          checkboxModel.splice(index, 1);
        }
        this.$emit('input', checkboxModel);
        this.$emit('change', checkboxModel);
      } else {
        this.$emit('change', event); // TODO: need to look into this, why we need?
        this.$emit('input', event.target.checked);
      }
    },
  },
  computed: {
    isSelected() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.checkboxValue);
      }
      return this.checkboxValue
        ? this.checkboxValue === this.value
        : this.value;
    },
  },
};
</script>
<style lang="less">
@import './NCheckbox.less';
</style>
