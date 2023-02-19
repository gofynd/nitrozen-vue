import NitrozenTable from "./NTable.vue"

export default {
    title: 'Components/Table',
    component: NitrozenTable,

    argTypes: {
        tableHeader: {
            control: 'array',
            default: [
                {
                  "name": "firstName",
                  "value": "First name",
                  "width": "50%",
                  "sortable": true
                },
                {
                  "name": "lastName",
                  "value": "Last name",
                  "width": "20%",
                  "sortable": false
                },
                {
                  "name": "age",
                  "value": "Age",
                  "type": "number",
                  "width": "100px",
                  "sortable": true
                }
              ],
            },
        tableRow: {
            control: 'array',
            default: [
                {
                  "lastName": "Yang",
                  "firstName": "John",
                  "age": 45
                },
                {
                  "lastName": "Peterson",
                  "firstName": "Robert",
                  "age": 16
                },
                {
                  "lastName": "Culley",
                  "firstName": "Dana",
                  "age": 45
                },
                {
                  "lastName": "Giraudy",
                  "firstName": "Rav",
                  "age": 150
                },
                {
                  "lastName": "Clifford",
                  "firstName": "Julia",
                  "age": 44
                },
                {
                  "lastName": "Brecher",
                  "firstName": "Sasha",
                  "age": 36
                },
                {
                  "lastName": "Jefferson",
                  "firstName": "Harvey",
                  "age": 12
                }
              ],
        },
        footer: {control:'text'},
        click: {
            action: 'clicked'
        },
        handle: {
            action: 'Selected Items'
        },
        getSingle: {
            action: "selected",
            
        },
        rowClick: {
          action: "Row Clicked"
        }

    }
}

const Template = (args, {argTypes}) => ({
    components: {NitrozenTable},
    props: Object.keys(argTypes),
    template: `<div> 
    <nitrozen-table @click="click" @onRowClick="rowClick" @getAllItems="handle" @getSingleChecked="getSingle" v-bind="$props"/>
    <div/>`
})

export const Basic = Template.bind({})
Basic.args = {
    tableHeader: [
        {
          "name": "firstName",
          "value": "First name",
          "width": "50%",
          "sortable": true
        },
        {
          "name": "lastName",
          "value": "Last name",
          "width": "20%",
          "sortable": false
        },
        {
          "name": "age",
          "value": "Age",
          "type": "number",
          "width": "100px",
          "sortable": true
        }
      ],
    tableRow: [
        {
          "lastName": "Yang",
          "firstName": "John",
          "age": 45
        },
        {
          "lastName": "Peterson",
          "firstName": "Robert",
          "age": 16
        },
        {
          "lastName": "Culley",
          "firstName": "Dana",
          "age": 45
        },
        {
          "lastName": "Giraudy",
          "firstName": "Rav",
          "age": 150
        },
        {
          "lastName": "Clifford",
          "firstName": "Julia",
          "age": 44
        },
        {
          "lastName": "Brecher",
          "firstName": "Sasha",
          "age": 36
        },
        {
          "lastName": "Jefferson",
          "firstName": "Harvey",
          "age": 12
        }
      ],
}

export const Bordered = Template.bind({})
Bordered.args = {
   
    tableHeader: [
        {
          "name": "firstName",
          "value": "First name",
          "width": "50%",
          "sortable": true
        },
        {
          "name": "lastName",
          "value": "Last name",
          "width": "20%",
          "sortable": false
        },
        {
          "name": "age",
          "value": "Age",
          "type": "number",
          "width": "100px",
          "sortable": true
        }
      ],
    tableRow: [
        {
          "lastName": "Yang",
          "firstName": "John",
          "age": 45
        },
        {
          "lastName": "Peterson",
          "firstName": "Robert",
          "age": 16
        },
        {
          "lastName": "Culley",
          "firstName": "Dana",
          "age": 45
        },
        {
          "lastName": "Giraudy",
          "firstName": "Rav",
          "age": 150
        },
        {
          "lastName": "Clifford",
          "firstName": "Julia",
          "age": 44
        },
        {
          "lastName": "Brecher",
          "firstName": "Sasha",
          "age": 36
        },
        {
          "lastName": "Jefferson",
          "firstName": "Harvey",
          "age": 12
        }
      ],
    columnBorder: true
}

