function defaultResponseForInput(input) {
    let value = undefined;
    if (input.type == "radio") {
        if (input.default) {
            value = input.default;
        } else if (input.enum.length) {
            value = input.enum[0].key;
        }
    } else if (input.type == "checkbox") {
        value = [];
    } else if (
        input.type == "text" ||
        input.type == "email" ||
        input.type == "number"
    ) {
        value = "";
    } else if (input.type == "mobile") {
        value = "";
    } else if (input.type == "object") {
        const subResponse = {};
        input.inputs.forEach((io) => {
            subResponse[io.key] = defaultResponseForInput(io);
        });
        value = subResponse;
    } else if (input.type == "array") {
        value = [];
    }

    const errorText = input.error_message || "Please enter " + input.display;

    return {
        value: value,
        showerror: false,
        errortext: errorText,
    };
}

module.exports = {
    defaultResponseForInput: defaultResponseForInput
};