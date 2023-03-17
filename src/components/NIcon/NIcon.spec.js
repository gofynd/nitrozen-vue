import { mount } from '@vue/test-utils'
import Icon from './NIcon.vue'

describe('Icon Component', () => {
    it('displays icon', () => {
        const wrapper = mount(Icon, {
            propsData: {
                name: 'rectangle'
            }
        })
        expect(wrapper.find('svg').exists()).toBeTruthy()
    })
})