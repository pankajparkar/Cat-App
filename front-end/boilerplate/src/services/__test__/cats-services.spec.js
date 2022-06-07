import axios from 'axios';

import { SearchByBreedName, GetAllBreeds, GetCatImages, } from '@/services/cats.services';
import { breeds } from '@/test-helpers/mock';

jest.mock('axios');

// TODO: check below test, why not working?
describe('Cats.Services', () => {
  it('should call SearchByBreedName', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await SearchByBreedName('test');

    // assert
    expect(response).toEqual(resp);
  });

  it('should call GetAllBreeds', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await GetAllBreeds();

    // assert
    expect(response).toEqual(resp);
  });

  it('should call GetCatImages', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await GetCatImages('test');

    // assert
    expect(response).toEqual(resp);
  });
});
