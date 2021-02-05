<template>
  <div class="nitrozen-custom-form-builder-input">
    <template v-if="!value.isExpanded">
      <nitrozen-custom-form
        ref="form"
        :inputs="CustomFormInputForm"
        v-model="value"
        @change="inputChanged"
      />
    </template>
    <template v-else>
      <nitrozen-custom-form-input
        :input="value"
        :disabled="true"
        @change="() => {}"
      />
    </template>
  </div>
</template>

<script>
import InputTypes from "./InputTypes";
import NitrozenCustomForm from "./NCustomForm";
import NitrozenCustomFormInput from "./NCustomFormInput";

export default {
  name: "nitrozen-custom-form-builder-input",
  data() {
    return {
      CustomFormInputForm: [
        {
          display: "Type",
          key: "type",
          required: true,
          type: "dropdown",
          tooltip: "Select type for your input",
          enum: Object.values(InputTypes),
        },
        {
          display: "Display",
          key: "display",
          required: true,
          type: "text",
          tooltip: "Enter display for your input",
        },
        {
          display: "Key",
          key: "key",
          required: true,
          type: "text",
          tooltip: "Enter key for your input",
        },
        {
          display: "Required",
          key: "required",
          required: true,
          type: "toggle",
          tooltip: "Is this a compulsary input",
        },
        {
          display: "Tooptip",
          key: "tooltip",
          required: false,
          type: "text",
          tooltip: "Enter tooltip for your input",
        },
        {
          display: "Default Value",
          key: "default",
          required: false,
          type: "text",
          tooltip: "Enter default value for your input",
          visible_if: {
            "!=": [
              {
                var: "type",
              },
              "mobile",
            ],
          },
        },
        {
          display: "Options",
          key: "enum",
          required: true,
          type: "array",
          tooltip: "Add options for your input",
          visible_if: {
            or: [
              {
                "==": [
                  {
                    var: "type",
                  },
                  "radio",
                ],
              },
              {
                "==": [
                  {
                    var: "type",
                  },
                  "checkbox",
                ],
              },
              {
                "==": [
                  {
                    var: "type",
                  },
                  "dropdown",
                ],
              },
            ],
          },
          input: {
            type: "object",
            inputs: [
              {
                display: "Display",
                key: "display",
                required: true,
                type: "text",
                tooltip: "Enter display of option",
              },
              {
                display: "Key",
                key: "key",
                required: true,
                type: "text",
                tooltip: "Enter key of option",
              },
            ],
          },
        },
      ],
    };
  },
  props: {
    value: {},
  },
  components: {
    NitrozenCustomForm,
    NitrozenCustomFormInput,
  },
  event: "change",
  methods: {
    collapse() {
      this.value.isExpanded = false;
    },
    inputChanged() {
      this.$emit("change", this.value);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./../../base/base.less";

.nitrozen-custom-form-builder-input {
  padding: 12px;
  border: 1px solid @BorderColor;
}
</style>
