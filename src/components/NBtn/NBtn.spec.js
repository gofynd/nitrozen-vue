/* Package imports */
import { mount } from "@vue/test-utils";

/* Component imports */
import NBtn from './NBtn.vue';
import NIcon from "../NIcon";

describe('Button Component', () => {
    it('should render button with secondary theme and rounded', () => {
        const wrapper = mount(NBtn, {
            propsData: {
                theme: 'secondary',
                rounded:true
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render an element that receives correct props', () => {
        const wrapper = mount(NBtn, {
            propsData: {
                theme: 'secondary',
                rounded:true
            }
        });
        expect(wrapper.props('theme')).toBe('secondary');
    });
    it('should display icon within button component', () => {
        const wrapper = mount(NBtn, {
            propsData: {
                theme: 'secondary',
                rounded:true,
                icon:'facebook'
            }
        })
        expect(wrapper.findComponent(NIcon).exists()).toBeTruthy();
    })
    it('should render the correct theme for the button based on the class', () => {
        const wrapper = mount(NBtn, {
            propsData: {
                theme: 'secondary',
                rounded:true,
                icon:'facebook'
            }
        });
        let component = wrapper.find('.n-button-secondary');
        expect(component.exists()).toBe(true);
    });
    it('should have the href attribute when passed through props', () => {
        const wrapper = mount(NBtn, {
            propsData: {
                theme: 'secondary',
                rounded:true,
                href:'www.example.com'
            }
        });
        let component = wrapper.find('.n-button-secondary');
        expect(component.props('href')).toEqual('www.example.com');
    });
})
