import { mount } from '@vue/test-utils';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import { breeds, images } from '@/test-helpers/mock';
import catServices from '@/services/cats.services';

const breed = breeds[0];

describe('CatDetailsCard.vue', () => {
  it('renders card when breed is passed', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    expect(wrapper.get('a-card').exists()).toBe(true);
    expect(wrapper.get('a-card-meta').exists()).toBe(true);
  });

  it('renders meta card with title and description', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    const attributes = Array.from(wrapper.find('a-card-meta').element.attributes);
    expect(attributes.find((a) => a.nodeName === 'title').nodeValue).toBe(breed.name);
    expect(attributes.find((a) => a.nodeName === 'description').nodeValue).toBe(breed.description);
  });

  it('should have images loaded', async () => {
    jest.spyOn(catServices, 'GetCatImages').mockImplementation(
      () => Promise.resolve({
        data: images,
      }),
    );

    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.images.length).toBe(2);
  });
});
