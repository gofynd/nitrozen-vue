# Nitrozen Custom Form

```
name: 'nitrozen-custom-form',
props:
    inputs: Array of Inputs
    value: Object (Form Response v-model)
​
```
​
Example of an Input

```
{
    type: "toggle",
    display: "Does your file have a header?",
    key: "fileHasHeader",
    default: false,
}
```


Possible Values of Types:

```
{
    key: "text",
    description: "Single line of text"
},
{
    key: "textarea",
    description: "Multiple lines of text"
},
{
    key: "mobile",
    description: "Input field for Country code and Mobile number"
},
{
    key: "email",
    description: "Email ID"
},
{
    key: "number",
    description: "Numeric input."
},
{
    key: "radio",
    description: "Multiple choice question, single answer."
},
{
    key: "checkbox",
    description: "Multiple choice question, multiple answers."
},
{
    key: "dropdown",
    description: "Multiple choice dropdown."
}
```


`key` from input will be used to store data in response.

`enum` key is needed for Dropdown, Checkbox, Radio type of inputs.

`disabled`, `default`, `tooltip`, `required` are the other common options supported in all inputs.