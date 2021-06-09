export const state = () => ({
  name: '',
  layout: '',
})

export const mutations = {
  changeLayout(state, payload) {
    state.name = payload.pageInfo.pageTitle
    state.layout = payload.design.layout
  },
}
