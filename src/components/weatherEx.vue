<template>
  <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="weather-container">
    <div v-if="isLoading" class="loader"></div>
    <div v-else>
      <div class="weather-info">
        <h1>{{ weather.city }}</h1>
        <p>{{ weather.temp }}°C - {{ weather.description }}</p>
        <img v-if="weather.icon" :src="`https://openweathermap.org/img/wn/${weather.icon}@2x.png`" alt="Weather Icon">
        <input
          type="text"
          v-model="cityInput"
          placeholder="   Enter city"
          @keyup.enter="fetchWeather(cityInput)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weather: {
        city: "",
        temp: 0,
        description: "",
        icon: "",
      },
      backgroundImage: "https://res.cloudinary.com/dq7kjds8s/image/upload/v1732480042/kzowjvefcuarg6lhfek9.png",
      isLoading: true,
    };
  },
  methods: {
    async fetchWeather(city) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6c003ed0b033fcf2a248fedd3f4ae01e`;
      const imageUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=MQQR49KeUxtcDFZst-IRF6kOcNyTk5Nfmb2skTznm1s`;

      try {
        const weatherResponse = await axios.get(weatherUrl);
        const imageResponse = await axios.get(imageUrl);
        console.log(imageUrl);

        const weatherData = weatherResponse.data;
        const imageData = imageResponse.data;

        this.weather = {
          city: weatherData.name,
          temp: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
        };

        this.backgroundImage = imageData.results[0]?.urls?.regular || "";
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.isLoading = false;
        alert("Unable to fetch weather for the specified city.");
      }
    },
    async fetchCityByIP() {
      const geoIpUrl = "https://ipwhois.app/json/";
      try {
        const response = await axios.get(geoIpUrl);
        const city = response.data.city;
        this.fetchWeather(city);
      } catch (error) {
        console.error("Failed to fetch IP location. Defaulting to Chicago.");
      }
    }
  },
  mounted() {
    this.fetchCityByIP();
  },
};
</script>

<style scoped>
.weather-container {
  background-size: cover;
  background-position: center;
  min-height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.weather-info {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: auto;
  height: auto;
}
input {
  width: 100%;
  padding-block: 10px;
  padding-inline: 0px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 0%;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
