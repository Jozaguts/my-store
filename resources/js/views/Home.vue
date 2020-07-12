<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <header>
          <h2 class="subheading primary--text text-uppercase">newly added</h2>
        </header>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" v-for="product in products" :key="product.id">
        <products-card
          v-if="product.id"
          :name="product.name"
          :slug="product.slug"
          :price="product.price"
          :description="product.description"
          :status="product.status"
          :id="product.id"
          :image="product.publicUrl"
        ></products-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12">
        <v-pagination :value="page" :length="length" @input="next" total-visible="10"></v-pagination>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import ProductsCard from "../components/Products/ProductsCard";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: { ProductsCard },
  computed: {
    products() {
      return this.$store.getters["products/getProductsData"].products.data;
    },
    page() {
      return this.$store.getters["products/getProductsData"].paginate
        .current_page;
    },
    length() {
      return this.$store.getters["products/getProductsData"].paginate.last_page;
    }
  },
  methods: {
    next(page) {
      this.$store.dispatch("products/asyncGetProducts", page);
    },

    init() {
      this.$store
        .dispatch("products/asyncGetLastThreeProducts")
        .then(() => this.$store.commit("global/SET_LAYOUT", "MainLayout"))
        .catch(error => console.error(error));
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
</style>