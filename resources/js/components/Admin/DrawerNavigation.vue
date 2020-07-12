<template>
  <v-navigation-drawer v-model="adminDrawer" temporary v-if="isAuthenticated" app>
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-account-tie</v-icon>
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
      <v-list-item-group color="primary">
        <v-list-item to="/admin/users">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/admin/products">
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    adminDrawer: false
  }),
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/getAuthenticateStatus",
      getAdminDrawer: "global/getAdminDrawer",
      userName: "global/getUserName"
    })
  },
  watch: {
    getAdminDrawer(old) {
      this.adminDrawer = !this.adminDrawer;
    }
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    })
  }
};
</script>
