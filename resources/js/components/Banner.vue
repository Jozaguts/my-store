<template>
  <v-parallax dark :src="require('../assets/img/banner.jpg')" v-if="this.$route.name !='checkout'">
    <v-row >
      <v-col class="d-flex" cols="12">
        <h1 class="display-1 secondary--text text-capitalize">{{title}}</h1>

<!--        <h4 class="subheading primary&#45;&#45;text">Build your application today!</h4>-->
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
          return "My clothes store";
          break;
          case "productsDetails":
          return "Product details";
          break;
        case "t-shirts":
          return "All t-shirts";
          case "blouses":
              return "All blouses";
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
