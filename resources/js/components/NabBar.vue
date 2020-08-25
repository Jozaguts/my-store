<template>
    <v-app-bar
        fixed
        color="primary"
    >
        <div class="container d-flex flex-wrap fill-height pa-0">
            <v-avatar color="accent" class="mr-3">
                <v-icon>
                    $tShirtLogo
                </v-icon>
            </v-avatar>
            <router-link to="/">
                <v-toolbar-title class="text-h6 text-md-h5 white--text">MyStore</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn fab small color="accent" rounded ripple
                   @click="TOGGLE_SHOW_CART">
                <v-badge v-show="totalQuantity>=0" :content="totalQuantity" bordered color="accent" :left="true">
                    <v-icon dark>$shoppingCart</v-icon>
                </v-badge>
            </v-btn>
        </div>
        <template class=" secondary " v-slot:extension>
            <v-tabs class="secondary" :centered="mdAndUp">
                <template v-if="mdAndUp">
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                </template>
                <v-app-bar-nav-icon
                    v-if="!mdAndUp"
                    color="white"
                    class="secondary ml-4 d-flex d-md-none"
                    @click="TOGGLE_DRAWER">
                </v-app-bar-nav-icon>
            </v-tabs>
            <v-alert
                class="alert"
                type="success"
                dismissible
                dense
                transition="scale-transition"
                :value="showAlert"
            >Producto agregado correctamente.
            </v-alert>
        </template>

    </v-app-bar>
    <!--    <v-app-bar prominent app>-->
    <!--        &lt;!&ndash;        <v-app-bar-nav-icon @click="TOGGLE_DRAWER" class="d-flex d-sm-none"></v-app-bar-nav-icon>&ndash;&gt;-->
    <!--        <router-link to="/">-->
    <!--            <v-toolbar-title class="accent&#45;&#45;text display-2">MyStore</v-toolbar-title>-->
    <!--        </router-link>-->
    <!--        <v-spacer></v-spacer>-->
    <!--        <v-btn class=" order-last mx-4 ml-auto d-none d-sm-flex" fab dark large color="accent"-->
    <!--               @click="TOGGLE_SHOW_CART">-->
    <!--            <v-badge v-show="totalQuantity" :content="totalQuantity" color="accent" :left="true">-->
    <!--                <v-icon dark>$shoppingCart</v-icon>-->
    <!--            </v-badge>-->
    <!--        </v-btn>-->

    <!--        <template  color="accent" class="accent" v-slot:extension>-->
    <!--            <v-tabs class="accent ma-0 pa-0">-->
    <!--                <v-tab>Item One</v-tab>-->
    <!--                <v-tab>Item Two</v-tab>-->
    <!--                <v-tab>Item Three</v-tab>-->
    <!--            </v-tabs>-->
    <!--        </template>-->


    <!--        &lt;!&ndash;    <v-btn&ndash;&gt;-->
    <!--        &lt;!&ndash;      v-for="btn in menu"&ndash;&gt;-->
    <!--        &lt;!&ndash;      :key="btn.title"&ndash;&gt;-->
    <!--        &lt;!&ndash;      text&ndash;&gt;-->
    <!--        &lt;!&ndash;      class="d-none d-sm-flex"&ndash;&gt;-->
    <!--        &lt;!&ndash;      :class="btn.class"&ndash;&gt;-->
    <!--        &lt;!&ndash;      :to="btn.link"&ndash;&gt;-->
    <!--        &lt;!&ndash;    >&ndash;&gt;-->
    <!--        &lt;!&ndash;      <v-icon left>{{btn.icon}}</v-icon>&ndash;&gt;-->
    <!--        &lt;!&ndash;      {{btn.title}}&ndash;&gt;-->
    <!--        &lt;!&ndash;    </v-btn>&ndash;&gt;-->
    <!--        &lt;!&ndash;    <v-btn class="order-last ml-auto d-none d-sm-flex" @click="TOGGLE_SHOW_CART" text>&ndash;&gt;-->
    <!--        &lt;!&ndash;      <v-badge v-show="totalQuantity" :content="totalQuantity" color="green" :inline="true"></v-badge>&ndash;&gt;-->
    <!--        &lt;!&ndash;      <v-icon left>$shoppingCart</v-icon>checkout&ndash;&gt;-->
    <!--        &lt;!&ndash;    </v-btn>&ndash;&gt;-->


    <!--        <v-alert-->
    <!--            class="alert"-->
    <!--            type="success"-->
    <!--            dismissible-->
    <!--            dense-->
    <!--            transition="scale-transition"-->
    <!--            :value="showAlert"-->
    <!--        >I'm a success alert.-->
    <!--        </v-alert>-->
    <!--    </v-app-bar>-->
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    methods: {
        ...mapMutations({
            TOGGLE_DRAWER: "global/TOGGLE_DRAWER",
            TOGGLE_SHOW_CART: "cart/TOGGLE_SHOW_CART"
        })
    },
    computed: {
        ...mapGetters({
            drawer: "global/getDrawerStatus",
            menu: "global/getMenu",
            showAlert: "cart/getCartChanged",
            totalQuantity: "cart/getTotalQuantity",
        }),
        mdAndUp: function () {
            return this.$vuetify.breakpoint.mdAndUp
        }
    }
};
</script>

<style lang="sass">
.alert
    position: absolute
    top: 100%
    right: 0

.v-toolbar__content
    padding-bottom: 0

.v-toolbar__extension
    background-color: #BFA473

</style>
