export const state = () => ({
  products: [],
})

export const mutations = {
  addProducts(state, payload) {
    state.products.push(payload)
  },
  removeProduct(state, id) {
    state.products.splice(id, 1)
  },
  //   updateProduct(state, payload) {
  //     state.products[payload.id] = payload.product
  //   },
}

// export const actions = {
//   updateQuantity({ commit, getters }, payload) {
//     console.log(payload)
//     const product = getters.getProducts(payload.id)
//     console.log(product)
//     product.quantity = payload.selectedQuantity
//     product.subTotal = payload.selectedQuantity * product.finalPrice
//     commit.updateProduct(product, payload.id)
//   },
// }

// export const getters = {
//   getProducts: (state) => (id) => {
//     console.log(id)
//     return state.products[id]
//   },
// }
