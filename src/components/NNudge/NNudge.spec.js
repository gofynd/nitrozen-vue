import { mount } from '@vue/test-utils';
import NNudge from './NNudge.vue';
import NUuid from '../../utils/NUuid';

describe('Nudge Component', () => {
  it('should render simple radio with all clasess', async () => {
    const id = NUuid();
    const change = jest.fn();
    const _input = jest.fn();

    const wrapper = mount(NNudge, {
      propsData: {
        cta1: 'Register Now',
        cta2: "View More",
        heading: 'twitter',
        supportText: 'I am support text',
        duration: 4000,
      },
    });

    wrapper.vm.open()
    expect(wrapper.vm.nudgeList.length > 0).toBe(true)
    // expect(wrapper.classes('active')).toBe(true)
  });

})