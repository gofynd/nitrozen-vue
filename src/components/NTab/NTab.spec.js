import { mount } from '@vue/test-utils';
import NTab from './NTab.vue';
import NTabItem from '../NTabItem';

describe('Tab Component', () => {
  it('should display tab', () => {
    const wrapper = mount(NTab, {
      propsData: {
        id: 1,
        activeIndex: 0,
        tabItem:[]
      },
    });
    expect(wrapper.props('id')).toBe(1);
    expect(wrapper.props('activeIndex')).toBe(0);
  });
  it('should contain tab item ', () => {
    const wrapper = mount(NTab, {
      propsData: {
        id: 1,
        tabItem: [{ label: 'tab1', icon: 'icon1' }],
      },
    });
    expect(wrapper.findComponent(NTabItem).exists()).toBeTruthy();
  });
});
