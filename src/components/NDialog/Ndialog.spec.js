import { mount } from "@vue/test-utils";
import NDialog from './NDialog.vue';

describe('Dialog Component', () => {

    it('should render an element that has kind as dialog and m as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'dialog',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 'm'
            }
        });
        expect(wrapper.props('size')).toBe('m');
        expect(wrapper.props('kind')).toBe('dialog');
    });
    it('should render an element that has kind as dialog and s as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'dialog',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 's'
            }
        });
        expect(wrapper.props('size')).toBe('s');
        expect(wrapper.props('kind')).toBe('dialog');
    });
    it('should render an element that has kind as acknowledgement and m as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'acknowledgement',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 'm'
            }
        });
        expect(wrapper.props('size')).toBe('m');
        expect(wrapper.props('kind')).toBe('acknowledgement');
    });
    it('should render an element that has kind as acknowledgement and s as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'acknowledgement',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 's'
            }
        });
        expect(wrapper.props('size')).toBe('s');
        expect(wrapper.props('kind')).toBe('acknowledgement');
    });
    it('should render an element that has kind as informational and s as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'informational',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 's'
            }
        });
        expect(wrapper.props('size')).toBe('s');
        expect(wrapper.props('kind')).toBe('informational');
    });
    it('should render an element that has kind as acknowledgement and m as size', () => {
        const wrapper = mount(NDialog, {
            propsData: {
                title: 'Are you sure you would like to proceed?',
                kind : 'informational',
                body : 'Eget duis vulputate enim, iaculis ac faucibus magna faucibus. Magna elementum eu nibh non arcu eu, dolor nunc lacus. Vel eget augue vulputate aliquam. Ut facilisi egestas nec nunc. At maecenas placerat mauris pulvinar iaculis metus, dictum.',
                size : 'm'
            }
        });
        expect(wrapper.props('size')).toBe('m');
        expect(wrapper.props('kind')).toBe('informational');
    });
})