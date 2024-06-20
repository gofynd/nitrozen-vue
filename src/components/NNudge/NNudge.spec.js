import { mount } from '@vue/test-utils';
import NNudge from './NNudge.vue';

describe('Nudge Component', () => {
  it('should render simple nudge with all clasess', async () => {

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
  });

})