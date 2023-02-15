/* Component imports */
import NitrozenAlert from './NAlert.vue';

export default {
    title: 'Components/Alert',
    component: NitrozenAlert,
    argTypes: {
        alertWidth: {
            control: 'text',
            description: `This property sets the width of an alert.`
        },
        buttonText: {
            control: 'text',
            description: `This property sets the text of the button, if the button is displayed.`
        },
        buttonType: {
            control: 'select',
            description: `This property sets the shape of the button, as a linked text or a rectangle box.`,
            options: ['button', 'default', 'link']
        },
        displayButton: {
            control: 'boolean',
            description: `This property decides whether the button should be displayed or hidden.`
        },
        extendedAlert: {
            control: 'boolean',
            description: `This property decides whether the alert should be shown in an extended format, like a card.`
        },
        fullWidth: {
            control: 'boolean',
            defaultValue: true,
            description: `This property decides whether the component should take up the entire width of its parent component.`
        },
        href: {
            control: 'text',
            description: `This property will be the URL that needs to be navigated to on the click of a link button, in scenarios where the button type is selected as a link.`
        },
        labelText: {
            control: 'text',
            description: `This property will set the value of the label in the alert.`
        },
        linkText: {
            control: 'text',
            description: `This property will set the value of the link button for scenarios where the button type is a link.`
        },
        loader: {
            control: 'boolean',
            description: `This property decides if the alert needs to be displayed as a loader.`
        },
        state: {
            name: 'state',
            control: 'select',
            defaultValue: 'info',
            description: `This property decides the state of the alert.`,
            options: ['error', 'info', 'success', 'warn'],
            type: {
                name: 'string',
                required: true
            }
        }
    }
};

const Template = (args, {argTypes}) => ({
    components: { NitrozenAlert },
    props: Object.keys(argTypes),
    template: `
        <div 
            class="main-div space-between"
            style="display:flex; justify-content:space-evenly; flex-wrap:wrap; gap:0.4em;">
            <nitrozen-alert v-bind="$props" classNames="my-alert">
                This is a stateless (default) alert. Any change in the controls below will change this alert.
            </nitrozen-alert> 
            <nitrozen-alert v-bind="$props" state="error">
                This is an error alert.
            </nitrozen-alert> 
            <nitrozen-alert v-bind="$props" state="info">
                This is an informational alert.
            </nitrozen-alert> 
            <nitrozen-alert v-bind="$props" state="success">
                This is a success alert.
            </nitrozen-alert> 
            <nitrozen-alert v-bind="$props" state="warn">
                This is a warning alert.
            </nitrozen-alert> 
        </div>
    `
});

/**
 * An alert without a button
 */
export const ButtonLessAlert = Template.bind({});
ButtonLessAlert.args = {
    displayButton: false
};
ButtonLessAlert.storyName = 'Alert without button';

/**
 * An alert with a button
 */
export const ButtonAlert = Template.bind({});
ButtonAlert.args = {
    buttonText: "Accept",
    buttonType: "default",
    displayButton: true
};
ButtonAlert.storyName = "Alert with button";

/**
 * An alert with a link button
 */
export const ButtonLink = Template.bind({});
ButtonLink.args = {
    buttonType: "link",
    displayButton: true,
    href: "https://www.google.com",
    linkText: "Next"
};
ButtonLink.storyName = "Alert with link";

/**
 * An alert with full width and without a button
 */
export const AlertFullWidth = Template.bind({});
AlertFullWidth.args = {
    displayButton: false,
    fullWidth: true
};
AlertFullWidth.storyName = "Alert without button and with full width";

/**
 * An alert without a button and without a full width (width set to auto)
 */
export const AlertAutoWidth = Template.bind({});
AlertAutoWidth.args = {
    displayButton: false,
    fullWidth: false
};
AlertAutoWidth.storyName = "Alert without button and without full width";

/**
 * An alert with a set width
 */
export const AlertSetWidth = Template.bind({});
AlertSetWidth.args = {
    alertWidth: "45%",
    displayButton: false,
    fullWidth: false
};
AlertSetWidth.storyName = "Alert without button and with a set width";

/**
 * An alert with a button and auto width
 */
export const ButtonAlertAutoWidth = Template.bind({});
ButtonAlertAutoWidth.args = {
    buttonType: "button",
    buttonText: "Click",
    displayButton: true,
    fullWidth: false
};
ButtonAlertAutoWidth.storyName = "Alert with button and without full width";

/**
 * An extended alert without a button
 */
export const ButtonLessExtendedAlert = Template.bind({});
ButtonLessExtendedAlert.args = {
    extendedAlert: true
};
ButtonLessExtendedAlert.storyName = "Extended Alert without button";

/**
 * An extended alert with a button
 */
export const ButtonExtendedAlert = Template.bind({});
ButtonExtendedAlert.args = {
    buttonText: 'Click',
    displayButton: true,
    extendedAlert: true
};
ButtonExtendedAlert.storyName = "Extended Alert with button";

/**
 * An alert with a loader
 */
export const LoaderAlert = Template.bind({});
LoaderAlert.args = {
    loader: true
};
LoaderAlert.storyName = "Alert with loader";

/**
 * An alert with custom class-name
 */
export const AlertCustomClass = Template.bind({});
AlertCustomClass.args = {
    className: "nitrozen-custom-class",
};
AlertCustomClass.storyName = "Alert with a custom classname";
