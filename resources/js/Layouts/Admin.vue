<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app>
      <v-app-bar-nav-icon @click.stop="toggleAdminDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
    </v-app-bar>
    <NavigationDrawerComponent />
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    NavigationDrawerComponent: () =>
      import("../components/Admin/DrawerNavigation.vue")
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/getAuthenticateStatus"
    })
  },
  methods: {
    ...mapMutations({
      toggleAdminDrawer: "global/TOGGLE_ADMIN_DRAWER"
    })
  }
};
</script>
