<template>
  <div class="nitrozen-custom-form-input">
    <template v-if="!validateInput(input)">
      <div class="invalid-input">INVALID INPUT</div>
    </template>
    <template
      v-else-if="['text', 'textarea', 'email', 'number'].includes(input.type)"
    >
      <nitrozen-input
        :type="input.type"
        v-model="formInputValue"
        :label="input.display"
        :placeholder="input.placeholder"
        :required="input.required"
        :tooltipText="input.tooltip"
        :showTooltip="input.tooltip != undefined"
        @blur="willMoveToNext"
        :disabled="input.disabled"
        :minlength="input.min_length"
        :maxlength="input.max_length"
        :min="input.min"
        :max="input.max"
      />
    </template>
    <template v-else-if="input.type == InputTypes.toggle.key">
      <div class="toggle-input">
        <span class="n-input-label">{{ titleFor(input) }}</span>
        <nitrozen-toggle
          style="margin-right: -10px"
          v-model="formInputValue"
          :disabled="input.disabled"
        ></nitrozen-toggle>
      </div>
    </template>
    <template v-else-if="input.type == InputTypes.mobile.key">
      <span class="n-input-label">{{ titleFor(input) }}</span>
      <vue-tel-input
        class="n-input mobile-input"
        disabledFormatting
        enabledCountryCode
        :onlyCountries="['IN']"
        :required="input.required"
        autocomplete="off"
        mode="international"
        :placeholder="input.placeholder"
        v-model="formInputValue.number"
        @input="inputChanged"
        @blur="willMoveToNext"
        :disabled="input.disabled"
      ></vue-tel-input>
    </template>
    <template
      v-else-if="
        input.type == InputTypes.checkbox.key ||
        input.type == InputTypes.radio.key
      "
    >
      <span class="n-input-label">{{ titleFor(input) }}</span>
      <div class="radio-group">
        <div
          v-for="(option, index) in input.enum"
          :key="index"
          style="margin-right: 12px; margin-bottom: 4px"
          :disabled="input.disabled"
        >
          <template v-if="input.type == InputTypes.checkbox.key">
            <nitrozen-checkbox
              v-model="formInputValue"
              :checkboxValue="option.key"
              :name="input.key"
              :disabled="input.disabled"
            >
              <span class="title">{{ option.display }}</span>
            </nitrozen-checkbox>
          </template>
          <template v-else-if="input.type == InputTypes.radio.key">
            <nitrozen-radio
              v-model="formInputValue"
              :radioValue="option.key"
              :name="input.key"
              :disabled="input.disabled"
            >
              <span class="title">{{ option.display }}</span>
            </nitrozen-radio>
          </template>
        </div>
      </div>
    </template>
    <template v-else-if="input.type == InputTypes.dropdown.key">
      <nitrozen-dropdown
        :items="
          input.enum.map((x) => {
            return { text: x.display, value: x.key };
          })
        "
        v-model="formInputValue"
        :label="input.display"
        :placeholder="input.placeholder"
        :required="input.required"
        :tooltipText="input.tooltip"
        :showTooltip="input.tooltip != undefined"
        :disabled="input.disabled"
      ></nitrozen-dropdown>
    </template>
    <template v-else-if="input.type == InputTypes.object.key">
      <fieldset class="input-group">
        <legend
          class="n-input-label"
          v-if="input.display && input.display.length"
        >
          {{ titleFor(input) }}
        </legend>
        <nitrozen-custom-form
          :inputs="input.inputs"
          v-model="formInputValue"
          @change="inputChanged"
          :ref="input.key || 'form'"
        />
      </fieldset>
    </template>
    <template v-else-if="input.type == InputTypes.array.key">
      <fieldset class="input-group">
        <legend
          class="n-input-label"
          v-if="input.display && input.display.length"
        >
          {{ titleFor(input) }}
        </legend>
        <div
          v-for="(subResponse, index) in formInputValue"
          :key="index + subResponse"
          :id="input.key + '[' + index + ']'"
          style="display: flex"
        >
          <nitrozen-custom-form-input
            :input="input.input"
            v-model="formInputValue[index]"
            :ref="input.key + '[' + index + ']'"
            @change="arrayInputChanged(index, $event)"
            style="width: 100%; padding-bottom: 20px;"
          />
          <nitrozen-inline
            class="delete-icon"
            v-if="!subResponse.__non_removable"
            @click="deleteResponseAt(index)"
            :icon="'cross-filled'"
          ></nitrozen-inline>
        </div>
        <nitrozen-button
          @click="addResponse"
          theme="secondary"
          :disabled="input.disabled"
        >
          Add
        </nitrozen-button>
      </fieldset>
    </template>
    <nitrozen-error v-if="errorMessage">{{ errorMessage }}</nitrozen-error>
  </div>
