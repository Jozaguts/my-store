import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, digits, min, confirmed, numeric } from 'vee-validate/dist/rules';

// Add a rule.
extend('required', required);
extend('email', email);
extend('digits', digits);
extend('min', min);
extend('confirmed', confirmed);
extend('numeric', numeric);

extend("decimal", {
    validate: (value, { decimals = '*', separator = '.' } = {}) => {
        if (value === null || value === undefined || value === '') {
            return {
                valid: false
            };
        }
        if (Number(decimals) === 0) {
            return {
                valid: /^-?\d*$/.test(value),
            };
        }
        const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
        const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);

        return {
            valid: regex.test(value),
        };
    },
    message: 'The {_field_} field must contain only decimal values'
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
