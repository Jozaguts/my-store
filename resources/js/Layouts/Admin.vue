<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app>
      <v-app-bar-nav-icon @click="toggleAdminDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-if="isAuthenticated" :value="adminDrawer" temporary app>
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item-title class="title">{{userName}}</v-list-item-title>
              <v-list-item-subtitle>admin</v-list-item-subtitle>
            </v-list-item-content>
          </template>
          <v-list-item @click="logout" link>
            <v-list-item-title>Logout</v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="'mdi-logout'"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/getAuthenticateStatus",
      adminDrawer: "global/getAdminDrawer",
      userName: "global/getUserName"
    })
  },
  methods: {
    ...mapMutations({
      toggleAdminDrawer: "global/TOGGLE_ADMIN_DRAWER"
    }),
    ...mapActions({
      logout: "auth/logout"
    })
  }
};
</script>
