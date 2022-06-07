import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('renders about page', () => {
    const wrapper = shallowMount(About);
    
    expect(wrapper.text()).toContain('about');
  });
});
