const users = {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }

    },
    actions: {
        async asyncUsers(context) {

            try {
                await axios.get('/api/users', {
                    headers: { Authorization: "Bearer " + context.rootState.auth.access_token }
                })
                    .then((response) => {
                        context.commit('SET_USERS', response.data.users)
                    })
            } catch (error) {
                console.log(console.log(error));
            }
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    }

}
export default users;