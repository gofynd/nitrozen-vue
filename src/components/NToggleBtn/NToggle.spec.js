import { mount } from '@vue/test-utils';
import NToggleBtn from './NToggleBtn.vue';
import NIcon from '../NIcon';
import NUuid from '../../utils/NUuid';

describe('Toggle Button Component', () => {
  it('should render simple toggle with all clasess', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NToggleBtn, {
        components:{NIcon},
        slots:{
            default: 'Twitter',
            icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`
        },
      propsData: {
        id: `n-toggle-${id}`,
        state: 'default',
        stateMessage: 'You\'ve checked twitter',
        value: true,
        disabled: false,
        change,
        input: _input,
        showIcon: true
      },
    });

    const span = wrapper.findComponent(`span`);
    const input = wrapper.findComponent(`input`);
    const icon = wrapper.findComponent(`n-toggle-icon`);
    expect(wrapper.element.className).toContain('n-toggle-container');
    expect(wrapper.element.className).not.toContain(
      'n-toggle-container-disabled'
    );
    expect(span.element.className).toContain(`n-slider n-round checked`);
    expect(input.element.className).toContain(`n-toggle-input`);
    expect(wrapper.element.innerHTML).toContain(`Twitter`);
    expect(icon).toBeDefined();
  });
  it('should emit events', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NToggleBtn, {
        components:{NIcon},
        slots:{
            default: 'Twitter',
            icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`
        },
      propsData: {
        id: `n-toggle-${id}`,
        state: 'default',
        stateMessage: 'You\'ve checked twitter',
        value: true,
        disabled: false,
        change,
        input: _input,
        showIcon: true
      },
    });
    wrapper.vm.$emit('change', {});
    wrapper.vm.$emit('input', true);
    expect(wrapper.emitted().change[0]).toEqual([{}]);
    expect(wrapper.emitted().input[0]).toEqual([true]);
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().change.length).toBe(1);
  });
  it('should contain size class', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();
    const size = "small";
    const wrapper = mount(NToggleBtn, {
        components:{NIcon},
        slots:{
            default: 'Twitter',
            icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`
        },
      propsData: {
        id: `n-toggle-${id}`,
        state: 'default',
        size,
        stateMessage: 'You\'ve checked twitter',
        value: true,
        disabled: false,
        change,
        input: _input,
        showIcon: true
      },
    });
    const smallIcon = wrapper.findComponent(`social-icon-${size}`);
    const label = wrapper.findComponent(`label`);    
    expect(smallIcon).toBeDefined;
    expect(label.element.className).toContain(size)
  });
});
