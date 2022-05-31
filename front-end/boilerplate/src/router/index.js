import { createRouter, createWebHistory } from 'vue-router';
import CatList from '@/views/CatList.vue';

const routes = [
  {
    path: '/',
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
