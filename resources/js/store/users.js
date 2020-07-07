const users = {
    namespaced: true,
    state: {
        users: [],
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }

    },
    actions: {
        async asyncUsers({ commit, state, rootState }) {
            if (!state.users.length) {
                try {
                    await axios.get('/api/users', {
                        headers: { Authorization: "Bearer " + rootState.auth.access_token }
                    })
                        .then((response) => {
                            commit('SET_USERS', response.data.users)
                        })
                } catch (error) {
                    console.log(console.log(error));
                }
            }
        },
        async userCreate({ commit, rootState }, userData) {
            try {
                await axios.post('/api/users', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        console.log(rootState.global);
                        commit('global/SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['User was created successfully']
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
        async userEdit({ commit, rootState }, userData) {
            try {
                await axios.put('/api/users', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        commit('global/SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['User was updated successfully']
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
        async userDelete({ commit, rootState }, userData) {
            try {
                await axios.delete(`/api/users/delete/${userData.id}`, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        commit('global/SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['User was deleted successfully']
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
        getUsers(state) {
            return state.users
        },
    }

}
export default users;