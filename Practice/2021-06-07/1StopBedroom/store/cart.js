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
  updateProduct(state, payload) {
    const myproduct = state.products[payload.id]
    myproduct.quantity = payload.quantity
    myproduct.subTotal = (payload.quantity * myproduct.finalPrice).toFixed(2)
    state.products[payload.id] = myproduct
  },
}

export const getters = {
  getProducts: (state) => (id) => {
    return state.products[id]
  },
  totalAmount: (state) => {
    let totalPrice = 0
    for (let index = 0; index < state.products.length; index++) {
      totalPrice = totalPrice + parseFloat(state.products[index].subTotal)
    }
    return totalPrice.toFixed(2)
  },
}
