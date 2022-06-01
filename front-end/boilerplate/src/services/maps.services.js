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

async function GetGeoLocation(origin) {
  const response = await axios(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=Mh1Vdq-GLSsqSzLd08ljHef5hTxTK7P4a53BbjAZFjM&searchtext=${origin}`);
  return response;
}

export default {
  GetCountryCodes,
  GetGeoJSON,
  GetGeoLocation,
};
