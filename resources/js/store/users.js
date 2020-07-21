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
        async asyncUsers({commit, state, rootState}) {
            if (!state.users.length) {
                try {
                    await axios.get('/api/users/index', {
                        headers: {Authorization: "Bearer " + rootState.auth.access_token}
                    })
                        .then((response) => {
                            commit('SET_USERS', response.data.users)
                        })
                } catch (error) {
                    console.log(console.log(error));
                }
            }
        },
        async userCreate({commit,dispatch, rootState}, userData) {
            try {
                await axios.post('/api/users/store', userData, {
                    headers: {Authorization: "Bearer " + rootState.auth.access_token}
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['User was created successfully']
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
        async userEdit({commit,dispatch, rootState}, userData) {
            try {
                await axios.put('/api/users/update', userData, {
                    headers: {Authorization: "Bearer " + rootState.auth.access_token}
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['User was updated successfully']
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
        async userDelete({commit,dispatch, rootState}, userData) {
            try {
                await axios.delete(`/api/users/delete/${userData.id}`, {
                    headers: {Authorization: "Bearer " + rootState.auth.access_token}
                })
                    .then(response => {
                        commit('SET_USERS', response.data.users)
                        dispatch('global/setAndClearAlert', {
                            type: 'success',
                            messages: ['User was deleted successfully']
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
        getUsers(state) {
            return state.users
        },
    }

}
export default users;
