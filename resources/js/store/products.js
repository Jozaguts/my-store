

const products = {
    namespaced: true,
    state: {
        productsData: []
    },
    mutations: {
        SET_PRODUCTS(state, productsData) {
            state.productsData = productsData
        },
    },
    actions: {
        async asyncGetProducts({commit}, {page, items}) {
            try {
                await axios.get(`/api/products?page=${!page ? 1 : page}&items=${items}`)
                    .then((response) => {
                        commit('SET_PRODUCTS', response.data.data)
                    })

            } catch (error) {
                console.error(error)
            }

        },
        async productCreate({commit, dispatch, rootState}, userData) {
            commit('global/TOGGLE_LOADING', null, {root: true})
            try {
                await axios.post('/api/products/store', userData, {
                    headers: {
                        Authorization: "Bearer " + rootState.auth.access_token,
                    }
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data.data)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['Product was created successfully']
                        }, {root: true});
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
                }, {root: true});
            } finally {
                commit('global/TOGGLE_LOADING', null, {root: true})
            }
        },
        async productEdit({commit, dispatch, rootState}, {data,id}) {
            try {
                await axios.post(`/api/products/update/${id}`, data,{
                    headers: {
                        Authorization: "Bearer " + rootState.auth.access_token,
                    },
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data.data)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['Product was updated successfully']
                        }, {root: true});
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
                }, {root: true});
            }
        },
        async productDelete({commit, dispatch, rootState}, userData) {
            try {
                await axios.delete(`/api/products/delete/${userData.id}`, {
                    headers: {Authorization: "Bearer " + rootState.auth.access_token}
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data.data)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['Product was deleted successfully']
                        }, {root: true});
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
                }, {root: true});
            }
        },
    },
    getters: {
        getProductsData(state) {
            return state.productsData
        },
        getProductDetails: (state) => (slug) => {
            const products = Array.from(state.productsData.data).find(product => product.slug === slug)
            return products
        }
    }
}
export default products
