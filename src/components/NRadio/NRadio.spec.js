import { mount } from '@vue/test-utils';
import NRadio from './NRadio.vue';
import NIcon from '../NIcon';
import NUuid from '../../utils/NUuid';
import NValidation from '../NValidation';

describe('Radio Component', () => {
  it('should render simple radio with all clasess', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NRadio, {
      components: { NIcon },
      slots: {
        default: 'Twitter',
        icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`,
      },
      propsData: {
        id: `n-radio-${id}`,
        state: 'default',
        stateMessage: "You've selected twitter",
        value: 'twitter',
        radioValue: 'twitter',
        disabled: false,
        change,
        input: _input,
        showIcon: true,
        name: `n-radio-name`,
      },
    });

    const input = wrapper.findComponent(`n-radio-input`);
    const label = wrapper.findComponent(`n-radio-label`);
    const icon = wrapper.findComponent(`n-radio-icon`);
    expect(wrapper.element.className).toContain('n-radio-group');
    expect(input.disabled).not.toBe(true);
    expect(wrapper.element.innerHTML).toContain(`Twitter`);
    expect(icon).toBeDefined();
    expect(input).toBeDefined();
    expect(label).toBeDefined();
  });
  it('should emit events', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NRadio, {
      components: { NIcon },
      slots: {
        default: 'Twitter',
        icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`,
      },
      propsData: {
        id: `n-radio-${id}`,
        state: 'default',
        stateMessage: "You've selected twitter",
        value: 'twitter',
        radioValue: 'twitter',
        disabled: false,
        change,
        input: _input,
        showIcon: true,
        name: `n-radio-name`,
      },
    });
    wrapper.vm.$emit('input', true);
    wrapper.vm.$emit('change', false);

    expect(wrapper.emitted().input[0]).toEqual([true]);
    expect(wrapper.emitted().change[0]).toEqual([false]);
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().change.length).toBe(1);


  });
  it('should render render correct validation class', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NRadio, {
      components: { NIcon },
      slots: {
        default: 'Twitter',
        icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`,
      },
      propsData: {
        id: `n-radio-${id}`,
        state: 'error',
        stateMessage: "You've selected twitter",
        value: 'twitter',
        radioValue: 'twitter',
        disabled: false,
        change,
        input: _input,
        showIcon: true,
        name: `n-radio-name`,
      },
    });

    const validation = wrapper.findComponent(NValidation);
    expect(validation).toBeDefined()
    expect(validation?.vm?.validationState).toBe('error')
});
})