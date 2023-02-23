import { mount } from '@vue/test-utils'
import NValidation from './NValidation.vue'
import NIcon from '../NIcon'

describe('Validation Component', () => {
    it('should render successful validation component', () => {
        const wrapper = mount(NValidation, {
            propsData: {
                isHidden: false,
                validationState: 'success',
                label: 'Success field'
            }
        })
        expect(wrapper.props('validationState')).toBe('success')
    })
    it('should not render any validation component if hidden flag is set to true', () => {
        const wrapper = mount(NValidation, {
            propsData: {
                isHidden: true,
                validationState: 'success',
                label: 'Success field'
            }
        })
        expect(wrapper.findComponent('div').exists()).toBe(false)
    })
    it('should contain icon component', () => {
        const wrapper = mount(NValidation, {
            propsData: {
                isHidden: false,
                validationState: 'error',
                label: 'Error field'
            }
        })
        expect(wrapper.contains(NIcon)).toBe(true)
    })
})