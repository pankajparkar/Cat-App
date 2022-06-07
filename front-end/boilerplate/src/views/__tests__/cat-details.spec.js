import { mount } from '@vue/test-utils';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import HereMap from '@/components/HereMap.vue';
import CatDetails from '@/views/CatDetails.vue';
import { breeds } from '@/test-helpers/mock';

const breed = breeds[0];

jest.mock('vue-router')

describe('CatDetails.vue', () => {
  test('should render online cat-details component', async () => {
    jest.spyOn(CatDetails.methods, 'fetchData')
    require('vue-router').useRoute.mockReturnValueOnce({ 
      name: 'Home',
      params: {id: 'abys'},
    });
    const wrapper = await mount(CatDetails, {
      data() {
        return { breed };
      },
      methods: {
        fetchData: jest.fn(),
      }
    });

    expect(wrapper.findComponent(HereMap).exists()).toBe(false);
    expect(wrapper.findComponent(CatDetailsCard).exists()).toBe(true);
  });

  // TODO: fill in the details
  test('should render both child components', async () => {
    jest.spyOn(CatDetails.methods, 'fetchData')
    require('vue-router').useRoute.mockReturnValueOnce({ 
      name: 'Home',
      params: {id: 'abys'},
    });
    const wrapper = await mount(CatDetails, {
      data() {
        return { breed };
      },
      methods: {
        fetchData: jest.fn(),
      }
    });

    expect(wrapper.findComponent(HereMap).exists()).toBe(false);
    expect(wrapper.findComponent(CatDetailsCard).exists()).toBe(true);
  });
});
