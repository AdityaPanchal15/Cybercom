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
