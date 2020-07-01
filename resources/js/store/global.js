const auth = {
    namespaced: true,
    state: {
        drawer: false,
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
            },
            // {
            //     title: "Checkout",
            //     icon: "mdi-cart",
            //     link: "/about",
            //     class: "order-last ml-auto"
            // }
        ]
    },
    mutations: {
        TOGGLE_DRAWER(state) {
            state.drawer = !state.drawer
        }
    },
    actions: {

    },
    getters: {
        getDrawerStatus(state) {
            return state.drawer
        },
        getMenu(state) {
            return state.menu
        }
    }
}
export default auth