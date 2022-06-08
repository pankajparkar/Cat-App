import axios from 'axios';

const API_BASE = 'https://api.thecatapi.com/v1';

async function SearchByBreedName(q) {
  const url = `${API_BASE}/breeds/search`;
  const response = await axios(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    params: { q },
  });
  return response;
}

async function GetAllBreeds() {
  const url = `${API_BASE}/breeds`;
  const response = await axios(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
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
