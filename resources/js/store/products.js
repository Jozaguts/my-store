const products = {
    namespaced: true,
    state: {
        productsData: {
            paginate: {
                current_page: 1,
                last_page: 1,
            },
            products: []
        }
    },
    mutations: {
        SET_PRODUCTS(state, productsData) {
            state.productsData = productsData
        },
    },
    actions: {
        async asyncGetProducts({ commit }, page) {
            try {
                await axios.get(`/api/products?page=${page}`)
                    .then((response) => {

                        commit('SET_PRODUCTS', response.data)
                    })
            } catch (error) {
                console.error(error)
            }

        },
        async productCreate({ commit,dispatch, rootState }, userData) {
            try {
                await axios.post('/api/products/create', userData, {
                    headers: {
                        Authorization: "Bearer " + rootState.auth.access_token,
                    }
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['Product was created successfully']
                        }, { root: true });
                    })
            } catch (error) {
                let alertMessages = [];
                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        alertMessages.push(error.response.data.errors[key][0]);
                    }
                }
                dispatch('global/setAndClearAlert', {
                    type: 'error',
                    messages: alertMessages
                }, { root: true });
            }
        },
        async productEdit({ commit, rootState }, userData) {
            try {
                await axios.post(`/api/products/update/${userData.get('id')}`, userData, {
                    headers: {
                        Authorization: "Bearer " + rootState.auth.access_token,
                    },

                })
                    .then(response => {

                        commit('SET_PRODUCTS', response.data)
                        commit('global/SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['Product was updated successfully']
                        }, { root: true });
                    })
            } catch (error) {
                let alertMessages = [];
                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        alertMessages.push(error.response.data.errors[key][0]);
                    }
                }
                commit('global/SET_ALERT_MESSAGES', {
                    type: 'error',
                    messages: alertMessages
                }, { root: true });
            }
        },
        async productDelete({ commit, rootState }, userData) {
            try {
                await axios.delete(`/api/products/delete/${userData.id}`, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data)
                        commit('global/SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['Product was deleted successfully']
                        }, { root: true });
                    })
            } catch (error) {
                let alertMessages = [];
                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        alertMessages.push(error.response.data.errors[key][0]);
                    }
                }
                commit('global/SET_ALERT_MESSAGES', {
                    type: 'error',
                    messages: alertMessages
                }, { root: true });
            }
        },
        async asyncGetLastThreeProducts({ commit }, page) {
            try {
                await axios.get(`/api/products/created-at`)
                    .then((response) => {
                        commit('SET_PRODUCTS', response.data)
                    })
            } catch (error) {
                console.error(error)
            }

        },


    },
    getters: {
        getProductsData(state) {
            return state.productsData
        },
        getProductDetails: (state) => (slug) => {
            const products = Array.from(state.productsData.products.data).find(product => product.slug === slug)
            return products
        }
    }
}
export default products
