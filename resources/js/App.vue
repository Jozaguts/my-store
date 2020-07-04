<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from "./Layouts/Main.vue";
import AdminLayout from "./Layouts/Admin.vue";
import { mapState } from "vuex";
export default {
  components: { MainLayout, AdminLayout },
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