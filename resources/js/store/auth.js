import router from '../routes'
const auth = {
    namespaced: true,
    state: {
        isAuthenticated: false,
        access_token: null

    },
    mutations: {
        AUTHENTICATE(state, payload) {
            state.isAuthenticated = payload
        },
        SET_TOKEN(state, access_token) {
            state.access_token = access_token
        },
    },
    actions: {
        async login({ commit, state }, credentials) {
            commit('global/TOGGLE_LOADING', null, { root: true })
            try {
                await axios.post('/login', { email: credentials.email, password: credentials.password })
                    .then(response => {
                        if (response.data.access_token) {
                            commit('global/SET_USER_NAME', response.data.user, { root: true })
                            commit('SET_TOKEN', response.data.access_token)
                            commit('AUTHENTICATE', true)
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
            finally {
                commit('global/TOGGLE_LOADING', null, { root: true })
            }

        },
        async logout({ commit, state }) {
            await axios.post('/logout')
                .then(response => {
                    if (response.data.success) {
                        commit('global/SET_USER_NAME', { name: null }, { root: true })
                        commit('SET_TOKEN', null)
                        commit('AUTHENTICATE', false)
                        router.push('/')
                    } else {
                        console.log('object');
                    }
                })
        }
    },
    getters: {
        getAuthenticateStatus(state) {
            return state.isAuthenticated
        }
    }
}
export default auth
