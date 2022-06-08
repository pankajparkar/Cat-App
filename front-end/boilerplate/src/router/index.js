import { createRouter, createWebHistory } from 'vue-router';
import CatList from '@/views/CatList.vue';

const routes = [
  {
    path: '/cat/list',
    name: 'Home',
    component: CatList,
  },
  {
    path: '/cat/:id',
    name: 'CatDetails',
    component: () => import('@/views/CatDetails.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '',
    redirect: '/cat/list',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
