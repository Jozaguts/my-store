<template>
  <nav class="d-flex" :app="true">
    <v-toolbar color="cyan accent-4">
      <v-btn v-for="btn in buttons" :key="btn.title" text :class="btn.class" :to="btn.link">
        <v-badge v-if="btn.title === 'Checkout'" content="6" :inline="true"></v-badge>
        <v-icon left>{{btn.icon}}</v-icon>
        {{btn.title}}
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: "MyStore",
          icon: "",
          link: "/",
          class: "order-first mr-auto"
        },
        {
          title: "products",
          icon: "mdi-bow-tie",
          link: "products",
          class: "order-2"
        },
        {
          title: "contact",
          icon: "mdi-account-box",
          link: "contact",
          class: "order-4"
        },
        {
          title: "About Us",
          icon: "mdi-information",
          link: "about",
          class: "order-3"
        },
        {
          title: "Checkout",
          icon: "mdi-cart",
          link: "about",
          class: "order-last ml-auto"
        }
      ]
    };
  }
};
</script>

<style>
</style>