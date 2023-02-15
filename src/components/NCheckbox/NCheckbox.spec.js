import { mount } from '@vue/test-utils';
import NCheckbox from './NCheckbox.vue';
import NIcon from '../NIcon';
import NUuid from '../../utils/NUuid';

describe('Checkbox Component', () => {
  it('should render simple checkbox with all clasess', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NCheckbox, {
        slots:{
            default: 'Twitter',
            icon: `<template><NIcon name='twitter' color='#2e2e2e'/></template>`
        },
      propsData: {
        id: `n-checkbox-${id}`,
        state: 'default',
        stateMessage: 'You\'ve checked twitter',
        checkboxValue: true,
        value: true,
        showIcon: false,
        isIndeterminate: false,
        disabled: false,
        change,
        input: _input,
        showIcon: true
      },
    });

    const span = wrapper.find(`span`);
    const input = wrapper.find(`input`);
    const icon = wrapper.find(`n-checkbox-icon`);
    expect(wrapper.element.className).toContain('n-checkbox-container');
    expect(wrapper.element.className).not.toContain(
      'n-checkbox-container-disabled'
    );
    expect(span.element.className).toContain(`n-checkbox`);
    expect(input.element.className).toContain(`n-checkbox-input`);
    expect(wrapper.element.innerHTML).toContain(`Twitter`);
    expect(icon).toBeDefined();
  });
});
