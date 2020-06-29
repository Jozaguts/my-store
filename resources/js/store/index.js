import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import global from './global'
import products from './products'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        global,
        auth,
        products
    }
})

