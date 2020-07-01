const cart = {
    namespaced: true,
    state: {
        show: false,
        cartItems: [],
        cartChanged: false
    },
    mutations: {
        TOGGLE_SHOW_CART(state) {
            state.show = !state.show
        },
        ADD_TO_CART(state, cartItem) {
            state.cartChanged = false

            const finned = state.cartItems.find(item => item.id === cartItem.id)
            if (finned) {
                finned.quantity++
            } else if (!finned && cartItem.id != '') {
                state.cartItems.push(cartItem)
            }
        },
        CHANGE_STATUS_CART(state, payload) {
            state.cartChanged = payload
        },
        DELETE_ITEM(state, id) {
            const finned = state.cartItems.find(item => item.id == id)
            if (finned && (finned.quantity > 0)) {
                finned.quantity--
            }
        }
    },
    actions: {
        async addToCart(context, cartItem) {

            try {
                await context.commit('ADD_TO_CART', cartItem)
                await context.commit('CHANGE_STATUS_CART', true)
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    context.commit('CHANGE_STATUS_CART', false)
                }, 2000);
            }

        }
    },
    getters: {
        getToggleShow(state) {
            return state.show
        },
        getCartItems(state) {
            return state.cartItems
        },
        getCartChanged(state) {
            return state.cartChanged
        },
        getTotalQuantity(state) {
            if (state.cartItems.length) {
                return state.cartItems.reduce((acc, el) => acc + el.quantity, 0)
            }

        },
        getTotalAmount(state) {
            if (state.cartItems.length) {
                return state.cartItems.reduce((acc, el) => acc + Math.floor(Number(el.price * el.quantity)), 0)
            }
        }
    }
}
export default cart