require('./bootstrap');
window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store from './store/index'
import router from './routes'
import App from './App.vue'

const app = new Vue({
    el: '#app',
    vuetify,
    store,
    router,
    render: h=>h(App)
})