import axios from 'axios';

import { 
  GetCountryCodes,
  GetGeoJSON,
  GetGeoLocation,
} from '@/services/maps.services'
import { breeds } from '@/test-helpers/mock'

jest.mock('axios');

// TODO: check below test, why not working?
describe('Cats.Services', () => {
  it('should call GetCountryCodes', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await GetCountryCodes('test');

    // assert
    expect(response).toEqual(resp);
  });

  it('should call GetGeoJSON', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await GetGeoJSON();

    // assert
    expect(response).toEqual(resp);
  });

  it('should call GetGeoLocation', async () => {
    // arrange
    const resp = {data: breeds};
    axios.get.mockResolvedValue(resp);

    // act
    const response = await GetGeoLocation('test');

    // assert
    expect(response).toEqual(resp);
  });
});
