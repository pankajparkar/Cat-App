import { mount } from '@vue/test-utils';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import HereMap from '@/components/HereMap.vue';
import CatDetails from '@/views/CatDetails.vue';
import {
  breeds, geoJSON, countryCode, geoLocation,
} from '@/test-helpers/mock';
import catsServices from '@/services/cats.services';
import mapsServices from '@/services/maps.services';

const breed = breeds[0];

const setupHereMapMock = () => {
  global.window.H = {
    service: {
      Platform: jest.fn(() => ({
        createDefaultLayers: jest.fn(() => ({
          vector: {
            normal: { map: jest.fn() },
          },
        })),
      })),
      Map: jest.fn(() => ({
        createDefaultLayers: jest.fn(),
      })),
    },
    Map: jest.fn(() => ({
      Behavior: jest.fn(),
      getViewPort: jest.fn(() => ({
        resize: jest.fn(),
      })),
      addLayer: jest.fn(),
    })),
    mapevents: {
      Behavior: jest.fn(),
      MapEvents: jest.fn(),
    },
    ui: {
      UI: {
        createDefault: jest.fn(),
      },
    },
    data: {
      geojson: {
        Reader: jest.fn(() => ({
          parseData: jest.fn(),
          getLayer: jest.fn(),
        })),
      },
    },
  };
};

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    name: 'Home',
    params: { id: 'abys' },
  })),
}));

describe('CatDetails.vue', () => {
  beforeAll(() => {
    setupHereMapMock();
  });
  test('should render online cat-details component', async () => {
    jest.spyOn(CatDetails.methods, 'fetchData');
    const wrapper = await mount(CatDetails, {
      data() {
        return { breed };
      },
      methods: {
        fetchData: jest.fn(),
      },
    });

    expect(wrapper.findComponent(HereMap).exists()).toBe(false);
    expect(wrapper.findComponent(CatDetailsCard).exists()).toBe(true);
  });

  test('should render both child components', async () => {
    jest.spyOn(catsServices, 'GetCatBreed').mockImplementation(() => Promise.resolve({
      data: breed,
    }));
    jest.spyOn(mapsServices, 'GetGeoJSON').mockImplementation(() => Promise.resolve({
      data: geoJSON,
    }));
    jest.spyOn(mapsServices, 'GetCountryCodes').mockImplementation(() => Promise.resolve({
      default: countryCode,
    }));
    jest.spyOn(mapsServices, 'GetGeoLocation').mockImplementation(() => Promise.resolve({
      data: geoLocation,
    }));

    const wrapper = await mount(CatDetails, {
      data() {
        return { breed };
      },
    });

    expect(wrapper.findComponent(HereMap).exists()).toBe(false);
    expect(wrapper.findComponent(CatDetailsCard).exists()).toBe(true);
  });
});
