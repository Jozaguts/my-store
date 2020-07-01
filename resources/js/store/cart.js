const cart = {
    namespaced: true,
    state: {
        show: false,
        cartItems: []
    },
    mutations: {
        TOGGLE_SHOW_CART(state) {
            state.show = !state.show
        },
        ADD_TO_CART(state, cartItem) {

            const finned = state.cartItems.find(item => item.id === cartItem.id)

            if (finned) {
                finned.quantity++
            } else if (!finned && cartItem.id != '') {
                state.cartItems.push(cartItem)
            }
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