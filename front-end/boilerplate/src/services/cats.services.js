import axios from 'axios';

const API_BASE = 'https://api.thecatapi.com/v1';

async function GetAllBreeds(query) {
  const url = !query ?
    `${API_BASE}/breeds`:
    `${API_BASE}/breeds/search?q=${query}`;
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
};
