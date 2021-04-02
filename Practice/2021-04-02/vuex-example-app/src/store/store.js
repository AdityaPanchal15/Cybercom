import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'one', done: true },
            { id: 2, text: 'two', done: false }
        ],
        obj: {}
    },
    mutations: {
        increment: (state) => { state.count++ },
        decrement: (state) => { state.count-- },
        incrementByTen: (state, n) => {
            state.count += n
        },
        incrementByTwenty: (state, data) => {
            state.count += data.n;
        },
        replaceObj: (state) => {
            state.obj = { ...state.obj, newProp: 123 }              //it will replace value of obj
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },

        actionA({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('replaceObj')
                    resolve()
                }, 2000)
            })
        }
    }
})
export default store;