<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        v-for="product in productsPaginated.products"
        :key="product.id"
      >
        <products-card
          :name="product.name"
          :price="product.price"
          :description="product.description
      "
        ></products-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-pagination :value="page" :length="length" @input="next"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsCard from "../components/Products/ProductsCard";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: { ProductsCard },
  computed: {
    ...mapGetters({
      productsPaginated: "products/getPaginatedProducts",
      page: "products/getCurrentPage",
      length: "products/getLastPage"
    })
  },
  methods: {
    ...mapActions({
      getProducts: "products/asyncGetProducts",
      changePage: "products/asyncChangePage"
    }),
    next(page) {
      this.$store.commit("products/SET_CURRENT_PAGE", page);
      this.changePage(page);
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
</style>