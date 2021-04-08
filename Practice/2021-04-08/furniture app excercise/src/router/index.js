import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
        },
        {
            path: '/kitchen/:type',
            name: 'kitchen',
            component: () => import(/* webpackChunkName: "kitchen" */ '../views/Kitchen'),
            props:true,
        }
    ]
})