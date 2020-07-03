import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Products from './views/Products.vue'
import CheckOut from "./views/CheckOut.vue"
import Error404 from './views/Errors/404.vue'
import ProductDetails from './components/Products/Details'
import Login from './components/Auth/Login.vue'

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
            path: '/products',
            name: 'products',
            component: Products

        },
        {
            path: '/products/:slug',
            name: 'productsDetails',
            component: ProductDetails

        },
        {
            path: '/checkout',
            name: "checkout",
            component: CheckOut
        },
        {
            path: '/login',
            name: "login",
            component: Login
        },
        {
            path: '*',
            name: '404',
            component: Error404
        }
    ]
})

export default router

