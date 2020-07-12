<template>
  <v-container>
    <v-row>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.commit("global/SET_LAYOUT", "AdminLayout");
  }
};
</script>

<style>
</style>