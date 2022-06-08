import { mount, shallowMount } from '@vue/test-utils';
import CatList from '@/views/CatList.vue';
import catsServices from '@/services/cats.services';
import { breeds } from '@/test-helpers/mock';

describe('CatList.vue', () => {
  let spyGetAllBreeds;
  let spySearchByBreedName;
  beforeEach(() => {
    spyGetAllBreeds = jest.spyOn(catsServices, 'GetAllBreeds')
      .mockImplementation(() => Promise.resolve({
        data: breeds,
      }));
    spySearchByBreedName = jest.spyOn(catsServices, 'SearchByBreedName')
      .mockImplementation(() => Promise.resolve({
        data: breeds,
      }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders cat list with breedwise data', () => {
    // arrange, act
    const wrapper = shallowMount(CatList);

    // assert
    expect(wrapper.find('a-card').exists()).toBe(true);
    expect(wrapper.find('a-table').exists()).toBe(true);
    expect(wrapper.find('a-input-search').exists()).toBe(true);
  });

  it('if nothing in search should call GetAllBreeds', () => {
    // arrange, act
    const wrapper = shallowMount(CatList);

    // assert
    expect(wrapper.vm.query).toBe('');
    expect(spyGetAllBreeds).toHaveBeenCalled();
    expect(spySearchByBreedName).not.toHaveBeenCalled();
  });

  it('if search text should call SearchByBreedName', () => {
    debugger;
    // arrange, act
    mount(CatList, {
      data() {
        return {
          query: 'test',
        };
      },
    });

    // assert
    expect(spyGetAllBreeds).not.toHaveBeenCalled();
    expect(spySearchByBreedName).toHaveBeenCalled();
  });
});
