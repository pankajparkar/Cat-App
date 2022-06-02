<template>
  <a-card class="cat-list">
    <a-input-search
      class="search-input"
      v-model:value="query"
      placeholder="Search by breed name"
      enter-button="Search"
      size="large"
      :allowClear="true"
      @search="onSearch"
    />
    <a-table :dataSource="breeds" :columns="columns" :loading="loading" class="breeds-grid">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'id'">
          <router-link :to="{name: 'CatDetails', params: { id: record.id }}">
            <edit-outlined key="edit" />
          </router-link>
        </template>
        <template v-if="column.dataIndex === 'image'">
          <img
            width="30"
            height="30"
            v-bind:alt="record.name"
            v-bind:src="'https://cdn2.thecatapi.com/images/'+record.reference_image_id+'.jpg'"
          />
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { EditOutlined } from '@ant-design/icons-vue';
import catServices from '@/services/cats.services';

export default {
  name: 'Home',
  components: {
    EditOutlined,
  },
  data() {
    return {
      columns: [
        {
          title: 'Id',
          dataIndex: 'id',
        },
        {
          title: 'Breed Name',
          dataIndex: 'name',
          key: 'name',
          defaultSortOrder: 'ascend',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Image',
          dataIndex: 'image',
        },
        {
          title: 'Lifespan',
          dataIndex: 'life_span',
        },
        {
          title: 'Origin',
          dataIndex: 'origin',
          sorter: (a, b) => a.origin.localeCompare(b.origin),
        },
      ],
      breeds: [],
      query: '',
      loading: false,
    };
  },
  methods: {
    async fetchData(searchValue) {
      this.loading = true;
      this.breeds = [];
      const breedsPromise = searchValue ?
        catServices.SearchByBreedName(searchValue):
        catServices.GetAllBreeds();
      this.breeds =  (await breedsPromise).data;
      this.loading = false;
      this.$forceUpdate();
    },
    onSearch() {
      this.fetchData(this.query);
    },
  },
  mounted() {
    this.fetchData(this.query);
  },
};
</script>

<style scoped>
.cat-list {
  
}
.cat-list .search-input {
  margin-bottom: 20px;
}
.cat-list .breeds-grid {
  
}
</style>