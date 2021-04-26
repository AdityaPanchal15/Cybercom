export const state = () => ({
  cartItems: [],
})

export const mutations = {
  setCartItem(state, payload) {
    state.cartItems.push(payload)
  },
  removeFromCart(state, payload) {
    state.cartItems.splice(payload, 1)
  },
}
