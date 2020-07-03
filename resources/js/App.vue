<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from "./Layouts/Main.vue";
import LoginLayout from "./Layouts/Auth.vue";
import { mapState } from "vuex";
export default {
  components: { MainLayout, LoginLayout },
  computed: {
    ...mapState({
      layout(state) {
        return state.global.layout;
      }
    })
  }
};
</script>

<style>
</style>