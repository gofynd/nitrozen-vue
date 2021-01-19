import InputTypes from "./InputTypes.js";

function defaultResponseForInput(input) {
    switch (input.type) {
        case InputTypes.text.key:
        case InputTypes.textarea.key:
        case InputTypes.email.key:
            return input.default || "";
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
            if (input.default) {
                return input.default
            }
            return [];
        default:
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
            let isTextValid = true
            
            if (input.regex && !isEmptyString(response)) {
                var re = new RegExp(input.regex);
                isTextValid = re.test(response) && isTextValid;
            }

            if (isTextValid && input.required) {
                isTextValid = !isEmptyString(response) && isTextValid;
            }

            if (isTextValid && input.min_length) {
                isTextValid = input.min_length <= response.length && isTextValid;
            }
            
            if (isTextValid && input.max_length) {
                isTextValid = input.max_length >= response.length && isTextValid;
            }

            return isTextValid;
        case InputTypes.number.key:
            let isNumberValid = true
            if (input.min) {
                isNumberValid = input.min <= response && isNumberValid
            }
            if (isNumberValid && input.max) {
                isNumberValid = input.max >= response && isNumberValid
            }
            return isNumberValid;
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
            return true;
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
                isValid = validateResponseForInput(input.input, element) && isValid;
            });
            return isValid;
        default:
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

function validateInput(input, skipKey = false) {
    if (!input.type) {
        return false
    }

    // if (!input.key && !skipKey) {
    //     return false
    // }

    // if (skipKey && input.key) {
    //     return false
    // }

    if (input.required != undefined && input.required != true && input.required != false) {
        return false
    }

    switch (input.type) {
        case InputTypes.text.key:
        case InputTypes.textarea.key:
        case InputTypes.email.key:
            return true;
        case InputTypes.number.key:
            return true;
        case InputTypes.radio.key:
        case InputTypes.dropdown.key:
        case InputTypes.checkbox.key:
            if (!input.enum || input.enum.length == 0) {
                return false;
            }
            return true;
        case InputTypes.mobile.key:
            return true;
        case InputTypes.toggle.key:
            return true;
        case InputTypes.object.key:
            if (!input.inputs || input.inputs.length == 0) {
                return false;
            }
            let isValid = true
            input.inputs.forEach(io => {
                isValid = validateInput(io) && isValid;
            });
            return isValid;
        case InputTypes.array.key:
            return validateInput(input.input, true);
        default:
            return false
    }
}

export {
    validateResponsesForInputs,
    validateResponseForInput,
    defaultResponseForInput,
    validateInput,
};