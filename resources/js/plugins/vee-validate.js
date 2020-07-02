import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, digits, min } from 'vee-validate/dist/rules';

// Add a rule.
extend('required', required);
extend('email', email);
extend('digits', digits);
extend('min', min);

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
