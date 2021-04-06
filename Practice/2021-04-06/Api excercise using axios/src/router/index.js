import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../components/Login')
        },
        {
            path: '/postGetRequest',
            name: 'PostGetRequest',
            component: () => import(/* webpackChunkName: "postGetRequest" */ '../components/PostGetRequest'),
            meta: { requiresAuth: true },
        },
        {
            path: '/listUser',
            name: 'listUser',
            component: () => import(/* webpackChunkName: "listUser" */ '../components/ListUser'),
            meta: { requiresAuth: true },
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (localStorage.getItem("token")) next()
        else alert('Login requires')
    } else {
        next()
    }
})

export default router