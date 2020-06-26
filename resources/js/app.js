require('./bootstrap');
window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import store from './store/index'


Vue.component('example-component', require('./components/ExampleComponent').default);

const app = new Vue({
    vuetify,
    store,
    el: '#app'
})