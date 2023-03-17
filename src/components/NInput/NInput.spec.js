import { mount } from '@vue/test-utils';
import NitrozenInput from './NInput.vue';
import NValidation from './../NValidation';

describe('Input Component', () => {
  it('displays Input', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        helperText:
          'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
        label: 'Enter your name',
        disabled: false,
        autocomplete: 'off',
        type: 'text',
        placeholder: 'Your full name please',
      },
    });
    expect(wrapper.getComponent('input').exists()).toBeTruthy();
  });
  it('should trigger change in the input component and check for markup', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        helperText:
          'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
        label: 'Enter your name',
        disabled: false,
        autocomplete: 'off',
        type: 'text',
        placeholder: 'Your full name please',
      },
    });
    expect(wrapper.getComponent('.n-helper-text').text()).toBe(
      'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character'
    );
    let input = wrapper.getComponent('.input-text');
    expect(input.exists()).toBeTruthy();
    expect(wrapper.getComponent('.input-text').element.textContent).toBe('');
    input.trigger('abc');
  });
  it('should check or markup with prefix and suffix props', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        helperText:
          'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
        label: 'Enter your name',
        disabled: false,
        autocomplete: 'off',
        type: 'text',
        placeholder: 'Your full name please',
        showPrefix: true,
        prefix: 'abc',
        showSuffix: true,
        suffix: 'efg',
      },
    });
    expect(wrapper.getComponent('.nitrozen-input-prefix').text()).toBe('abc');
    expect(wrapper.getComponent('.nitrozen-input-suffix').text()).toBe('efg');
  });
  it('should check or markup with type as textarea', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        helperText:
          'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
        label: 'Enter your name',
        disabled: false,
        autocomplete: 'off',
        type: 'textarea',
        placeholder: 'Your full name please',
        showPrefix: true,
        prefix: 'abc',
        showSuffix: true,
        suffix: 'efg',
      },
    });
    expect(wrapper.getComponent('textarea').exists()).toBeTruthy();
  });
  it('should check or markup for validation state', () => {
    const wrapper = mount(NitrozenInput, {
      propsData: {
        helperText:
          'It must contain a minimum of 8 characters and include at least 1 small case letter, 1 capital letter and 1 special character',
        label: 'Enter your name',
        disabled: false,
        autocomplete: 'off',
        validationState: 'success',
        validationMessage: 'I am a message',
      },
    });
    expect(wrapper.getComponent(NValidation).exists()).toBeTruthy();
  });
});
