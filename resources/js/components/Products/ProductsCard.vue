<template>
  <v-card>
    <v-img :src="image"></v-img>
    <v-card-title v-text="name"></v-card-title>
    <v-card-subtitle class="text-uppercase">{{price|money }}</v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="primary"
        classe="text-capitalize"
        :disabled="status ? true: false"
        tile
        @click="addToCart"
      >add to cart</v-btn>
      <v-btn color="secondary" classe="text-capitalize" tile :to="`/products/${slug}`">details</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <v-card-subtitle class="text-capitalize">description</v-card-subtitle>
          <p v-text="description"></p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
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
        quantity: 1
      };
      this.$store.commit("cart/ADD_TO_CART", cartItem);
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