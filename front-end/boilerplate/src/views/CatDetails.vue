<template>
  <div v-if="breed">
    <a-card hoverable style="width: 300px;">
      <template #cover>
        <a-carousel arrows>
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <img
            v-for="image in images"
            v-bind:key="image.id"
            v-bind:alt="breed.name"
            v-bind:src="image.url"
          />
        </a-carousel>
      </template>
      <template #actions>
        <a v-bind:href="breed.wikipedia_url" target="_blank">
          <link-outlined key="link" />
        </a>
        <div>
          <thunderbolt-outlined key="thunderbolt" />
          {{ breed.energy_level }} / 5
        </div>
        <div>
          <pushpin-outlined key="pushpin" />
        </div>
      </template>
      <a-card-meta
        v-bind:title="breed.name"
        v-bind:description="breed.description">
      </a-card-meta>
    </a-card>
    <HereMap v-if="jsonData" :center="center" :jsonData="jsonData" :origin="origin" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ThunderboltOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons-vue';
import HereMap from '@/components/HereMap.vue';
import catServices from '@/services/cats.services';
import mapServices from '@/services/maps.services';

export default {
  name: 'CatDetails',
  components: {
    ThunderboltOutlined,
    LinkOutlined,
    PushpinOutlined,
    HereMap,
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
    async getImages() {
      const catImages = await catServices.GetCatImages(this.id);
      this.images = catImages.data;
    },
    async fetchData() {
      const router = useRoute();
      const { id } = router.params;
      this.id = id;
      this.getImages();
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