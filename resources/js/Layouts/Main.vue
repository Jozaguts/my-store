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
    <FooterComponent />
  </v-app>
</template>
<script>
export default {
  components: {
    FooterComponent: () => import("../components/Footer.vue"),
    NabBar: () => import("../components/NabBar.vue"),
    Banner: () => import("../components/Banner.vue"),
    NavigationLeft: () => import("../components/NavigationLeft.vue"),
    NavigationRight: () => import("../components/NavigationRight.vue")
  }
};
</script>

<style>
</style>