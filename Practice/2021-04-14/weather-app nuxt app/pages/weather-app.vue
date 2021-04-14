<template>
  <v-container>
    <h1 class="display-1 text-center">Weather App</h1>
    <v-col cols="12">
      <v-card color="blue-grey darken-2">
        <v-card-text class="white--text">
          <v-layout class="justify-center">
            <v-flex class="text-center">
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="weather icon" />
              <p>
                <span class="display-1">{{ temp }} &deg;C</span>
                <span class="caption ml-4">
                  {{ weather.weather[0].description }}
                </span>
              </p>
            </v-flex>
            <v-flex class="text-center">
              <h4>Wind & Pressure</h4>
              <h3 class="headline">
                Wind: {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}
                &deg;)
              </h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }} %
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hPa
              </h3>
            </v-flex>
            <v-flex class="text-center">
              <h4>Other</h4>
              <h3 class="headline mt-4">
                Max Temperature:
                {{ Math.round(weather.main.temp_max - 273) }} &deg;C
              </h3>
              <h3 class="headline mt-4">
                Min Temperature:
                {{ Math.round(weather.main.temp_min - 273) }} &deg;C
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          label="Enter City Name"
          solo
        ></v-text-field>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  fetch({ store }) {
    return store.dispatch('weather/getWeatherInfo')
  },
  computed: {
    ...mapState('weather', ['weather', 'city']),
    ...mapGetters('weather', ['temp', 'icon']),
    city: {
      get() {
        return this.$store.state.weather.city
      },
      set(value) {
        this.$store.commit('weather/setCity', value)
      },
    },
  },
  methods: {
    ...mapActions('weather', ['getWeatherInfo']),
  },
}
</script>