</template>

<script>
import {
  defaultResponseForInput,
  validateResponseForInput,
  validateInput,
} from "./util.js";
import InputTypes from "./InputTypes.js";

import VueTelInput from "vue-tel-input";

import NitrozenToggle from "./../NToggleBtn";
import NitrozenCheckbox from "./../NCheckbox";
import NitrozenRadio from "./../NRadio";
import NitrozenDropdown from "./../NDropdown";
import NitrozenInput from "./../NInput";
import NitrozenError from "./../NError";
import NitrozenButton from "./../NBtn";
import NitrozenInline from "./../NInline";

export default {
  name: "nitrozen-custom-form-input",
  props: {
    value: {},
    input: {
      type: Object,
    },
  },
  data() {
    return {
      errorMessage: null,
      formInputValue: this.value,
      InputTypes,
    };
  },
  components: {
    NitrozenInput,
    NitrozenDropdown,
    NitrozenCheckbox,
    NitrozenRadio,
    NitrozenToggle,
    NitrozenError,
    NitrozenButton,
    NitrozenInline,
    VueTelInput,
    NitrozenCustomForm: () => import("./NCustomForm.vue"), // Loophole for circular imports issue
  },
  event: "change",
  watch: {
    formInputValue() {
      this.inputChanged();
    },
  },
  methods: {
    validateInput,
    titleFor(input) {
      return input.display + (input.required ? " *" : "");
    },
    inputChanged() {
      this.errorMessage = null
      this.$emit("change", this.formInputValue);
    },
    addResponse() {
      this.formInputValue.push(defaultResponseForInput(this.input.input));
    },
    deleteResponseAt(deletionIndex) {
      this.formInputValue.splice(deletionIndex, 1);
    },
    arrayInputChanged(index, valueAtIndex) {
      this.formInputValue[index] = valueAtIndex;
      this.inputChanged();
    },
    willMoveToNext() {
      const { isValid, errorMessage } = validateResponseForInput(
        this.input,
        this.formInputValue
      );
      this.errorMessage = isValid ? null : errorMessage;
    },
    showValidationErrorsIfAny() {
      if (this.input.inputs) {
        this.input.inputs.forEach((input) => {
          if (!input.hidden) {
            this.$refs[this.input.key || "form"].showValidationErrorsIfAny();
          }
        });
      } else if (this.input.input) {
        this.formInputValue.forEach((val, index) => {
          const refs = this.$refs[this.input.key + "[" + index + "]"];
          refs[0].showValidationErrorsIfAny();
        });
        this.willMoveToNext();
      } else {
        this.willMoveToNext();
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~vue-tel-input/dist/vue-tel-input.css";
@import "./../../base/base.less";

.nitrozen-custom-form-input {
  padding-bottom: 12px;

  .invalid-input {
    color: @TypographyPrimaryColor;
    text-align: center;
  }

  .delete-icon {
    margin: -8px -12px -4px -12px;
    z-index: 1;
    cursor: pointer;
    ::v-deep svg {
      height: 24px;
    }
  }

  .mobile-input {
    border: 1px solid @BorderColor !important;
    padding-left: 0px;
    &:focus-within {
      border: 1px solid @SecondaryColor !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
    /deep/.dropdown-arrow {
      color: @SecondaryColor;
      margin-left: 3px;
    }
    /deep/.country-code {
      color: @TypographyPrimaryColor;
      font-size: @BaseFontSize + 2;
    }
    /deep/input {
      color: @TypographyPrimaryColor;
      font-size: @BaseFontSize + 2;
    }
  }

  .input-group {
    border: 1px solid #e4e5e6;
    border-radius: 4px;
    padding: 20px;
    margin: 0;

    legend {
      padding: 0 2px;
    }
  }

  .radio-group {
    display: flex;
    margin-top: 5px;
    flex-wrap: wrap;
  }

  .toggle-input {
    display: flex;
    justify-content: space-between;
  }
}
</style>
