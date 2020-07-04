import router from '../routes'
const auth = {
    namespaced: true,
    state: {
        isAuthenticated: false,
        access_token: null

    },
    mutations: {
        AUTHENTICATE(state) {
            state.isAuthenticated = !state.isAuthenticated
        },
        SET_TOKEN(state, access_token) {
            state.access_token = access_token
        }
    },
    actions: {
        async login({ commit, state }, credentials) {
            try {
                await axios.post('/api/users', { email: credentials.email, password: credentials.password })
                    .then(response => {
                        if (response.data.access_token) {
                            commit('SET_TOKEN', response.data.access_token.access_token)
                            commit('AUTHENTICATE')
                            if (state.access_token) {
                                router.push('/admin')
                            }
                        } else {
                            console.log(response.data)
                        }
                    })
            } catch (error) {
                console.error(error)
            } 

        }
    },
    getters: {
        getAuthenticateStatus(state) {
            return state.isAuthenticated
        }
    }
}
export default auth