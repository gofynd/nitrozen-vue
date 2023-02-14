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
        <div>
            <nitrozen-alert v-bind="$props">
                This is an alert
            </nitrozen-alert> 
        </div>
    `
});

export const ButtonLessAlert = Template.bind({});
ButtonLessAlert.args = {
    displayButton: false
};
ButtonLessAlert.storyName = 'Alert without button';
