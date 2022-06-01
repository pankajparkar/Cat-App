<template>
  <div v-if="breed">
    <a-card hoverable style="width: 300px">
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
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>
        <!-- <img
          v-bind:alt="breed.name"
          v-bind:src="'https://cdn2.thecatapi.com/images/'+breed.reference_image_id+'.jpg'"
        /> -->
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
      <a-card-meta v-bind:title="breed.name" v-bind:description="breed.description">
        <!-- <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template> -->
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
      console.log('geo', geo, 'breed', breed, breed.country_code);
      const countryCode = countryCodes.find(
        (cc) => cc.alpha2 === breed.country_code || cc.name === breed.origin,
      );
      console.log('countryCode', countryCode);
      const countryFeature = geo.features.find((feature) => feature.id === countryCode.alpha3);
      console.log('countryFeature', countryFeature);
      this.jsonData = countryFeature;
      const position = await mapServices.GetGeoLocation(breed.origin);
      console.log(this.jsonData, 'jsonData');
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
