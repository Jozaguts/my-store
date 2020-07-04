<template>
  <h1>esta es la vista home</h1>
</template>

<script>
export default {
  created() {
    this.$store.commit("global/SET_LAYOUT", "MainLayout");
  }
};
</script>

<style>
</style>