import { mount } from '@vue/test-utils';
import NChips from './NChips.vue';

describe('Chips Component', () => {
  it('should render successful validation component', () => {
    const wrapper = mount(NChips, {
      propsData: {
        disable: false,
        deletable: false,
        theme: 'primary',
        inProgress: false,
        isRounded: true,
      },
    });
    expect(wrapper.props('disable')).toBe(false);
    expect(wrapper.props('deletable')).toBe(false);
    expect(wrapper.props('theme')).toBe('primary');
    expect(wrapper.props('inProgress')).toBe(false);
    expect(wrapper.props('isRounded')).toBe(true);
  });
  it('should render successful validation component', () => {
    const wrapper = mount(NChips, {
      propsData: {
        disable: false,
        deletable: false,
        theme: 'primary',
        inProgress: false,
        isRounded: true,
      },
    });
    expect(wrapper.find('.ripple').selector).toBe('.ripple');
  });
});
