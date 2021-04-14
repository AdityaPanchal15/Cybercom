export const state = () => ({
  city: 'London',
  weather: {},
})

export const mutations = {
  setCity(state, payload) {
    state.city = payload
  },
  setWeather(state, payload) {
    state.weather = payload
  },
}

export const actions = {
  getWeatherInfo({ state, commit }) {
    return this.$axios
      .$get(
        `http://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${process.env.weatherAppId}`
      )
      .then((res) => commit('setWeather', res))
  },
}

export const getters = {
  temp(state) {
    return Math.round(state.weather.main.temp - 273)
  },
  icon(state) {
    return `https://openweathermap.org/img/w/${state.weather.weather[0].icon}.png`
  },
}
