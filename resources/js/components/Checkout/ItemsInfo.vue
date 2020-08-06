<template>
        <v-container class="pa-0">
            <v-row no-gutters>
                <v-col cols="12">
                    <header>
                        <h2 :class="[$vuetify.breakpoint.mobile ? 'primary--text text-bold': 'black--text subtitle-1 pa-6 text--primary' ]" class=" text-capitalize">Items in you cart</h2>
                    </header>
                </v-col>
                <v-col no-gutters cols="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center black--text text-capitalize">Name</th>
                                <th class="text-center black--text text-capitalize">Price</th>
                                <th class="text-center black--text text-capitalize">Quantity</th>
                                <th class="text-center black--text text-capitalize">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in cartItems" :key="item.name" v-show="(item.quantity > 0)">
                                <td class="text-left text-capitalize d-flex justify-md-start justify-lg-start justify-center align-center">
                                    <v-img :src="item.image" max-width="50"></v-img>
                                    <small v-show="!$vuetify.breakpoint.mobile" class="ma-0"> {{ item.name }}</small>
                                </td>
                                <td class="text-center text-capitalize">{{ item.price }}</td>
                                <td class="text-center text-capitalize">{{ item.quantity }}</td>
                                <td class="text-center text-capitalize">
                                    <v-btn color="red" text @click="deleteItem(item.id)">
                                        <v-icon>mdi-trash-can</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            <tr v-if="(totalAmount>0) && totalQuantity">
                                <td colspan="1" class="text-center text-capitalize font-weight-bold ">subtotals</td>
                                <td colspan="1" class="text-center text-capitalize font-weight-bold">{{totalAmount|money}}</td>
                                <td colspan="1" class="text-center text-capitalize font-weight-bold">{{totalQuantity}}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <section class="d-flex flex-column align-center justify-center">
                        <v-btn
                            color="primary"
                            class="text-capitalize mt-4"
                            @click="$emit('change-step','next')"
                            v-show="(totalAmount>0)&& $vuetify.breakpoint.mobile"
                        >
                            <v-icon left>mdi-check</v-icon>
                            Continue
                        </v-btn>
                    </section>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        computed: {
            ...mapGetters({
                show: "cart/getToggleShow",
                cartItems: "cart/getCartItems",
                totalQuantity: "cart/getTotalQuantity",
                totalAmount: "cart/getTotalAmount"
            })
        },
        methods: {
            ...mapMutations({
                closeSidebar: "cart/TOGGLE_SHOW_CART"
            }),
            deleteItem(id) {
                this.$store.commit("cart/DELETE_ITEM", id);
            }
        }
    };
</script>

<style>
</style>
