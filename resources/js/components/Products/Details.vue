<template>
  <div>
    <h1>Este es el slug {{slug}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    productDetails() {
      return this.$store.getters["products/getProductDetails"](this.slug);
    }
  },
  mounted() {
    console.log(this.productDetails);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
    // react to route changes...
    // don't forget to call next
  }
};
</script>

<style>
</style>