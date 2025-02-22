export const breeds = [
  {
    name: 'Abyssinian',
    origin: 'Egypt',
    description:
      'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    life_span: '14 - 15',
    affection_level: 5,
    energy_level: 5,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
    reference_image_id: '0XYvRd7oD',
  },
  {
    id: 'sing',
    name: 'Sing',
    origin: 'Singapore',
    description:
      'The Singapore is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    life_span: '10 - 15',
    affection_level: 4,
    energy_level: 4,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Sing_(cat)',
    reference_image_id: '0XYvRd7oD',
  },
];

export const images = [
  {
    id: '_6x-3TiCA',
    url: 'https://cdn2.thecatapi.com/images/_6x-3TiCA.jpg',
    width: 1231,
    height: 1165,
  },
  {
    id: 'weHGBmpb0',
    url: 'https://cdn2.thecatapi.com/images/weHGBmpb0.jpg',
    width: 960,
    height: 854,
  },
];

export const geoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: 'EGY',
      properties: {
        name: 'Egypt',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [34.9226, 29.50133],
            [34.64174, 29.09942],
            [34.42655, 28.34399],
            [34.15451, 27.8233],
            [33.92136, 27.6487],
            [33.58811, 27.97136],
            [33.13676, 28.41765],
            [32.42323, 29.85108],
            [32.32046, 29.76043],
            [32.73482, 28.70523],
            [33.34876, 27.69989],
            [34.10455, 26.14227],
            [34.47387, 25.59856],
            [34.79507, 25.03375],
            [35.69241, 23.92671],
            [35.49372, 23.75237],
            [35.52598, 23.10244],
            [36.69069, 22.20485],
            [36.86623, 22],
            [32.9, 22],
            [29.02, 22],
            [25, 22],
            [25, 25.6825],
            [25, 29.238655],
            [24.70007, 30.04419],
            [24.95762, 30.6616],
            [24.80287, 31.08929],
            [25.16482, 31.56915],
            [26.49533, 31.58568],
            [27.45762, 31.32126],
            [28.45048, 31.02577],
            [28.91353, 30.87005],
            [29.68342, 31.18686],
            [30.09503, 31.4734],
            [30.97693, 31.55586],
            [31.68796, 31.4296],
            [31.96041, 30.9336],
            [32.19247, 31.26034],
            [32.99392, 31.02407],
            [33.7734, 30.96746],
            [34.26544, 31.21936],
            [34.9226, 29.50133],
          ],
        ],
      },
    },
  ],
};

export const countryCode = [{
  name: 'Egypt',
  alpha2: 'EG',
  alpha3: 'EGY',
  numric: '818',
}];

export const geoLocation = {
  Response: {
    MetaInfo: {
      Timestamp: '2022-06-07T14:07:50.120+0000',
    },
    View: [
      {
        _type: 'SearchResultsViewType',
        ViewId: 0,
        Result: [
          {
            Relevance: 1.0,
            MatchLevel: 'country',
            MatchQuality: { Country: 1.0 },
            Location: {
              LocationId: 'NT_TzexoROH-GxPvAgwDJ6drA',
              LocationType: 'point',
              DisplayPosition: { Latitude: 30.04427, Longitude: 31.23525 },
              NavigationPosition: [{ Latitude: 30.04427, Longitude: 31.23525 }],
              MapView: {
                TopLeft: { Latitude: 31.67418, Longitude: 24.6981 },
                BottomRight: { Latitude: 21.99992, Longitude: 36.24292 },
              },
              Address: {
                Label: 'مصر',
                Country: 'EGY',
                AdditionalData: [{ value: 'مصر', key: 'CountryName' }],
              },
            },
          },
        ],
      },
    ],
  },
};
