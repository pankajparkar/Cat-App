<template>
  <a-card class="cat-details-card" hoverable>
    <template #cover>
      <a-carousel arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow prev">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow next">
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
</template>

<script>
import {
  ThunderboltOutlined, PushpinOutlined, LinkOutlined,
  LeftCircleOutlined, RightCircleOutlined,
} from '@ant-design/icons-vue';
import catServices from '@/services/cats.services';

export default {
  name: 'CatDetailsCard',
  props: {
    breed: Object,
  },
  data() {
    return {
      images: [],
    };
  },
  components: {
    ThunderboltOutlined,
    LinkOutlined,
    PushpinOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  methods: {
    async getImages(id) {
      const catImages = await catServices.GetCatImages(id);
      this.images = catImages.data;
    },
  },
  mounted() {
    this.getImages(this.breed.id);
  },
};
</script>

<style scoped>
.cat-details-card {
  width: 350px;
  margin: 10px;
}

.ant-carousel :deep(.slick-slide) {
  height: 200px;
  line-height: 200px;
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
.ant-carousel :deep(.custom-slick-arrow.next) {
  right: 10px;
}
.ant-carousel :deep(.custom-slick-arrow.prev) {
  left: 10px;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
