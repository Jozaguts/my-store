import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import TShirtIcon from '../components/CustomIcons/T-shirt.vue'
import BlouseIcon from '../components/CustomIcons/Blouse.vue'
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
                primary: colors.cyan.accent4,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.cyan.darken3,
            },
        },
    }
}

export default new Vuetify(opts)
