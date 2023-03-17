import { mount } from '@vue/test-utils'
import NBadge from './NBadge.vue'
import NIcon from '../NIcon'

describe('Badge Component', () => {
    it('should display success badge', () => {
        const wrapper = mount(NBadge, {
            propsData: {
                state: 'success'
            }
        })
        expect(wrapper.props('state')).toBe('success')
    })
    it('should display success badge with an icon', () => {
        const wrapper = mount(NBadge, {
            propsData: {
                state: 'success',
                icon: 'success'
            }
        })
        expect(wrapper.findComponent(NIcon).exists()).toBeTruthy() 
    })
})