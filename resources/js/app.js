require('./bootstrap');
window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store from './store/index'
import router from './routes'


Vue.component('example-component', require('./components/ExampleComponent').default);

const app = new Vue({
    vuetify,
    store,
    router,
    el: '#app'
})