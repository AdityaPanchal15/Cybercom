export const state = () => ({
    counter: 0,
    authenticated:true
});

export const mutations = {
    increment(state) {
      state.counter++
    }
  }