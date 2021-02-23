<template>
  <div class="nitrozen-custom-form">
    <template v-for="(input, index) in inputs" :id="input.key">
      <nitrozen-custom-form-input
        :key="index"
        :ref="input.key"
        :input="input"
        v-if="!input.hidden"
        v-model="modelValue[input.key]"
        @change="inputChanged(input, $event)"
      />
    </template>
  </div>
</template>
<script>
import jsonLogic from "json-logic-js";
import NitrozenCustomFormInput from "./NCustomFormInput.vue";
import { defaultResponseForInput, validateResponsesForInputs } from "./util.js";

export default {
  name: "nitrozen-custom-form",
  props: {
    modelValue: {
      type: Object,
      default: false
    },
    inputs: {
      type: Array,
      default: false
    }
  },
  components: {
    NitrozenCustomFormInput
  },
  event: "change",
  beforeMount() {
    this.inputs.forEach(input => {
      if (this.modelValue[input.key] == undefined) {
        this.modelValue[input.key] = defaultResponseForInput(input);
      }
    });

    this.recaliberateInputs(this.inputs, this.modelValue);
  },
  methods: {
    recaliberateInputs(inputs, response) {
      inputs.forEach(input => {
        if (input.visible_if) {
          const hidden = !jsonLogic.apply(input.visible_if, response);
          input.hidden = hidden;
          if (hidden) {
            delete response[input.key];
          } else if (response[input.key] == undefined) {
            response[input.key] = defaultResponseForInput(input);
          }
        }

        if (input.inputs) {
          this.recaliberateInputs(input.inputs, response[input.key]);
        }
      });
    },
    inputChanged(input, newValue) {
      this.modelValue[input.key] = newValue;
      this.recaliberateInputs(this.inputs, this.modelValue);
      this.$emit("change", this.modelValue);
    },
    isResponseValid() {
      return validateResponsesForInputs(this.inputs, this.modelValue);
    },
    showValidationErrorsIfAny() {
      this.inputs.forEach(input => {
        if (!input.hidden) {
          this.$refs[input.key][0].showValidationErrorsIfAny();
        }
      });
    }
  }
};
</script>
<style lang="less">
.nitrozen-custom-form {
  display: block;
}
</style>
