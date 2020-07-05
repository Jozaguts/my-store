<template>
  <v-navigation-drawer temporary v-model="showDrawer" app>
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
    <v-btn class="order-last ml-auto" @click="showCartAndHideMenu" text>
      <v-badge content="6" :inline="true"></v-badge>
      <v-icon left>mdi-cart</v-icon>checkout
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    showDrawer: false
  }),
  computed: {
    ...mapGetters({
      menu: "global/getMenu",
      getDrawerStatus: "global/getDrawerStatus"
    })
  },
  watch: {
    getDrawerStatus() {
      this.showDrawer = !this.showDrawer;
    }
  },
  methods: {
    ...mapMutations({
      showCart: "cart/TOGGLE_SHOW_CART",
      hideSideBar: "global/TOGGLE_DRAWER",
      showCartAndHideMenu() {
        this.showCart();
        if (this.drawer) {
          this.hideSideBar();
        }
      }
    })
  }
};
</script>

<style>
</style>
