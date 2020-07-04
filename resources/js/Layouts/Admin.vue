<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app></v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/getAuthenticateStatus"
    })
  }
};
</script>
