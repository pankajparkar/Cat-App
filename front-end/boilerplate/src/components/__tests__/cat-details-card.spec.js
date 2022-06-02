import { shallowMount } from '@vue/test-utils';
import CatDetailsCard from '@/components/CatDetailsCard.vue';

describe('CatDetailsCard.vue', () => {
  it('renders props.msg when passed', () => {
    const breed = {
      
    };
    const wrapper = shallowMount(CatDetailsCard, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
