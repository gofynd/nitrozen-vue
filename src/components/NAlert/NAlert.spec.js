/* Package imports */
import { mount } from "@vue/test-utils";

/* Component imports */
import NAlert from './NAlert.vue';
import NIcon from "../NIcon";

describe('Alert Component', () => {
    it('should render an alert component with a given state', () => {
        const wrapper = mount(NAlert, {
            propsData: {
                state: 'info'
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render an element that receives correct props', () => {
        const wrapper = mount(NAlert, {
            propsData: {
                state: 'info'
            }
        });
        expect(wrapper.props('state')).toBe('info');
    });

    it('should display success badge with an icon', () => {
        const wrapper = mount(NAlert, {
            propsData: {
                state: 'success'
            }
        })
        expect(wrapper.findComponent(NIcon).exists()).toBeTruthy();
    })

    it('should render the correct element based on the props received', () => {
        const wrapper = mount(NAlert, {
            propsData: {
                state: 'info'
            }
        });
        let component = wrapper.find('.n-alert');
        expect(component.classes()).toContain('n-alert-info');
    });

    it('should render an alert component with the given width if the user has provided a value using alertWidth', () => {
        const wrapper = mount(NAlert, {
            propsData: {
                alertWidth: '35%',
                state: 'success'
            }
        });
        let component = wrapper.find('.n-alert');
        expect(component.element.style.width).toBe('35%');
    });

    it('should make the component into an extended alert if the user has provided the flag', () => {
        let extendedAlert = true;
        const wrapper = mount(NAlert, {
            propsData: {
                extendedAlert,
                state: 'success'
            }
        });
        let component = wrapper.find('.n-alert-content');
        expect(component.classes()).toContain('n-alert-extended');
    });

    it('should have a full width if the user has set the fullWidth flag to true', () => {
        let fullWidth = true;
        const wrapper = mount(NAlert, {
            propsData: {
                fullWidth,
                state: 'success'
            }
        });
        let component = wrapper.find('.n-alert');
        expect(component.classes()).toContain('n-alert-full-width');
    });

    it('should show a button if the user has enabled the displayButton flag', () => {
        let displayButton = true;
        const wrapper = mount(NAlert, {
            propsData: {
                displayButton,
                state: 'warn'
            }
        });
        let component = wrapper.find('.n-alert-button-container');
        expect(component.exists()).toBe(true);
    });

    it('should show a link button if the user has specified "link" as the type of the button', () => {
        let displayButton = true;
        const wrapper = mount(NAlert, {
            propsData: {
                buttonType: 'link',
                displayButton,
                state: 'warn'
            }
        });
        let component = wrapper.find('.n-alert-link');
        expect(component.exists()).toBe(true);
    });

    it('should not show a button if the user has passed true to the loader props', () => {
        let displayButton = true;
        let loader = true;
        const wrapper = mount(NAlert, {
            propsData: {
                buttonType: 'link',
                displayButton,
                loader,
                state: 'warn'
            }
        });
        let component = wrapper.find('.n-alert-button-container');
        expect(component.exists()).toBe(false);
    });

    it('should show a loader if the user has passed true to the loader props', () => {
        let displayButton = true;
        let loader = true;
        const wrapper = mount(NAlert, {
            propsData: {
                buttonType: 'link',
                displayButton,
                loader,
                state: 'warn'
            }
        });
        let component = wrapper.find('.n-alert-loader');
        expect(component.exists()).toBe(true);
    });
})
