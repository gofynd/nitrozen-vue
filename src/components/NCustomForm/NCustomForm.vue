<template>
  <div class="nitrozen-custom-form">
    <template v-for="(input, index) in inputs" :id="input.key">
      <custom-form-input
        :key="index"
        :input="input"
        v-if="!input.hidden"
        :response="value[input.key]"
        @inputChanged="inputChanged"
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
      // response
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
      this.value[input.key] = this.defaultResponseForInput(input);
    });

    this.recaliberateInputs();
  },
  methods: {
    defaultResponseForInput,
    recaliberateInputs() {
      let finalResponse = {};

      this.inputs.forEach((input) => {
        finalResponse[input.key] = this.value[input.key].value;
      });

      this.inputs.forEach((input) => {
        let hidden = false;
        if (input.visible_if) {
          hidden = !jsonLogic.apply(input.visible_if, finalResponse);
        }
        this.$set(input, "hidden", hidden);
      });
      return finalResponse;
    },
    inputChanged() {
      this.$emit("change", this.recaliberateInputs());
    },
  },
};
</script>
<style lang="less">
@import "./NCustomForm.less";
</style>