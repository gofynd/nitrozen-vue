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
        return input.default;
      }
      return false;
    case InputTypes.object.key:
      const subResponse = {};
      input.inputs = input.inputs || [];
      input.inputs.forEach(io => {
        subResponse[io.key] = defaultResponseForInput(io);
      });
      return subResponse;
    case InputTypes.array.key:
      if (input.default) {
        return input.default;
      }
      return [];
    default:
      return undefined;
  }
}

function isEmptyString(value) {
  return value == undefined || value == null || value.trim() == "";
}

function validateResponseForInput(input, response) {
  const inputDisplay = isEmptyString(input.display)
    ? "this input"
    : input.display;
  let errorMessage = input.error_message || "Please enter " + inputDisplay;
  if (
    [
      InputTypes.dropdown.key,
      InputTypes.checkbox.key,
      InputTypes.radio.key
    ].includes(input.type)
  ) {
    errorMessage = input.error_message || "Please select " + inputDisplay;
  } else if (input.type == InputTypes.array.key) {
    errorMessage = input.error_message || "Please add " + inputDisplay;
  }

  let isValid = true;

  switch (input.type) {
    case InputTypes.text.key:
    case InputTypes.textarea.key:
    case InputTypes.email.key:
      if (input.regex && !isEmptyString(response)) {
        var re = new RegExp(input.regex);
        isValid = re.test(response) && isValid;

        if (!isValid) {
          errorMessage = "Please enter valid " + inputDisplay;
        }
      }

      if (isValid && input.required) {
        isValid = !isEmptyString(response) && isValid;

        if (!isValid) {
          errorMessage = "Please enter " + inputDisplay;
        }
      }

      if (isValid && input.min_length) {
        isValid = input.min_length <= response.length && isValid;

        if (!isValid) {
          errorMessage =
            "Minimum length required is " +
            input.min_length +
            " for " +
            inputDisplay;
        }
      }

      if (isValid && input.max_length) {
        isValid = input.max_length >= response.length && isValid;

        if (!isValid) {
          errorMessage =
            "Max length is " + input.max_length + " for " + inputDisplay;
        }
      }

      return { isValid, errorMessage };
    case InputTypes.number.key:
      if (input.min) {
        isValid = input.min <= response && isValid;

        if (!isValid) {
          errorMessage =
            "Minimum value is " + input.min + " for " + inputDisplay;
        }
      }
      if (isValid && input.max) {
        isValid = input.max >= response && isValid;

        if (!isValid) {
          errorMessage =
            "Maximum value is " + input.max + " for " + inputDisplay;
        }
      }
      return { isValid, errorMessage };
    case InputTypes.radio.key:
      if (input.required) {
        isValid = response != null;
      }
      return { isValid, errorMessage };
    case InputTypes.dropdown.key:
      if (input.required) {
        isValid = response != null;
      }
      return { isValid, errorMessage };
    case InputTypes.checkbox.key:
      if (input.required) {
        isValid = Array.isArray(response) && response.length;
      }
      return { isValid, errorMessage };
    case InputTypes.mobile.key:
      if (input.regex && !isEmptyString(response.number)) {
        var re = new RegExp(input.regex);
        isValid = re.test(response.number);
      }
      if (isValid && input.required) {
        isValid = !isEmptyString(response.number) && isValid;

        if (!isValid) {
          errorMessage = "Please enter " + inputDisplay;
        }
      }
      return { isValid, errorMessage };
    case InputTypes.toggle.key:
      return { isValid, errorMessage };
    case InputTypes.object.key:
      isValid = validateResponsesForInputs(input.inputs, response);
      return { isValid, errorMessage };
    case InputTypes.array.key:
      if (input.min) {
        isValid = input.min <= response.length && isValid;

        if (!isValid) {
          errorMessage =
            "Minimum limit for " + inputDisplay + " is " + input.min;
        }
      }
      if (isValid && input.max) {
        isValid = input.max >= response.length && isValid;

        if (!isValid) {
          errorMessage =
            "Maximum limit for " + inputDisplay + " is " + input.max;
        }
      }

      if (isValid) {
        response.forEach(element => {
          isValid =
            validateResponseForInput(input.input, element).isValid && isValid;
        });

        if (!isValid) {
          errorMessage = "Please check enclosed inputs";
        }
      }

      return { isValid, errorMessage };
    default:
      isValid = false;
      return { isValid, errorMessage };
  }
}

function validateResponsesForInputs(inputs, response) {
  let isValid = true;
  inputs.forEach(input => {
    if (!input.hidden) {
      isValid =
        validateResponseForInput(input, response[input.key]).isValid && isValid;
    }
  });
  return isValid;
}

function validateInput(input) {
  if (!input.type) {
    return false;
  }

  // if (!input.key && !skipKey) {
  //     return false
  // }

  // if (skipKey && input.key) {
  //     return false
  // }

  if (
    input.required != undefined &&
    input.required != true &&
    input.required != false
  ) {
    return false;
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
      return (
        input.default == undefined ||
        input.default == null ||
        input.default == true ||
        input.default == false
      );
    case InputTypes.object.key:
      if (!input.inputs || input.inputs.length == 0) {
        return false;
      }
      let isValid = true;
      input.inputs.forEach(io => {
        isValid = validateInput(io) && isValid;
      });
      return isValid;
    case InputTypes.array.key:
      return validateInput(input.input, true);
    default:
      return false;
  }
}

export {
  validateResponsesForInputs,
  validateResponseForInput,
  defaultResponseForInput,
  validateInput
};
