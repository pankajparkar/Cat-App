<template>
  <template v-if="breed">
    <h1 class="breed-title">{{ breed.name }}</h1>
    <div class="cat-details">
      <CatDetailsCard :breed="breed" />
      <HereMap v-if="jsonData" :center="center" :jsonData="jsonData" :origin="origin" />
    </div>
  </template>
  <div v-else class="loading">
    <LoadingOutlined />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { LoadingOutlined } from '@ant-design/icons-vue';
import HereMap from '@/components/HereMap.vue';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import catServices from '@/services/cats.services';
import mapServices from '@/services/maps.services';

export default {
  name: 'CatDetails',
  components: {
    HereMap,
    CatDetailsCard,
    LoadingOutlined,
  },
  data() {
    return {
      breed: null,
      jsonData: null,
      center: null,
      images: null,
    };
  },
  methods: {
    async fetchData() {
      const router = useRoute();
      const { id } = router.params;
      this.id = id;
      const {
        breed, geo, countryCodes,
      } = await Promise.all([
        catServices.GetCatBreed(id),
        mapServices.GetGeoJSON(),
        mapServices.GetCountryCodes(),
      ]).then(([data1, data2, data3]) => ({
        breed: data1.data,
        geo: data2.data,
        countryCodes: data3.default,
      }));
      const countryCode = countryCodes.find(
        (cc) => cc.alpha2 === breed.country_code || cc.name === breed.origin,
      );
      const countryFeature = geo.features.find((feature) => feature.id === countryCode.alpha3);
      this.jsonData = countryFeature;
      const position = await mapServices.GetGeoLocation(breed.origin);
      this.breed = breed;
      this.origin = breed.origin;
      const {
        Latitude: lat, Longitude: lng,
      } = position.data.Response.View[0].Result[0].Location.DisplayPosition;
      this.center = {
        lat,
        lng,
      };
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.cat-details {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.breed-title {
  margin: 16px 0;
}
.loading {
  align-items: center;
  display: flex;
  font-size: 3rem;
  justify-content: center;
  height: 100vh;
}
</style>
