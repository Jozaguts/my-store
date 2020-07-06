<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app>
      <v-app-bar-nav-icon @click.stop="toggleAdminDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
      <v-alert
        :type="typeOfAlert"
        @input="clearAlert"
        class="message-messages"
        dismissible
        transition="scale-transition"
        v-if="alertMessages.length"
      >
        <ul v-for="message in alertMessages" :key="message">
          <li v-text="message"></li>
        </ul>
      </v-alert>
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
      isAuthenticated: "auth/getAuthenticateStatus",
      getAlertMessage: "users/getAlertMessage"
    }),
    typeOfAlert() {
      return this.getAlertMessage.type;
    },
    alertMessages: {
      get() {
        return this.getAlertMessage.messages;
      },
      set(newName) {
        return newName;
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleAdminDrawer: "global/TOGGLE_ADMIN_DRAWER",
      clearAlert: "users/CLEAR_ALERT_MESSAGES"
    })
  }
};
</script>
<style  scoped>
@media screen and (max-width: 400px) {
  .message-messages {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 100;
  }
}
.message-messages {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 100;
}
</style>
