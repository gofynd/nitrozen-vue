<template>
  <div class="nitrozen-custom-form-builder">
    <template v-for="(input, index) in value" :id="index">
      <nitrozen-custom-form-builder-input
        :key="index"
        :ref="index"
        v-model="value[index]"
        @change="inputChanged(index, $event)"
        style="margin-bottom: 12px"
      />
    </template>
    <nitrozen-button
      v-stroke-btn
      :rounded="true"
      theme="secondary"
      @click="addInput()"
      class="add-button"
    >
      + Add Input
    </nitrozen-button>
  </div>
</template>
<script>
import NitrozenCustomFormBuilderInput from "./NCustomFormBuilderInput.vue";
import InputTypes from "./InputTypes.js";

export default {
  name: "nitrozen-custom-form-builder",
  props: {
    value: {
      type: Array,
    },
  },
  components: {
    NitrozenCustomFormBuilderInput,
  },
  event: "change",
  methods: {
    inputChanged() {
      this.$emit("change", this.value);
    },
    addInput() {
      this.value.push({
        type: InputTypes.text.key,
        required: false,
        default: "",
        key: "",
        display: "",
        tooltip: ""
      });
    },
  },
};
</script>
<style lang="less">
.nitrozen-custom-form-builder {
  display: block;
  .add-button {
    width: fit-content;
    margin-top: 20px;
  }
}
</style>