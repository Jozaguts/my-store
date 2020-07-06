const users = {
    namespaced: true,
    state: {
        users: [],
        alertMessages: {
            type: null,
            messages: []
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
        SET_ALERT_MESSAGES(state, alertMessages) {
            state.alertMessages = alertMessages;
        },
        CLEAR_ALERT_MESSAGES(state) {
            state.alertMessages.messages = [];
        }

    },
    actions: {
        async asyncUsers({ commit, rootState }) {
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
        },
        async createUser({ commit, rootState }, userData) {
            try {
                await axios.post('/api/users', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        commit('SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['User was created successfully']
                        });
                    })
            } catch (error) {
                let alertMessages = [];
                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        alertMessages.push(error.response.data.errors[key][0]);
                    }
                }
                commit('SET_ALERT_MESSAGES', {
                    type: 'error',
                    messages: alertMessages
                });
            }
        },
        async editUser({ commit, rootState }, userData) {
            try {
                await axios.put('/api/users', userData, {
                    headers: { Authorization: "Bearer " + rootState.auth.access_token }
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        commit('SET_ALERT_MESSAGES', {
                            type: 'success',
                            messages: ['User was updated successfully']
                        });
                    })
            } catch (error) {
                let alertMessages = [];
                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        alertMessages.push(error.response.data.errors[key][0]);
                    }
                }
                commit('SET_ALERT_MESSAGES', {
                    type: 'error',
                    messages: alertMessages
                });
            }
        },
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getAlertMessage(state) {
            return state.alertMessages
        }
    }

}
export default users;