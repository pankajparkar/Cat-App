<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
  <a-table :dataSource="breeds" :columns="columns">
  <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'id'">
        <router-link :to="{name: 'CatDetails', params: { id: record.id }}">
          <edit-outlined key="edit" />
        </router-link>
      </template>
    </template>
  </a-table>
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
    };
  },
  methods: {
    async fetchData() {
      const breeds = await catServices.GetAllBreeds();
      this.breeds = breeds.data;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
