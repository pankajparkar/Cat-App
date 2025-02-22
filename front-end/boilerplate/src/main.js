import { createApp } from 'vue';

import {
  Card, Carousel, Layout, Table, Input,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(Layout)
  .use(Card)
  .use(Table)
  .use(Carousel)
  .use(Input)
  .mount('#app');
