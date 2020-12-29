function defaultResponseForInput(input) {
    if (input.type == "radio") {
        if (input.default) {
            return input.default;
        } else if (input.enum.length) {
            return input.enum[0].key;
        }
        return undefined
    } else if (input.type == "dropdown") {
        if (input.default) {
            return input.default;
        }
        return undefined;
    } else if (input.type == "checkbox") {
        return [];
    } else if (
        ['text', 'textarea', 'email', 'number'].includes(input.type)
    ) {
        if (input.default || input.default == 0) {
            return input.default;
        }
        return null;
    } else if (input.type == "mobile") {
        return {
            countryCode: 91,
            number: ""
        };
    } else if (input.type == "object") {
        const subResponse = {};
        input.inputs.forEach((io) => {
            subResponse[io.key] = defaultResponseForInput(io);
        });
        return subResponse;
    } else if (input.type == "array") {
        return [];
    } else if (input.type == "toggle") {
        if (input.default) {
            return input.default
        }
        return false;
    }
}

function isEmpty(value) {
    return value == "" || value == undefined || value == null;
}

function validateResponseForInput(input, response) {
    if (input.inputs) {
        return validateResponsesForInputs(input.inputs, response)
    }

    if (input.regex && !isEmpty(response)) {
        var re = new RegExp(input.regex);
        return re.test(response);
    }

    if (input.required) {
        return !isEmpty(response);
    }

    return true
}

function validateResponsesForInputs(inputs, response) {
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.hidden) {
            if (input.key == 'pincode') debugger;
            isValid = validateResponseForInput(input, response[input.key]) && isValid;
        }
    });
    return isValid;
}

module.exports = {
    validateResponsesForInputs: validateResponsesForInputs,
    validateResponseForInput: validateResponseForInput,
    defaultResponseForInput: defaultResponseForInput
};