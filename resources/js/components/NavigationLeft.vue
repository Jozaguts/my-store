<template>
  <v-navigation-drawer :temporary="true" :value="drawer" app>
    <v-list>
      <v-list-item v-for="btn in menu" :key="btn.title" :to="btn.link">
        <v-list-item-icon>
          <v-icon>{{btn.icon}}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ btn.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-btn class="order-last ml-auto" @click="showCart" text>
      <v-badge content="6" :inline="true"></v-badge>
      <v-icon left>mdi-cart</v-icon>checkout
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      menu: "global/getMenu",
      drawer: "global/getDrawerStatus"
    })
  },
  methods: {
    ...mapMutations({
      showCart: "cart/TOGGLE_SHOW_CART"
    })
  },
  
};
</script>

<style>
</style>
