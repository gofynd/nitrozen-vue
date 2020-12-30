import InputTypes from "./InputTypes.js";

function defaultResponseForInput(input) {
    switch (input.type) {
        case InputTypes.text.key:
        case InputTypes.textarea.key:
        case InputTypes.email.key:
        case InputTypes.number.key:
            if (input.default || input.default == 0) {
                return input.default;
            }
            return null;
        case InputTypes.radio.key:
            if (input.default) {
                return input.default;
            } else if (input.enum.length) {
                return input.enum[0].key;
            }
            return null;
        case InputTypes.dropdown.key:
            if (input.default) {
                return input.default;
            }
            return null;
        case InputTypes.checkbox.key:
            if (input.default) {
                return input.default;
            }
            return [];
        case InputTypes.mobile.key:
            if (input.default) {
                return input.default;
            }
            return {
                code: 91,
                number: ""
            };
        case InputTypes.toggle.key:
            if (input.default) {
                return input.default
            }
            return false;
        case InputTypes.object.key:
            const subResponse = {};
            input.inputs = input.inputs || []
            input.inputs.forEach((io) => {
                subResponse[io.key] = defaultResponseForInput(io);
            });
            return subResponse;
        case InputTypes.array.key:
            return [];
        default:
            console.log(input.type + 'Unknown input type detected')
            return undefined
    }
}

function isEmptyString(value) {
    return value == undefined || value == null || value.trim() == "";
}

function validateResponseForInput(input, response) {
    switch (input.type) {
        case InputTypes.text.key:
        case InputTypes.textarea.key:
        case InputTypes.email.key:
        case InputTypes.number.key:
            if (input.regex && !isEmptyString(response)) {
                var re = new RegExp(input.regex);
                return re.test(response);
            }
            if (input.required) {
                return !isEmptyString(response);
            }
        case InputTypes.radio.key:
            if (input.required) {
                return response != null;
            }
            return true;
        case InputTypes.dropdown.key:
            if (input.required) {
                return response != null;
            }
            return true;
        case InputTypes.checkbox.key:
            if (input.required) {
                return Array.isArray(response) && response.length;
            }
            return true;
        case InputTypes.mobile.key:
            if (input.regex && !isEmptyString(response.number)) {
                var re = new RegExp(input.regex);
                return re.test(response.number);
            }
            if (input.required) {
                return !isEmptyString(response.number);
            }
        case InputTypes.toggle.key:
            return true;
        case InputTypes.object.key:
            return validateResponsesForInputs(input.inputs, response);
        case InputTypes.array.key:
            let isValid = true
            if (input.min) {
                isValid = input.min <= response.length && isValid
            }
            if (isValid && input.max) {
                isValid = input.max >= response.length && isValid
            }
            response.forEach(element => {
                isValid =  validateResponseForInput(input.input, element) && isValid;
            });
            return isValid;
        default:
            console.log(input.type + 'Unknown input type detected')
            return false
    }
}

function validateResponsesForInputs(inputs, response) {
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.hidden) {
            isValid = validateResponseForInput(input, response[input.key]) && isValid;
        }
    });
    return isValid;
}

export {
    validateResponsesForInputs,
    validateResponseForInput,
    defaultResponseForInput,
};