import axios from 'axios';

const API_BASE = 'https://api.thecatapi.com/v1';

// TODO: there should be caching invalidation
const caching = {};

async function SearchByBreedName(q) {
  const url = `${API_BASE}/breeds/search`;
  if (!caching[url]) {
    const response = await axios(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      params: { q },
    });
    caching[url] = response;
  }

  return caching[url];
}

async function GetAllBreeds() {
  const url = `${API_BASE}/breeds`;
  if (!caching[url]) {
    const response = await axios(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    caching[url] = response;
  }
  return caching[url];
}

async function GetCatBreed(id) {
  const response = await axios(`${API_BASE}/breeds/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}

async function GetCatImages(id) {
  const response = await axios(`${API_BASE}/images/search?breed_ids=${id}&limit=10&include_breeds=false`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}

export default {
  GetAllBreeds,
  GetCatBreed,
  GetCatImages,
  SearchByBreedName,
};
