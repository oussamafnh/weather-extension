import { createRouter, createWebHistory } from 'vue-router';  // This should work after installing vue-router
import LandingPage from './components/LandingPage.vue';

const routes = [
  { path: '/', component: LandingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
