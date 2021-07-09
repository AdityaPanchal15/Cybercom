export const state = () => ({
  mattress_size: null,
  mattress_comfort: null,
})

export const mutations = {
  setMattressSize(state, payload) {
    state.mattress_size = payload
  },
  setMattressComfort(state, payload) {
    state.mattress_comfort = payload
  },
}
