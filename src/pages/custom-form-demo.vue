<template>
  <div>
    <span style="font-size: 26px; font-weight: 500; color: #41434c; margin-bottom: 20px">Typical Form</span>
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
          display: "Email",
          enum: [
            {
              key: "show",
              display: "Show",
            },
            {
              key: "hide",
              display: "hide",
            },
          ],
          key: "email",
          required: true,
          type: "dropdown",
          tooltip: "asdf",
          default: "nikhil"
        },
        {
          display: "Conditional Input",
          enum: [],
          key: "secret_mail",
          required: true,
          type: "text",
          placeholder: "Pleaseeee",
          visible_if: {
            "==": [
              {
                var: "email",
              },
              "show",
            ],
          },
        },
        {
          display: "mobile",
          key: "mobile",
          required: true,
          type: "mobile",
          tooltip: "asdf",
          placeholder: "Pleaseeee",
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
        sheetNames: ["asdf", "asdfasdf"],
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