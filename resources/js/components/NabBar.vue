<template>
  <nav class="d-flex">
    <v-toolbar color="primary">
      <v-app-bar-nav-icon @click="toogleDrawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex d-sm-none">MyStore</v-toolbar-title>
      <v-btn
        v-for="btn in menu"
        :key="btn.title"
        text
        class="d-none d-sm-flex"  
        :class="btn.class"
        :to="btn.link"
      >
        <v-badge v-if="btn.title === 'Checkout'" content="6" :inline="true"></v-badge>
        <v-icon left>{{btn.icon}}</v-icon>
        {{btn.title}}
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      toogleDrawer: "global/toggleDrawer"
    })
  },
  computed: {
    ...mapGetters({
      drawer: "global/getDrawerStatus",
      menu: "global/getMenu"
    })
  }
};
</script>

<style>
</style>