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
                status: ''
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
        async asyncGetProducts({ commit }) {
            try {
                await axios.get('/api/products?page=1')
                    .then((response) => {  
                        commit('SET_PRODUCTS', response.data)
                    })
            } catch (error) {
                console.error(error)
            }
        },
        async asyncChangePage({ commit, dispatch }, pageNumber) {
            try {
                await axios.get(`/api/products?page=${pageNumber}`)
                    .then((response) => {
                        commit('SET_PRODUCTS', response.data)
                    })
            } catch(error){
                console.log(error)
            }
            

        }
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
        }
    }
}
export default products