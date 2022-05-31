import axios from 'axios';

async function GetGeoJSON() {
  const response = await axios('https://openlayers.org/en/latest/examples/data/geojson/countries.geojson', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}

async function GetCountryCodes() {
  const response = await import('@/assets/country-codes.json');
  return response;
}

export default {
  GetGeoJSON,
  GetCountryCodes,
};
