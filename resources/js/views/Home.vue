<template>
    <v-row>
        <v-col cols="12" sm="12" md="4" lg="3">
            <header>
                <h2 class=" pa-3 subheading primary--text text-capitalize">Agregados recientemente</h2>
            </header>
            <v-carousel
                hide-delimiters
                :continuous="true"
                :cycle="false"
                :show-arrows="true"
                hide-delimiter-background
                height="auto">
                <v-carousel-item
                    v-for="(product, i) in products"
                    :key="i"
                >
                    <v-row
                    >
                        <v-col
                            class="fill-height"
                            align="center"
                            justify="center">
                            <products-card

                                v-if="product.id"
                                :name="product.name"
                                :slug="product.slug"
                                :price="product.price"
                                :description="product.description"
                                :status="product.status"
                                :id="product.id"
                                :image="product.publicUrl"
                            >
                            </products-card>
                        </v-col>
                    </v-row>

                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="3">
            <header>
                <h2 class=" pa-3 subheading primary--text text-capitalize">Agregados recientemente</h2>
            </header>
            <v-carousel
                hide-delimiters
                :continuous="true"
                :cycle="false"
                :show-arrows="true"
                hide-delimiter-background
                height="auto">
                <v-carousel-item
                    v-for="(product, i) in products"
                    :key="i"
                >
                    <v-row
                    >
                        <v-col
                            class="fill-height"
                            align="center"
                            justify="center">
                            <products-card

                                v-if="product.id"
                                :name="product.name"
                                :slug="product.slug"
                                :price="product.price"
                                :description="product.description"
                                :status="product.status"
                                :id="product.id"
                                :image="product.publicUrl"
                            >
                            </products-card>
                        </v-col>
                    </v-row>

                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="3">
            <header>
                <h2 class=" pa-3 subheading primary--text text-capitalize">Agregados recientemente</h2>
            </header>
            <v-carousel
                hide-delimiters
                :continuous="true"
                :cycle="false"
                :show-arrows="true"
                hide-delimiter-background
                height="auto">
                <v-carousel-item
                    v-for="(product, i) in products"
                    :key="i"
                >
                    <v-row
                    >
                        <v-col
                            class="fill-height"
                            align="center"
                            justify="center">
                            <products-card

                                v-if="product.id"
                                :name="product.name"
                                :slug="product.slug"
                                :price="product.price"
                                :description="product.description"
                                :status="product.status"
                                :id="product.id"
                                :image="product.publicUrl"
                            >
                            </products-card>
                        </v-col>
                    </v-row>

                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="3">
            <header>
                <h2 class=" pa-3 subheading primary--text text-capitalize">Agregados recientemente</h2>
            </header>
            <v-carousel
                hide-delimiters
                :continuous="true"
                :cycle="false"
                :show-arrows="true"
                hide-delimiter-background
                height="auto">
                <v-carousel-item
                    v-for="(product, i) in products"
                    :key="i"
                >
                    <v-row
                    >
                        <v-col
                            class="fill-height"
                            align="center"
                            justify="center">
                            <products-card

                                v-if="product.id"
                                :name="product.name"
                                :slug="product.slug"
                                :price="product.price"
                                :description="product.description"
                                :status="product.status"
                                :id="product.id"
                                :image="product.publicUrl"
                            >
                            </products-card>
                        </v-col>
                    </v-row>

                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>

</template>

<script>
import ProductsCard from "../components/Products/ProductsCard";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
    components: {ProductsCard},
    computed: {
        products() {
            return this.$store.getters["products/getProductsData"].data;
        },
        length() {
            return this.$store.getters["products/getProductsData"].last_page;
        }
    },
    methods: {
        next(page) {
            this.$store.dispatch("products/asyncGetProducts", page);
        },

        init() {
            this.$store
                .dispatch("products/asyncGetProducts", {page: "1", items: "3"})
                .then(() => this.$store.commit("global/SET_LAYOUT", "MainLayout"))
                .catch(error => console.error(error));
        }
    },

    mounted() {
        this.init();
    }
};
</script>
