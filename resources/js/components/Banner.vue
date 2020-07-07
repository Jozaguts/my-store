<template>
  <v-parallax dark :src="require('../assets/img/t-shirts.jpg')">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 white--text">{{title}}</h1>
        <h4 class="subheading primary--text">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  computed: {
    title() {
      switch (this.$route.name) {
        case "home":
          return "My T-shirts store";
          break;
        case "products":
          return "all  T-shirts";
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