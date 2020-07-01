<template>
  <v-app-bar color="primary" fixed app>
    <v-app-bar-nav-icon @click="TOGGLE_DRAWER" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    <v-toolbar-title class="d-flex d-sm-none">MyStore</v-toolbar-title>
    <v-btn
      v-for="btn in menu"
      :key="btn.title"
      text
      class="d-none d-sm-flex"
      :class="btn.class"
      :to="btn.link"
    >
      <v-icon left>{{btn.icon}}</v-icon>
      {{btn.title}}
    </v-btn>
    <v-btn class="order-last ml-auto d-none d-sm-flex" @click="TOGGLE_SHOW_CART" text>
      <v-badge content="6" :inline="true"></v-badge>
      <v-icon left>mdi-cart</v-icon>checkout
    </v-btn>
    <v-alert
      class="alert"
      type="success"
      dismissible
      dense
      transition="scale-transition"
      :value="showAlert"
    >I'm a success alert.</v-alert>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
      showAlert: "cart/getCartChanged"
    })
  }
};
</script>

<style>
.alert {
  position: absolute;
  top: 100%;
  right: 0;
}
</style>