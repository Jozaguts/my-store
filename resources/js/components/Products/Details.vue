<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{productDetails.name}}</v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn
              color="primary"
              class="text-uppercase"
              :disabled="!productDetails.status"
            >add to cart</v-btn>
            <v-btn color="secondary" class="text-uppercase" to="/checkout">checkout</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <section class="d-flex flex-column">
          <h3 class="text-bold text-capitalize">description</h3>
          <p class="text-body-1">{{productDetails.description}}</p>
        </section>
        <section class="d-flex flex-column">
          <h3 class="text-bold text-capitalize">stock</h3>
          <p v-if="productDetails.status" class="green--text text-h4 text-capitalize">in stock</p>
          <p v-else class="grey--text text-h4 text-capitalize text-bold">unstocked</p>
        </section>
        <section class="d-flex flex-column">
          <h3 class="text-bold text-capitalize">price</h3>
          <p class="text-h4 text-capitalize">{{productDetails.price|money}}</p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    productDetails() {
      return this.$store.getters["products/getProductDetails"](this.slug);
    }
  },
  mounted() {
    this.productDetails;
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
    // react to route changes...
    // don't forget to call next
  }
};
</script>

<style>
</style>