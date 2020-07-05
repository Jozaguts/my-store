import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['products', 'cart', 'auth', 'global']
})

export default vuexLocal