<template>
  <v-app>
    <v-alert type="warning" :value="true">Vuetify was installed properly</v-alert>
    <p>{{isAutenticate}}</p>
  </v-app>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: "Funciona"
    };
  },
  computed: {
    ...mapGetters({
      isAutenticate: "auth/getAuthenticateStatus"
    })
  }
};
</script>

<style>
</style>