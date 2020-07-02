import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email, digits } from 'vee-validate/dist/rules';

// Add a rule.
extend('required', required);
extend('email', email);
extend('digits', digits);

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
