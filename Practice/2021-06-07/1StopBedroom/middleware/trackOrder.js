export default function ({ redirect, store }) {
  if (store.state.auth.loggedIn) {
    redirect({ name: 'order', path: '/sales/order/history' })
  }
}
