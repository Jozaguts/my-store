const auth = {
    namespaced: true,
    state: {
        layout: 'AdminLayout',
        drawer: false,
        adminDrawer: false,
        userName: null,
        menu: [
            {
                title: "MyStore",
                icon: "",
                link: "/",
                class: "order-first mr-auto"
            },
            {
                title: "products",
                icon: "mdi-bow-tie",
                link: "/products",
                class: "order-2"
            },
            {
                title: "contact",
                icon: "mdi-account-box",
                link: "/contact",
                class: "order-4"
            },
            {
                title: "About Us",
                icon: "mdi-information",
                link: "/about",
                class: "order-3"
            }
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
        SET_USER_NAME(state, userData) {
            state.userName = userData.name
        },
        SET_ALERT_MESSAGES(state, alertMessages) {
            state.alertMessages = alertMessages;
        },
        CLEAR_ALERT_MESSAGES(state) {
            state.alertMessages.messages = [];
        }
    },
    actions: {
        setUserName(context) {
            console.log(context)
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
        }
    }
}
export default auth
