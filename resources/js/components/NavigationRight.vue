<template>
  <v-navigation-drawer :temporary="true" :value="show" :right="true" app></v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      show: "cart/getToggleShow"
    })
  }
};
</script>

<style>
</style>
