<template>
  <div>
    <div style="font-size: 26px; font-weight: 500; color: #41434c; margin-bottom: 20px">Typical Form</div>
    <nitrozen-custom-form
      :inputs="inputs"
      v-model="response"
      @change="formResponseChanged"
    />
  </div>
</template>
<script>
export default {
  name: "custom-form-demo",
  data() {
    return {
      inputs: [
        {
          type: "toggle",
          display: "A Toggle switch",
          key: "some_boolean",
        },
        {
          display: "A Dropdown",
          enum: [
            {
              key: "show",
              display: "Show next text input",
            },
            {
              key: "hide",
              display: "Hide next text input",
            },
          ],
          key: "condition",
          required: true,
          type: "dropdown",
          tooltip: "Selection of this dropdown will decide the fate of next input",
          default: "hide"
        },
        {
          display: "A Conditional Text Input",
          enum: [],
          key: "awesome_text",
          required: true,
          type: "text",
          placeholder: "Enter an awesome text here",
          visible_if: {
            "==": [
              {
                var: "condition",
              },
              "show",
            ],
          },
        },
        {
          display: "Pincode",
          key: "pincode",
          required: true,
          type: "number",
          tooltip: "This is valid only if input is validated with '^[1-9][0-9]{5}$'",
          placeholder: "Please enter your pincode",
          regex: "^[1-9][0-9]{5}$"
        },
        {
          display: "Prop Bean Configs",
          key: "propBeanConfigs",
          type: "array",
          input: {
            display: "",
            type: "object",
            inputs: [
              {
                display: "Source Field",
                key: "sourceField",
                required: true,
                type: "text",
              },
              {
                display: "Destination Field",
                key: "destinationField",
                required: true,
                type: "text",
              },
              {
                display: "Data Type",
                key: "datatype",
                required: true,
                type: "dropdown",
                default: "FLOAT",
                enum: [
                  {
                    key: "STRING",
                    display: "String",
                  },
                  {
                    key: "FLOAT",
                    display: "Float",
                  },
                  {
                    key: "INTEGER",
                    display: "Integer",
                  },
                ],
              },
            ],
          },
        },
        {
          display: "Team",
          key: "team",
          type: "object",
          inputs: [
            {
              display: "Name",
              key: "team_name",
              required: true,
              type: "text",
            },
            {
              display: "Members",
              key: "members",
              type: "array",
              input: {
                display: "",
                type: "text",
              },
            },
            {
              display: "Parent Team",
              key: "parent_team",
              required: true,
              type: "checkbox",
              enum: [
                {
                  key: "regrowth",
                  display: "ReGrowth",
                },
                {
                  key: "opex",
                  display: "OpEx",
                },
              ],
            },
          ],
        },
        {
          display: "Sheet Names",
          key: "sheetNames",
          type: "array",
          input: {
            display: "",
            type: "text",
          },
        },
      ],
      response: {
        sheetNames: ["First Sheet", "Second Sheet"],
      },
    };
  },
  methods: {
    formResponseChanged(response) {
      console.log(response);
    },
  },
};
</script>
<style lang="less">
</style>