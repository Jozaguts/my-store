const auth = {
    namespaced: true,
    state: {
        layout: 'AdminLayout',
        drawer: false,
        adminDrawer: false,
        userName: null,
        loading: false,
        userId: null,
        menu: [
            {
                title: "MyStore",
                icon: "",
                link: "/",
                class: "order-first mr-auto"
            },
            {
                title: "t-shirts",
                icon: "$tshirt",
                link: "/t-shirts",
                class: "order-2"
            },
            {
                title: "blouses",
                icon: "$blouse",
                link: "/blouses",
                class: "order-4"
            },
        ],
        alertMessages: {
            type: null,
            messages: []
        }
    },
    mutations: {
        TOGGLE_DRAWER(state) {
            state.drawer = !state.drawer
        },
        TOGGLE_ADMIN_DRAWER(state) {
            state.adminDrawer = !state.adminDrawer
        },
        SET_LAYOUT(state, newLayout) {
            state.layout = newLayout
        },
        SET_USER_NAME(state, userName) {

            state.userName = userName
        },
        SET_USER_ID(state, userId) {
            state.userId = userId
        },
        SET_ALERT_MESSAGES(state, alertMessages) {
            state.alertMessages = alertMessages;
        },
        CLEAR_ALERT_MESSAGES(state) {
            state.alertMessages.messages = [];
        },
        TOGGLE_LOADING(state) {
            state.loading = !state.loading
        }
    },
    actions: {
        setUserName(context) {
            console.log(context)
        },
        async setAndClearAlert(context, alert) {
            await context.commit('SET_ALERT_MESSAGES', alert)
            await setTimeout(() => {
                context.commit('CLEAR_ALERT_MESSAGES')
            }, 3000)
        }
    },
    getters: {
        getDrawerStatus(state) {
            return state.drawer
        },
        getAdminDrawer(state) {
            return state.adminDrawer
        },
        getMenu(state) {
            return state.menu
        },
        getUserName(state) {
            return state.userName
        },
        getAlertMessage(state) {
            return state.alertMessages
        },
        getLoadingStatus(state) {
            return state.loading
        },
        getUserId(state) {
            return state.userId
        }
    }
}
export default auth
