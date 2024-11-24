<!--<template>
  <WeatherComponent />
</template>

<script>
import WeatherComponent from "./components/weatherEx.vue";

export default {
  components: {
    WeatherComponent,
  },
};
</script>

<style>
@import "./assets/main.css";
</style> -->

<template>
  <div id="app">
    <router-view></router-view> <!-- Render the active route here -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add any global styles if needed */
</style>
