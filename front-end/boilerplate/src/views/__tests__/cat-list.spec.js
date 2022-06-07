import { shallowMount } from '@vue/test-utils';
import CatList from '@/views/CatList.vue';

import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

import { breeds } from '@/test-helpers/mock';

jest.mock('axios');

describe('CatList.vue', () => {

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders cat list with breedwise data', () => {
    // arrange, act
    mockAxios.get.mockResolvedValueOnce(breeds);
    const wrapper = shallowMount(CatList);

    // assert
    expect(wrapper.find('a-card').exists()).toBe(true);
    expect(wrapper.find('a-table').exists()).toBe(true);
    expect(wrapper.find('a-input-search').exists()).toBe(true);
  });

  // TODO: fill in details
  // it('if nothing in search should call GetAllBreeds', () => {
  //   // arrange, act
  //   const wrapper = shallowMount(CatList);

  //   // assert
  //   expect(wrapper.find('a-card').exists()).toBe(true);
  //   expect(wrapper.find('a-table').exists()).toBe(true);
  //   expect(wrapper.find('a-input-search').exists()).toBe(true);
  // });

  // // TODO: fill in details
  // it('if search text should call SearchByBreedName', () => {
  //   // arrange, act
  //   const wrapper = shallowMount(CatList);

  //   // assert
  //   expect(wrapper.find('a-card').exists()).toBe(true);
  //   expect(wrapper.find('a-table').exists()).toBe(true);
  //   expect(wrapper.find('a-input-search').exists()).toBe(true);
  // });

  // // TODO: fill in details
  // it('on clear of text field should trigger GetAllBreeds fn', () => {
  //   // arrange, act
  //   const wrapper = shallowMount(CatList);

  //   // assert
  //   expect(wrapper.find('a-card').exists()).toBe(true);
  //   expect(wrapper.find('a-table').exists()).toBe(true);
  //   expect(wrapper.find('a-input-search').exists()).toBe(true);
  // });
});
