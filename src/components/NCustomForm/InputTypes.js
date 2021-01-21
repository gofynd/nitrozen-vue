let InputTypes = {
    text: {
        display: "Single line input",
        description: "Single line of text"
    },
    textarea: {
        display: "Multi line input",
        description: "Multiple lines of text"
    },
    mobile: {
        display: "Mobile Number",
        description: "Input field for Country code and Mobile number"
    },
    email: {
        display: "Email",
        description: "Email ID"
    },
    number: {
        display: "Numeric input",
        description: "Numeric input."
    },
    radio: {
        display: "Radio Button Group",
        description: "Multiple choice question, single answer."
    },
    checkbox: {
        display: "Chexbox Group",
        description: "Multiple choice question, multiple answers."
    },
    dropdown: {
        display: "Dropdown",
        description: "Multiple choice dropdown."
    },
    toggle: {
        display: "Toggle",
        description: "An on-off toggle switch."
    },
    object: {
        display: "Group of Inputs",
        description: "Group of inputs which will be responsed in sub key"
    },
    array: {
        display: "Input having array as response",
        description: "Input having array as response"
    },
}

Object.keys(InputTypes).forEach(key => {
    InputTypes[key].key = key
});

export default InputTypes