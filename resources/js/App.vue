<template>
  <v-app>
    <NabBar app/>
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
import NabBar from "./components/NabBar.vue";
export default {
  components: { NabBar }
};
</script>

<style>
</style>