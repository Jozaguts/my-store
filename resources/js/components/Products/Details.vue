<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6" class="d-flex">
        <v-card  color="grey lighten-2" elevations="0" flat fab>
            <v-card-title class="accent--text font-weight-bold">{{productDetails.name}}</v-card-title>
          <v-img class="white--text align-end"  width="300"  height="300"  :src="productDetails.publicUrl">
          </v-img>
          <v-card-actions>
            <v-btn
              color="accent"
              class="text-uppercase"
              x-large
              :disabled="!productDetails.status"
              @click="addToCart"
            >
                <v-icon>
                    mdi-cart-plus
                </v-icon>
            </v-btn>
              <v-spacer></v-spacer>
            <v-btn color="secondary" class="text-uppercase" to="/checkout">
                <v-icon>
                    mdi-credit-card-check-outline
                </v-icon>
            </v-btn>
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
          <p v-else class="grey--text text-h4 text-capitalize text-bold">unStocked</p>
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
  methods: {
    addToCart() {
      const cartItem = {
        id: this.productDetails.id,
        name: this.productDetails.name,
        price: this.productDetails.price,
        publicUrl: this.productDetails.publicUrl,
        quantity: 1
      };
      this.$store.dispatch("cart/addToCart", cartItem);
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
