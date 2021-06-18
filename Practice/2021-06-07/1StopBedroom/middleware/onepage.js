export default function ({ redirect, store }) {
  const hasProducts = !!store.state.cart.products.length
  if (!hasProducts) {
    redirect({ name: 'cart', path: 'checkout/cart' })
  }
}
