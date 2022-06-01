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
    <a-table :dataSource="breeds" :columns="columns" class="breeds-grid">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'id'">
          <router-link :to="{name: 'CatDetails', params: { id: record.id }}">
            <edit-outlined key="edit" />
          </router-link>
        </template>
        <template v-if="column.key === 'image'">
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
          key: 'id',
          sorter: true,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: true,
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          sorter: true,
        },
        {
          title: 'Lifespan',
          dataIndex: 'life_span',
          key: 'life_span',
          sorter: true,
        },
        {
          title: 'Origin',
          dataIndex: 'origin',
          key: 'origin',
          sorter: true,
        },
      ],
      breeds: [],
      query: '',
    };
  },
  methods: {
    async fetchData() {
      const breeds = await catServices.GetAllBreeds(this.query);
      this.breeds = breeds.data;
    },
    onSearch(searchValue) {
      this.fetchData();
      console.log('use value', searchValue);
      // console.log('or use this.value', value.value);
    },
  },
  mounted() {
    this.fetchData();
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