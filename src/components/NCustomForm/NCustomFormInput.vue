<template>
  <div class="custom-form-input">
    <template
      v-if="['text', 'textarea', 'email', 'number'].includes(input.type)"
    >
      <nitrozen-input
        :type="input.type"
        v-model="formInputValue"
        :label="input.display"
        :placeholder="input.placeholder"
        :required="input.required"
        :tooltipText="input.tooltip"
        :showTooltip="input.tooltip != undefined"
      />
    </template>
    <template v-else-if="input.type == 'toggle'">
      <div class="toggle-input">
        <span class="n-input-label">{{ titleFor(input) }}</span>
        <nitrozen-toggle
          v-model="formInputValue"
        ></nitrozen-toggle>
      </div>
    </template>
    <template v-else-if="input.type == 'mobile'">
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
      ></vue-tel-input>
    </template>
    <template v-else-if="input.type == 'checkbox' || input.type == 'radio'">
      <span class="n-input-label">{{ titleFor(input) }}</span>
      <div class="radio-group">
        <div
          v-for="(option, index) in input.enum"
          :key="index"
          style="margin-right: 12px; margin-bottom: 4px"
        >
          <template v-if="input.type == 'checkbox'">
            <nitrozen-checkbox
              v-model="formInputValue"
              :checkboxValue="option.key"
              :name="input.key"
            >
              <span class="title">{{ option.display }}</span>
            </nitrozen-checkbox>
          </template>
          <template v-else-if="input.type == 'radio'">
            <nitrozen-radio
              v-model="formInputValue"
              :radioValue="option.key"
              :name="input.key"
            >
              <span class="title">{{ option.display }}</span>
            </nitrozen-radio>
          </template>
        </div>
      </div>
    </template>
    <template v-else-if="input.type == 'dropdown'">
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
      ></nitrozen-dropdown>
    </template>
    <template v-else-if="input.type == 'object'">
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
        />
      </fieldset>
    </template>
    <template v-else-if="input.type == 'array'">
      <fieldset class="input-group">
        <legend
          class="n-input-label"
          v-if="input.display && input.display.length"
        >
          {{ titleFor(input) }}
        </legend>
        <div
          v-for="(subResponse, index) in formInputValue"
          :key="index"
          :id="input.key + '[' + index + ']'"
        >
          <custom-form-input
            :input="input.input"
            v-model="formInputValue[index]"
            @change="arrayInputChanged(index, $event)"
          />
        </div>
        <nitrozen-button @click="addResponse" theme="secondary">
          Add
        </nitrozen-button>
      </fieldset>
    </template>
    <nitrozen-error v-if="hasError">{{ errorTextFor(input) }}</nitrozen-error>
  </div>
</template>

<script>
import { defaultResponseForInput } from "./util.js";
import VueTelInput from "vue-tel-input";
import NitrozenToggle from "./../NToggleBtn";
export default {
  name: "custom-form-input",
  props: {
    value: {
      type: [Object, Array, Number, Boolean, String],
    },
    input: {
      type: Object,
      default: false,
    },
  },
  data() {
    return {
      hasError: false,
      formInputValue: this.value,
    };
  },
  components: {
    NitrozenToggle,
    "vue-tel-input": VueTelInput,
  },
  event: "change",
  watch: {
    formInputValue() {
      this.inputChanged();
    },
  },
  methods: {
    titleFor(input) {
      return input.display + (input.required ? " *" : "");
    },
    errorTextFor(input) {
      return input.error_message || "Please enter " + input.display;
    },
    inputChanged() {
      this.$emit("change", this.formInputValue);
    },
    addResponse() {
      this.formInputValue.push(defaultResponseForInput(this.input.input));
      this.$forceUpdate();
    },
    arrayInputChanged(index, valueAtIndex) {
      this.formInputValue[index] = valueAtIndex;
      this.inputChanged();
    }
  },
};
</script>

<style lang="less" scoped>
@import "~vue-tel-input/dist/vue-tel-input.css";
@import "./../../base/base.less";

.custom-form-input {
  padding-bottom: 8px;

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
    padding: 4px 8px;
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
