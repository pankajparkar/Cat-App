import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
    describe('Mounted App', () => {
        const wrapper = mount(App);
      
        test('does a wrapper exist', () => {
          expect(wrapper.exists()).toBe(true)
        });

        it('renders the correct layout', () => {
            expect(wrapper.find('a-layout-header').exists()).toBe(true);
            expect(wrapper.find('a-layout-footer').exists()).toBe(true);
            expect(wrapper.find('a-layout-content').exists()).toBe(true);
        });
    })
});