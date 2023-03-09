/* Package imports */
import { mount } from "@vue/test-utils";

/* Component imports */
import NTooltip from './NTooltip.vue';

describe('Tooltip Component', () => {
    it('should render tooltip', () => {
        const wrapper = mount(NTooltip, {
            propsData: {
                position: 'top',
                tooltipText:'This is a tooltip'
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render an element that receives correct props', () => {
        const wrapper = mount(NTooltip, {
            propsData: {
                position: 'top',
                tooltipText:'This is a tooltip'
            }
        });
        expect(wrapper.props('position')).toBe('top');
    });
})
