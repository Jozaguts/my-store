const cart = {
    namespaced: true,
    state: {
        show: false
    },
    mutations: {
        toggleShowCart(state) {
            state.show = !state.show
        }
    },
    actions: {

    },
    getters: {
        getToggleShow(state) {
            return state.show
        }
    }
}
export default cart