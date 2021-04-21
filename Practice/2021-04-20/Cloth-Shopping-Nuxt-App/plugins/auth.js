export default ({ app, store }, inject) => {
  inject('authUser', () => store.state.loggedIn)
}
