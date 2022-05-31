<template>
  <a-card v-if="breed" hoverable style="width: 300px">
    <template #cover>
      <img
        v-bind:alt="breed.name"
        v-bind:src="'https://cdn2.thecatapi.com/images/'+breed.reference_image_id+'.jpg'"
      />
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
  <MapContainer />
</template>

<script>
import { useRoute } from 'vue-router';
import { ThunderboltOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons-vue';
import MapContainer from '@/components/MapContainer.vue';
import catServices from '@/services/cats.services';
import mapServices from '@/services/maps.services';

export default {
  name: 'CatDetails',
  components: {
    ThunderboltOutlined,
    LinkOutlined,
    PushpinOutlined,
    MapContainer,
  },
  data() {
    return {
      breed: null,
    };
  },
  methods: {
    async fetchData() {
      const router = useRoute();
      const { id } = router.params;
      this.id = id;
      const breed = await catServices.GetCatBreed(id);
      const json = await mapServices.GetGeoJSON();
      const countryCodes = await mapServices.GetCountryCodes();
      console.log(json, countryCodes);
      this.breed = breed.data;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
