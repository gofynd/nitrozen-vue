import { mount } from '@vue/test-utils';
import NitrozenInput from './NInput.vue';

describe('Input Component', () => {
  it('displays Input', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        name: 'rectangle',
      },
    });
    expect(wrapper.find('input').exists()).toBeTruthy();
  });
});
