export const state = () => ({
  loggedIn: false,
})

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    if (this.$cookies.get('token')) {
      commit('setLoggedIn', true)
    }
  },
}
