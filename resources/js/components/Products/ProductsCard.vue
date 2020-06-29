<template>
  <v-card>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
    <v-card-title v-text="name"></v-card-title>
    <v-card-subtitle class="text-uppercase" v-text="price"></v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" classe="text-capitalize" tile>add to cart</v-btn>
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
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    img: {
      type: String,
      required: true,
      default: '"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>