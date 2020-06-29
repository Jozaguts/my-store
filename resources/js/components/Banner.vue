<template>
  <v-banner class="text-center py-16">
    <h1 class="text--h1 text-capitalize font-weight-bold py-8" v-text="title"></h1>
  </v-banner>
</template>

<script>
export default {
  computed: {
    title() {
      switch (this.$route.name) {
        case "home":
          return "My Store";
          break;
        case "products":
          return "all products";
        default:
          return this.$route.name;
          break;
      }
    }
  }
};
</script>

<style>
</style>