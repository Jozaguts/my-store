require('./bootstrap');
window.Vue = require('vue');

import vuetify from './plugins/vuetify'


Vue.component('example-component', require('./components/ExampleComponent').default);

const app = new Vue({
    vuetify,
    el: '#app'
})