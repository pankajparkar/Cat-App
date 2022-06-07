import { shallowMount, mount } from '@vue/test-utils';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import { breeds } from '@/test-helpers/mock';

const breed = breeds[0];

describe('CatDetailsCard.vue', () => {
  it('renders card when breed is passed', () => {

    const wrapper = shallowMount(CatDetailsCard, {
      props: { breeds },
    });
    expect(wrapper.get('a-card').exists()).toBe(true);
    expect(wrapper.get('a-card-meta').exists()).toBe(true);
  });

  it('renders meta card with title and description', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    const attributes = Array.from(wrapper.find('a-card-meta').element.attributes);
    expect(attributes.find(a => a.nodeName === 'title').nodeValue).toBe(breed.name);
    expect(attributes.find(a => a.nodeName === 'description').nodeValue).toBe(breed.description);
  });

  // TODO: fill test
  it('should navigate to wiki link', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    const attributes = Array.from(wrapper.find('a-card-meta').element.attributes);
    expect(attributes.find(a => a.nodeName === 'title').nodeValue).toBe(breed.name);
    expect(attributes.find(a => a.nodeName === 'description').nodeValue).toBe(breed.description);
  });

  // TODO: fill test
  it('should show carousel if more than one image present', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    const attributes = Array.from(wrapper.find('a-card-meta').element.attributes);
    expect(attributes.find(a => a.nodeName === 'title').nodeValue).toBe(breed.name);
    expect(attributes.find(a => a.nodeName === 'description').nodeValue).toBe(breed.description);
  });

  // TODO: fill test
  it('should not show carousel if only one image present', () => {
    const wrapper = mount(CatDetailsCard, {
      props: { breed },
    });

    const attributes = Array.from(wrapper.find('a-card-meta').element.attributes);
    expect(attributes.find(a => a.nodeName === 'title').nodeValue).toBe(breed.name);
    expect(attributes.find(a => a.nodeName === 'description').nodeValue).toBe(breed.description);
  });
});
