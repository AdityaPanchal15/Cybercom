export const state = () => ({
  loggedIn: false,
  firstName: null,
  lastName: null,
  email: null,
})

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload.loggedIn
    state.email = payload.email
    if (payload.name) {
      const displayName = payload.name.split(' ')
      state.firstName = displayName[0]
      state.lastName = displayName[1]
    }
  },
}
