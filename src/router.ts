// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import WeatherApp from './components/weatherEx.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/weather', component: WeatherApp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
