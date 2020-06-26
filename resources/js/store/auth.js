const auth = {
    namespaced: true,
    state: {
        authenticate: false
    },
    mutations: {
        LOGIN(state) {
            state.authenticate = !state.authenticate
        }
    },
    actions: {

    },
    getters: {
        getAuthenticateStatus(state) {
            return state.authenticate
        }
    }
}
export default auth