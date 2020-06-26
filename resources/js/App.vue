<template>
  <v-app>
    <app-bar-component />

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>este es el footer</v-footer>
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar.vue";
export default {
  components: { AppBarComponent }
};
</script>

<style>
</style>