import { mount } from '@vue/test-utils';
import NTabItem from './NTabItem.vue';
import NInline from '../NInline';

describe('Tab Item Component', () => {
  it('should display tab item', () => {
    const wrapper = mount(NTabItem, {
      propsData: {
        id: 1,
      },
    });
    expect(wrapper.props('id')).toBe(1);
  });
  it('should display tab item with an icon', () => {
    const wrapper = mount(NTabItem, {
      propsData: {
        id: 'success',
        icon: 'success',
      },
    });
    expect(wrapper.findComponent(NInline).exists()).toBeTruthy();
  });
});
