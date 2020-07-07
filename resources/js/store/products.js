const products = {
    namespaced: true,
    state: {
        productsPaginated:
        {
            paginate: {
                current_page: 1,
                last_page: 10,
            },
            products: {
                id: '',
                name: '',
                slug: '',
                description: '',
                price: '',
                status: 0
            }
        }
        ,
    },
    mutations: {
        SET_PRODUCTS(state, currentProductsData) {
            const { current_page, last_page } = currentProductsData.paginate;
            const _productsPaginated =
            {
                paginate: {
                    current_page,
                    last_page
                },
                products: currentProductsData.products.data
            }
            state.productsPaginated = _productsPaginated
        },
        SET_CURRENT_PAGE(state, currentPage) {
            state.productsPaginated.paginate.current_page = currentPage
        }
    },
    actions: {
        async asyncGetProducts({ commit, state }) {
            if (!state.productsPaginated.products.length && state.productsPaginated.paginate.currentPage != 1) {
                try {

                    await axios.get('/api/products?page=1')
                        .then((response) => {
                            commit('SET_PRODUCTS', response.data)
                        })
                } catch (error) {
                    console.error(error)
                }
            }
        },
        async asyncChangePage({ commit, dispatch }, pageNumber) {
            try {
                await axios.get(`/api/products?page=${pageNumber}`)
                    .then((response) => {
                        commit('SET_PRODUCTS', response.data)
                    })
            } catch (error) {
                console.log(error)
            }


        },
        async productCreate({ commit, rootState }, userData) {
            try {
                await axios.post('/api/products', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_PRODUCTS', response.data)
                        commit('global/SET_ALERT_MESSAGES', {
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
                commit('global/SET_ALERT_MESSAGES', {
                    type: 'error',
                    messages: alertMessages
                }, { root: true });
            }
        },
        async productEdit({ commit, rootState }, userData) {
            try {
                await axios.put('/api/products', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
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


    },
    getters: {
        getPaginatedProducts(state) {
            return state.productsPaginated
        },
        getCurrentPage(state) {
            return state.productsPaginated.paginate.current_page
        },
        getLastPage(state) {
            return state.productsPaginated.paginate.last_page
        },
        getProductDetails: (state) => (slug) => {
            const products = Array.from(state.productsPaginated.products).find(product => product.slug === slug)
            return products
        }
    }
}
export default products