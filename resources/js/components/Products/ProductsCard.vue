<template>
    <v-card color="grey lighten-2" ripple :to="`/products/${slug}`">
        <v-card-title class="accent--text font-weight-bold" v-text="name"></v-card-title>
        <v-img hide-on-leave transition="fab-transition" :src="image" width="300"  height="300" ></v-img>
        <v-card-subtitle class="text-uppercase text-left font-weight-bold primary--text">{{price|money }}</v-card-subtitle>
        <v-card-actions>
            <v-btn
                color="accent"
                classe="text-capitalize font-weight-bold"
                :disabled="!status"
                tile
                @click.prevent="addToCart"
            >
                <v-icon>
                    mdi-cart-plus
                </v-icon>
            </v-btn>
<!--            <v-btn color="primary" classe="text-capitalize" tile :to="`/products/${slug}`">details</v-btn>-->
            <v-spacer></v-spacer>
<!--            <v-btn icon @click="show = !show">-->
<!--                <v-icon color="secondary">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
<!--            </v-btn>-->

        </v-card-actions>
<!--        <v-expand-transition>-->
<!--            <div v-show="show">-->
<!--                <v-divider></v-divider>-->
<!--                <v-card-text>-->
<!--                    <v-card-subtitle class="text-capitalize px-0 primary&#45;&#45;text text-left">description</v-card-subtitle>-->
<!--                    <p class="text-justify primary&#45;&#45;text" v-text="description"></p>-->
<!--                </v-card-text>-->
<!--            </div>-->
<!--        </v-expand-transition>-->
    </v-card>
</template>

<script>
    // import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
    export default {
        data() {
            return {
                show: false
            };
        },
        methods: {
            addToCart() {
                const cartItem = {
                    id: this.id,
                    name: this.name,
                    price: this.price,
                    quantity: 1,
                    image: this.image
                };
                this.$store.dispatch("cart/addToCart", cartItem);
            }
        },
        props: {
            image: {
                type: String,
                required: true,
                default: '"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            },
            slug: {
                type: String,
                required: true,
                default: ""
            },
            name: {
                type: String,
                required: true,
                default: ""
            },
            price: {
                type: String,
                required: true,
                default: ""
            },
            description: {
                type: String,
                required: true,
                default: ""
            },
            status: {
                type: Number,
                required: true,
                default: 0
            },
            id: {
                type: Number,
                required: true
            }
        }
    };
</script>

<style>
</style>
