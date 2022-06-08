import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('CatDetailsCard.vue', () => {
  it('renders router link on navbar', () => {
    const wrapper = shallowMount(Navbar);

    expect(wrapper.findAll('router-link').length).toBe(3);
    expect(wrapper.findAll('#nav router-link').length).toBe(2);
    expect(wrapper.findAll('.app-name router-link').length).toBe(1);
  });

  it('should navigate to appropriate route', () => {
    const wrapper = shallowMount(Navbar);

    expect(wrapper.findAll('.app-name router-link').length).toBe(1);
  });
});
