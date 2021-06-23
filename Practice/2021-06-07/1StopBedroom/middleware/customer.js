export default function ({ redirect, store }) {
  if (store.state.auth.loggedIn) {
    redirect({ name: 'account', path: '/customer/account/welcome' })
  }
}
