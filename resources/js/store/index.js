import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import global from './global'
import products from './products'
import cart from './cart'
import users from './users'
import VuexLocal from '../plugins/vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        global,
        auth,
        products,
        cart,
        users
    },
    plugins: [VuexLocal.plugin]
})

