import { createApp } from 'vue';

import {
  Card, Carousel, Layout, Table,
} from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
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
  .mount('#app');
