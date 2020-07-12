import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'


import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Products from './views/Products.vue'
import CheckOut from "./views/CheckOut.vue"
import Error404 from './views/Errors/404.vue'
import ProductDetails from './components/Products/Details'
import Login from './components/Auth/Login.vue'
import UsersTable from './components/Users/Table.vue';
import ProductsTable from './components/Products/Table.vue';

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
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: 'users',
                    component: UsersTable
                },
                {
                    path: 'products',
                    component: ProductsTable
                }
            ],
            beforeEnter: (to, from, next) => {
                if (!store.getters['auth/getAuthenticateStatus']) next({ name: 'login' })
                else next()
            }

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
            component: Login,
            beforeEnter: (to, from, next) => {
                if (!store.getters['auth/getAuthenticateStatus']) {
                    next();
                } else {
                    router.go(-1)
                }
            }
        },
        {
            path: '*',
            name: '404',
            component: Error404
        }
    ]
})

export default router

