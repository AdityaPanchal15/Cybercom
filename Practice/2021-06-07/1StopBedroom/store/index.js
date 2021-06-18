export const state = () => ({
  productDetails: null,
  pathFrom: null,
})

export const mutations = {
  addProductDetails(state, payload) {
    state.productDetails = payload
  },
  setPathFrom(state, payload) {
    state.pathFrom = payload
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    if (this.$cookies.get('token')) {
      commit('auth/setLoggedIn', true)
    }
  },
}
