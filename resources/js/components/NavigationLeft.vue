<template>
  <v-navigation-drawer app :value="drawer">
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
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      menu: "global/getMenu",
      drawer: "global/getDrawerStatus"
    })
  }
};
</script>

<style>
</style>
