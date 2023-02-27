import { mount } from '@vue/test-utils';
import NCode from './NCode.vue';
import NValidation from './../NValidation';
import NTooltip from './../NTooltip';

describe('Nitrozen Code Component', () => {
  it('should render successful validation component', () => {
    const wrapper = mount(NCode, {
      propsData: {
        label: 'OTP label',
        fields: 4,
        codeId: 'custom-code',
        type: 'text',
        helperText: 'helper',
        required: true,
      },
    });
    expect(wrapper.props('label')).toBe('OTP label');
    expect(wrapper.props('fields')).toBe(4);
    expect(wrapper.props('codeId')).toBe('custom-code');
    expect(wrapper.props('type')).toBe('text');
    expect(wrapper.props('helperText')).toBe('helper');
    expect(wrapper.props('required')).toBe(true);
  });
  it('should contain validation component', () => {
    const wrapper = mount(NCode, {
      propsData: {
        label: 'OTP label',
        fields: 4,
        codeId: 'custom-code',
        type: 'text',
        helperText: 'helper',
        required: true,
        hideValidation: false,
        validationLabel: 'Val label',
        validationState: 'success',
      },
    });
    const k = wrapper.findComponent(NValidation).props()
    expect(wrapper.findComponent(NValidation)).toBeDefined();
    expect(wrapper.findComponent(NValidation).props()).toStrictEqual({
      isHidden: false,
      label: 'Val label',
      size: 16,
      validationState: 'success',
    });
  });
  it('should contain tooltip component', () => {
    const wrapper = mount(NCode, {
      propsData: {
        label: 'OTP label',
        fields: 4,
        codeId: 'custom-code',
        type: 'text',
        helperText: 'helper',
        tooltip: 'I am a tooltip',
      },
    });
    expect(wrapper.findComponent(NTooltip)).toBeDefined()
    expect(wrapper.findComponent(NTooltip).props()).toStrictEqual({
      icon: 'info',
      position: 'right',
      tooltipText: 'I am a tooltip',
    });
  });
  it('should check for input fields', async () => {
    const wrapper = mount(NCode, {
      propsData: {
        label: 'OTP label',
        fields: 4,
        codeId: 'otp-code',
        type: 'text',
        helperText: 'helper',
      },
    });
    expect(wrapper.props('fields')).toBe(4);
    await wrapper.setData({ codeArr: ['', '', '', ''] });
    expect(wrapper.findComponent('.n-code-input-field').exists()).toBe(true);
    const input = wrapper.findComponent('.n-code-input-field');
    input.trigger('1');
    await wrapper.vm.$nextTick();
  });
});
