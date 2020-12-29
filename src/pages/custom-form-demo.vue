<template>
  <div>
    <div class="form-title">Typical Form</div>
    <nitrozen-custom-form
      ref="form"
      :inputs="inputs"
      v-model="emptyResponse"
      @change="formResponseChanged"
    />
    <button class="common-btn submit-button" @click="sendResponse()">
      <div>Submit</div>
    </button>
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
          display: "Does your file have a header?",
          key: "fileHasHeader",
          default: false,
        },
        {
          type: "number",
          display: "Index of that Header",
          key: "headerIndex",
          default: 0,
          visible_if: {
            "==": [
              {
                var: "fileHasHeader",
              },
              true,
            ],
          },
        },
        {
          display: "Delimiter",
          key: "delimiter",
          required: true,
          type: "text",
          tooltip: "Delimiter used in CSV",
          default: ",",
        },
        {
          type: "number",
          display: "Start index of your data",
          key: "dataStartIndex",
          default: 1,
        },
        {
          display: "File type of your input",
          key: "fileType",
          required: true,
          type: "dropdown",
          enum: [
            {
              key: "EXCEL",
              display: "Excel",
            },
            {
              key: "CSV",
              display: "CSV",
            },
          ],
          default: 'CSV',
        },
        {
          display: "Charachter Encoding",
          enum: [
            {
              key: "UTF-8",
              display: "UTF-8",
            },
            {
              key: "UTF-16",
              display: "UTF-16",
            },
          ],
          key: "charset",
          required: true,
          type: "dropdown",
          placeholder: "Select Charset",
          visible_if: {
            "==": [
              {
                var: "fileType",
              },
              "CSV",
            ],
          },
        },
        {
          type: "toggle",
          display: "Should we read all the sheets?",
          key: "readAllSheets",
          default: true,
          visible_if: {
            "==": [
              {
                var: "fileType",
              },
              "EXCEL",
            ],
          },
        },
        {
          display: "Sheet Names",
          key: "sheetNames",
          type: "array",
          input: {
            display: "",
            type: "text",
          },
          visible_if: {
            "==": [
              {
                var: "readAllSheets",
              },
              false,
            ],
          },
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
      ],
      emptyResponse: {},
      filledResponse: {
        fileHasHeader: true,
        headerIndex: 0,
        delimiter: ",",
        dataStartIndex: 1,
        charset: "UTF-8",
        fileType: "EXCEL",
        readAllSheets: false,
        sheetNames: ["Inventory_Data"],
        propBeanConfigs: [
          {
            sourceField: "brand ",
            destinationField: "brand",
            dataType: "STRING",
          },
          {
            sourceField: "intf_store_id ",
            destinationField: "intf_store_id",
            dataType: "STRING",
          },
        ],
      },
    };
  },
  methods: {
    formResponseChanged(response) {
      console.log(response);
    },
    sendResponse() {
      if (!this.$refs.form.isResponseValid()) {
        this.$refs.form.showValidationErrorsIfAny();
      } else {
        console.log("Valid Response finally");
      }
    },
  },
};
</script>
<style lang="less">
.form-title {
  font-size: 26px;
  font-weight: 500;
  color: #41434c;
  margin-bottom: 20px;
}
.submit-button {
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  line-height: 24px;
  padding: 4px 20px;
  margin: auto;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
}
</style>