<template>
  <div v-if="breed">
    <CatDetailsCard :breed="breed" />
    <HereMap v-if="jsonData" :center="center" :jsonData="jsonData" :origin="origin" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ThunderboltOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons-vue';
import HereMap from '@/components/HereMap.vue';
import CatDetailsCard from '@/components/CatDetailsCard.vue';
import catServices from '@/services/cats.services';
import mapServices from '@/services/maps.services';

export default {
  name: 'CatDetails',
  components: {
    ThunderboltOutlined,
    LinkOutlined,
    PushpinOutlined,
    HereMap,
    CatDetailsCard,
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
      const { Latitude: lat, Longitude: lng } = position.data.Response.View[0].Result[0].Location.DisplayPosition;
      this.center = { lat, lng, };
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  height: 220px;
  line-height: 220px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>