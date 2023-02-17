<template>
  <div class="n-code-main">
    <div class="n-code-label-container">
      <label class="n-code-label">
        {{ label }} {{ required ? '*' : '' }}
        <nitrozen-tooltip
          v-if="tooltip"
          :tooltipText="tooltipText"
          :icon="toolTipIcon"
          :position="'right'"
        />
      </label>
    </div>
    <div class="n-code-field-container">
      <input
        v-for="(value, index) in codeArr"
        :autoComplete="'off'"
        :value="value"
        :id="`code-input-${codeId}-` + index"
        :key="`code-input-${codeId}-` + index"
        :type="type"
        @input="(e) => onInputChange(e, index)"
        :placeholder="'0'"
        :class="`n-code-input-field ${
          validationState && !hideValidation
            ? `n-code-input-border-${validationState}`
            : `n-code-input-border`
        }`"
        @keydown="(e) => handleKeyDown(e, index)"
        v-on:keypress="handleInputKeyPress($event)"
        :maxLength="1"
      />
    </div>
    <div class="n-code-underinfo">
      <nitrozen-validation
        :isHidden="hideValidation"
        :validationState="validationState"
        :label="validationLabel"
      />
      <span class="n-helper-text" v-if="helperText">{{ helperText }}</span>
    </div>
  </div>
</template>

<script>
import NitrozenUuid from './../../utils/NUuid';
import NitrozenValidation from './../NValidation';
import NitrozenTooltip from './../NTooltip';

export default {
  name: 'nitrozen-code',
  components: {
    'nitrozen-validation': NitrozenValidation,
    'nitrozen-tooltip': NitrozenTooltip,
  },
  data() {
    return {
      codeArr: [],
    };
  },
  props: {
    fields: {
      type: Number,
      default: 4,
    },
    label: {
      type: String,
      default: '',
    },
    codeId: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    validationState: {
      type: String,
    },
    hideValidation: {
      type: Boolean,
      default: true,
    },
    validationLabel: {
      type: String,
    },
    helperText: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    tooltip: {
      type: String,
    },
    toolTipIcon: {
      type: String,
    },
    getCode: {
      type: Function,
    },
    id: {
      type: [Number, String],
      default: () => 'nitrozen-input' + NitrozenUuid(),
    },
  },
  mounted() {
    let codeArrEnum = Array(this.fields).fill('');
    this.codeArr = [...codeArrEnum];
  },
  methods: {
    onInputChange: function (event, index) {
      // if the target event is empty then delete and go back
      // Replace the user input to allow only numbers
      let codeInput = event.target.value.replace(/[^0-9]+/g, '');
      // Case to handle backspace event in case there is a value already in the field
      if (codeInput.length == 2 && index + 1 <= this.fields - 1) {
        codeInput = codeInput[1];
        let tempCodeArr = [...this.codeArr];
        tempCodeArr[index + 1] = codeInput;
        this.codeArr = [...tempCodeArr];
        this.getCode(tempCodeArr.join(''));
        this.goToNextField(index);
        // IMP to return
        return;
      }
      // only if there is input with 1 digit
      if (codeInput && codeInput.length <= 1) {
        let tempCodeArr = [...this.codeArr];
        tempCodeArr[index] = codeInput;
        this.codeArr = [...tempCodeArr];
        this.getCode(tempCodeArr.join(''));
        this.goToNextField(index);
      }
    },
    goToNextField: function (currentIndex) {
      // if there is a field after the current index then shift focus on that
      if (currentIndex + 1 <= this.fields - 1) {
        let nextField = document.getElementById(
          `code-input-${this.codeId}-${currentIndex + 1}`
        );
        nextField?.focus();
      }
    },
    handleBackSpace: function (currentIndex) {
      // if there is a field before the current index then delete and focus on that index
      if (currentIndex >= 0 && currentIndex <= this.fields - 1) {
        let tempCodeArr = [...this.codeArr];
        tempCodeArr[currentIndex] = '';
        this.codeArr = [...tempCodeArr];
        this.getCode(tempCodeArr.join(''));
        let prevField = document.getElementById(
          `code-input-${this.codeId}-${currentIndex - 1}`
        );
        prevField?.focus();
      }
    },
    handleKeyDown: function (event, currentIndex) {
      if ([8, 46].includes(event.keyCode)) {
        this.handleBackSpace(currentIndex);
      }
    },
    eventEmit: function (event, type) {
      this.$emit(type, event);
    },
    handleInputKeyPress: function (event) {
      let isnum = /^\d+$/.test(event.key);
      if (!isnum) event.preventDefault();
      return true;
    },
  },
};
</script>

<style lang="less">
@import './NCode.less';
</style>
