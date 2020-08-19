const cart = {
    namespaced: true,
    state: {
        show: false,
        cartItems: [],
        cartChanged: false,
        billingInformation: {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            phone: '',
            country: '',
            state: '',
            city: '',
            zipcode: ''
        },
        isPaying: false
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
            if (finned && (finned.quantity > 0)) finned.quantity--
        },
        SET_BILLING_INFORMATION(state, payload) {
            state.billingInformation = payload
        },
        TOGGLE_IS_PAYING(state) {
            state.isPaying = !state.isPaying
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

        },
        async payment({commit, dispatch, state}, setupIntent) {
            try {
                const userInformation = state.billingInformation;
                const cartItems = state.cartItems;
                await axios.post('/api/payment', {userInformation, cartItems, setupIntent})
                    .then((response) => {
                        if (response.data.includes('succeeded')) {
                            return new Promise((resolve, reject) => {
                                let storage = JSON.parse(window.localStorage.getItem('vuex'))
                                storage.cart.cartItems = [];
                                window.localStorage.clear()
                                window.localStorage.setItem('vuex', JSON.stringify(storage))
                                resolve('success')
                                reject('Problems when cleaning the shopping cart')
                            })
                                .then((data) => {
                                    state.cartItems = []
                                    state.cartChanged = false
                                    console.log(data)
                                })
                        }
                    })
            } catch (e) {
                console.log(e)
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
            } else {
                return 0;
            }
        },
        getBillingInformation(state) {
            return state.billingInformation
        },
        getIsPaying(state) {
            return state.isPaying
        }
    }
}
export default cart
