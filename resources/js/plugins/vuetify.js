import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import TShirtIcon from '../components/CustomIcons/T-shirt.vue'
import BlouseIcon from '../components/CustomIcons/Blouse.vue'
import ShoppingCart from "../components/CustomIcons/ShoppingCart";
import TShirtLogo from "../components/CustomIcons/TshirtLogo";
Vue.use(Vuetify)


const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
        values:{
            tshirt:{
                component: TShirtIcon
            },
            blouse:{
                component: BlouseIcon
            },
            shoppingCart:{
                component: ShoppingCart
            },
            tShirtLogo:{
                component: TShirtLogo
            }
        }
    },
    breakpoint: {
        thresholds: {
            xs: 0,
            sm: 476,
            md: 668,
            lg: 1000,
            xl: 1300
        }
    },
    theme: {
        themes: {
            light: {
                primary: '#5E8EC3',
                secondary: '#2B5C94',
                accent: '#162C5A',
                info: '#7A83D2',
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.cyan.darken3,
            },
        },
    }
}

export default new Vuetify(opts)
