<template>
  <div>
    <div class="form-title">Typical Form</div>
    <nitrozen-custom-form
      ref="form"
      :inputs="inputs"
      v-model="emptyResponse"
      @change="formResponseChanged"
    />
    <nitrozen-button @click="sendResponse">Submit</nitrozen-button>
  </div>
</template>
<script>
export default {
  name: "custom-form-demo",
  data() {
    return {
      inputs: [
  {
    "display": "File Configuration",
    "key": "fileConfig",
    "type": "object",
    "inputs": [
      {
        "display": "Delimiter",
        "key": "delimiter",
        "required": true,
        "type": "text",
        "tooltip": "Delimiter used in CSV",
        "default": ","
      },
      {
        "display": "Prop Bean Configs",
        "key": "propBeanConfigs",
        "type": "array",
        "default": [
            {
              "sourceField": "brand ",
              "destinationField": "brand",
              "dataType": "STRING",
              "__non_removable": true
            },
            {
              "sourceField": "intf_store_id ",
              "destinationField": "intf_store_id",
              "dataType": "STRING",
            },
          ],
        "input": {
          "display": "",
          "type": "object",
          "inputs": [
            {
              "display": "Source Field",
              "key": "sourceField",
              "min_length": 3,
              "required": true,
              "type": "text"
            },
            {
              "display": "Destination Field",
              "key": "destinationField",
              "required": true,
              "type": "text"
            },
            {
              "display": "Mandatory",
              "key": "required",
              "required": true,
              "type": "toggle",
              "default": true
            },
            {
              "display": "Enrich From Catalog",
              "key": "enrichFromMaster",
              "required": true,
              "type": "toggle",
              "default": false
            },
            {
              "display": "Data Type",
              "key": "dataType",
              "required": true,
              "type": "dropdown",
              "default": "FLOAT",
              "enum": [
                {
                  "key": "STRING",
                  "display": "String"
                },
                {
                  "key": "FLOAT",
                  "display": "Float"
                },
                {
                  "key": "INTEGER",
                  "display": "Integer"
                }
              ]
            }
          ]
        }
      },
      {
        "type": "toggle",
        "display": "Does your file have a header?",
        "key": "fileHasHeader",
        "default": false
      },
      {
        "type": "number",
        "display": "Index of that Header",
        "key": "headerIndex",
        "default": 0,
        "visible_if": {
          "==": [
            {
              "var": "fileHasHeader"
            },
            true
          ]
        },
        "hidden": true
      },
      {
        "display": "Delimiter",
        "key": "delimiter",
        "required": true,
        "type": "text",
        "tooltip": "Delimiter used in CSV",
        "default": ","
      },
      {
        "type": "number",
        "display": "Start index of your data",
        "key": "dataStartIndex",
        "default": 1
      },
      {
        "display": "File type of your input",
        "key": "fileType",
        "required": true,
        "type": "dropdown",
        "enum": [
          {
            "key": "EXCEL",
            "display": "Excel"
          },
          {
            "key": "CSV",
            "display": "CSV"
          }
        ],
        "default": "EXCEL"
      },
      {
        "display": "Charachter Encoding",
        "enum": [
          {
            "key": "UTF-8",
            "display": "UTF-8"
          },
          {
            "key": "UTF-16",
            "display": "UTF-16"
          }
        ],
        "key": "charset",
        "required": true,
        "type": "dropdown",
        "placeholder": "Select Charset",
        "visible_if": {
          "==": [
            {
              "var": "fileType"
            },
            "CSV"
          ]
        },
        "hidden": true
      },
      {
        "type": "toggle",
        "display": "Should we read all the sheets?",
        "key": "readAllSheets",
        "default": false,
        "visible_if": {
          "==": [
            {
              "var": "fileType"
            },
            "EXCEL"
          ]
        },
        "hidden": true
      },
      {
        "display": "Sheet Names",
        "key": "sheetNames",
        "type": "array",
        "min": 2,
        "max": 4,
        "input": {
          "display": "",
          "type": "text",
          "min_length": 2
        },
        "visible_if": {
          "==": [
            {
              "var": "readAllSheets"
            },
            false
          ]
        },
        "hidden": true
      }
    ]
  }
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
        console.error("InValid Response: ", this.emptyResponse);
      } else {
        console.log("Valid Response finally: ", this.emptyResponse);
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
</style>