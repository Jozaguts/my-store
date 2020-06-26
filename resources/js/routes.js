import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Error404 from './views/Errors/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home

        },
        {
            path: '*',
            name: '404',
            component: Error404
        }
    ]
})

export default router

