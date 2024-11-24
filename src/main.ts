import { inject } from "@vercel/analytics"
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
inject();
app.use(router);
app.mount('#app');