export const Zebra  = Template.bind({})
Zebra.args = {
    tableHeader: [
        {
          "name": "firstName",
          "value": "First name",
          "width": "50%",
          "sortable": true
        },
        {
          "name": "lastName",
          "value": "Last name",
          "width": "20%",
          "sortable": false
        },
        {
          "name": "age",
          "value": "Age",
          "type": "number",
          "width": "100px",
          "sortable": true
        }
      ],
    tableRow: [
        {
          "lastName": "Yang",
          "firstName": "John",
          "age": 45
        },
        {
          "lastName": "Peterson",
          "firstName": "Robert",
          "age": 16
        },
        {
          "lastName": "Culley",
          "firstName": "Dana",
          "age": 45
        },
        {
          "lastName": "Giraudy",
          "firstName": "Rav",
          "age": 150
        },
        {
          "lastName": "Clifford",
          "firstName": "Julia",
          "age": 44
        },
        {
          "lastName": "Brecher",
          "firstName": "Sasha",
          "age": 36
        },
        {
          "lastName": "Jefferson",
          "firstName": "Harvey",
          "age": 12
        }
      ],

      isZebra: true
}
export const Condensed  = Template.bind({})
Condensed.args = {
    tableHeader: [
        {
          "name": "firstName",
          "value": "First name",
          "width": "33%",
          "sortable": true
        },
        {
          "name": "lastName",
          "value": "Last name",
          "width": "33%",
          "sortable": false
        },
        {
          "name": "age",
          "value": "Age",
          "type": "number",
          "width": "33%",
          "sortable": true
        }
      ],
    tableRow: [
        {
          "lastName": "Yang",
          "firstName": "John",
          "age": 45
        },
        {
          "lastName": "Peterson",
          "firstName": "Robert",
          "age": 16
        },
        {
          "lastName": "Culley",
          "firstName": "Dana",
          "age": 45
        },
        {
          "lastName": "Giraudy",
          "firstName": "Rav",
          "age": 150
        },
        {
          "lastName": "Clifford",
          "firstName": "Julia",
          "age": 44
        },
        {
          "lastName": "Brecher",
          "firstName": "Sasha",
          "age": 36
        },
        {
          "lastName": "Jefferson",
          "firstName": "Harvey",
          "age": 12
        }
      ],
      condensed: true
}

export const Checkable = Template.bind({})
Checkable.args = {
    
    tableHeader: [
        {
          "name": "firstName",
          "value": "First name",
          "width": "50%",
          "sortable": true
        },
        {
          "name": "lastName",
          "value": "Last name",
          "width": "20%",
          "sortable": false
        },
        {
          "name": "age",
          "value": "Age",
          "type": "number",
          "width": "100px",
          "sortable": true
        }
      ],
    tableRow: [
        {
          "lastName": "Yang",
          "firstName": "John",
          "age": 45
        },
        {
          "lastName": "Peterson",
          "firstName": "Robert",
          "age": 16
        },
        {
          "lastName": "Culley",
          "firstName": "Dana",
          "age": 45
        },
        {
          "lastName": "Giraudy",
          "firstName": "Rav",
          "age": 150
        },
        {
          "lastName": "Clifford",
          "firstName": "Julia",
          "age": 44
        },
        {
          "lastName": "Brecher",
          "firstName": "Sasha",
          "age": 36
        },
        {
          "lastName": "Jefferson",
          "firstName": "Harvey",
          "age": 12
        }
      ],
    checkAble: true,
}
