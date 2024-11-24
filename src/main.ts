// import { createApp } from 'vue';
// import App from './App.vue';
// import router from "./router.js"

// import './assets/main.css'; // Add your global CSS

// const app = createApp(App);

// app.use(router); // Use the router in the app
// app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'

// Create the app instance
const app = createApp(App)

// Mount the app to the #app element
app.mount('#app')
