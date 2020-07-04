<template>
  <v-app>
    <NabBar />
    <navigationLeft />
    <navigationRight />
    <v-main>
      <v-container fluid>
        <Banner />
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>este es el footer</v-footer>
  </v-app>
</template>
<script>
import NabBar from "../components/NabBar.vue";
import Banner from "../components/Banner.vue";
import NavigationLeft from "../components/NavigationLeft.vue";
import NavigationRight from "../components/NavigationRight.vue";
export default {
  components: { NabBar, Banner, NavigationLeft, NavigationRight }
};
</script>

<style>
</style>