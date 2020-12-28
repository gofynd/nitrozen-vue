<template>
  <div class="nitrozen-custom-form">
    <template v-for="(input, index) in inputs" :id="input.key">
      <custom-form-input
        :key="index"
        :input="input"
        v-if="!input.hidden"
        v-model="value[input.key]"
        @change="inputChanged(input, $event)"
      />
    </template>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import jsonLogic from "json-logic-js";
import NCustomFormInput from "./NCustomFormInput.vue";
import { defaultResponseForInput } from "./util.js";
export default {
  name: "nitrozen-custom-form",
  props: {
    value: {
      type: Object,
      default: false,
    },
    inputs: {
      type: Array,
      default: false,
    },
  },
  components: {
    "custom-form-input": NCustomFormInput,
  },
  event: "change",
  beforeMount() {
    this.inputs.forEach((input) => {
      if (this.value[input.key] == undefined) {
        this.value[input.key] = defaultResponseForInput(input);
      }
    });

    this.recaliberateInputs(this.inputs, this.value);
  },
  methods: {
    recaliberateInputs(inputs, response) {
      inputs.forEach((input) => {
        if (input.visible_if) {
          let hidden = false;
          hidden = !jsonLogic.apply(input.visible_if, response);
          this.$set(input, "hidden", hidden);
          if (hidden) {
            response[input.key] = undefined;
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
      this.value[input.key] = newValue;
      this.recaliberateInputs(this.inputs, this.value);
      this.$emit("change", this.value);
    },
  },
};
</script>
<style lang="less">
@import "./NCustomForm.less";
</style>