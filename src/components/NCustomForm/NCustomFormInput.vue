<template>
  <div class="custom-form-input">
    <template
      v-if="['text', 'textarea', 'email', 'number'].includes(input.type)"
    >
      <nitrozen-input
        :type="input.type"
        v-model="response.value"
        :label="input.display"
        :placeholder="input.placeholder"
        :required="input.required"
        :tooltipText="input.tooltip"
        :showTooltip="input.tooltip != undefined"
        @input="inputChanged"
      />
    </template>
    <template v-else-if="input.type == 'toggle'">
      <div class="toggle-input">
        <span class="n-input-label">{{ titleFor(input) }}</span>
        <nitrozen-toggle
          v-model="response.value"
          @change="inputChanged"
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
        v-model="response.value"
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
              v-model="response.value"
              radioValue="none"
              name="route"
              @change="inputChanged"
            >
              <span class="title">{{ option.display }}</span>
            </nitrozen-checkbox>
          </template>
          <template v-else-if="input.type == 'radio'">
            <nitrozen-radio
              v-model="response.value"
              radioValue="none"
              name="route"
              @change="inputChanged"
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
        v-model="response.value"
        :label="input.display"
        :placeholder="input.placeholder"
        :required="input.required"
        :tooltipText="input.tooltip"
        :showTooltip="input.tooltip != undefined"
        @change="inputChanged"
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
        <div
          v-for="(subInput, index) in input.inputs"
          :key="index"
          :id="subInput.key"
        >
          <custom-form-input
            :input="subInput"
            :response="response.value[subInput.key]"
            @inputChanged="inputChanged"
            style="margin: 0px 2px"
          />
        </div>
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
          v-for="(subResponse, index) in response.value"
          :key="index"
          :id="input.key + '[' + index + ']'"
        >
          <custom-form-input
            :input="input.input"
            :response="subResponse"
            @inputChanged="inputChanged"
          />
        </div>
        <nitrozen-button
          @click="addResponse"
          theme="secondary"
        >
          Add
        </nitrozen-button>
      </fieldset>
    </template>
    <nitrozen-error v-if="response.showerror">{{
      response.errortext
    }}</nitrozen-error>
  </div>
</template>

<script>
import { defaultResponseForInput } from "./util.js";
import VueTelInput from "vue-tel-input";
import NitrozenToggle from "./../NToggleBtn";
export default {
  name: "custom-form-input",
  props: {
    input: {
      type: Object,
    },
    response: {
      type: Object,
    },
  },
  data() {
    return {
      //
    };
  },
  components: {
    NitrozenToggle,
    "vue-tel-input": VueTelInput,
  },
  methods: {
    defaultResponseForInput,
    titleFor(input) {
      return input.display + (input.required ? " *" : "");
    },
    inputChanged(event) {
      this.$emit("inputChanged", event);
    },
    addResponse() {
      this.response.value.push(this.defaultResponseForInput(this.input.input));
      this.$forceUpdate();
      this.inputChanged({});
    },
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
