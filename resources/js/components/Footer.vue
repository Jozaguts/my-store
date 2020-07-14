<template>
  <v-footer dark padless>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" align="center">
          <v-btn
            v-for="button in buttons"
            :key="button.icon"
            class="mx-4 white--text"
            :href="button.href"
            target="_blank"
          >
            <v-icon size="24px">{{ button.icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" align="center">
          <p class="white--text pt-0">This platform was created with the following technologies.</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="2">
          <v-img
            :src="require('../assets/img/vuetify.png')"
            max-width="200"
            alt="Vuetify"
            name="Vuetify"
            class="mx-auto"
          ></v-img>
        </v-col>
        <v-col cols="2">
          <v-img
              :src="require('../assets/img/vuejs.png')"
              max-width="200"
               aspect-ratio="1" contain
            class="mx-auto"
          ></v-img>
        </v-col>
          <v-col cols="2">
          <v-img
              :src="require('../assets/img/vue-router.png')"
              max-width="200"
               aspect-ratio="1" contain
            class="mx-auto"
          ></v-img>
        </v-col>
          <v-col cols="2">
          <v-img
              :src="require('../assets/img/vuex.png')"
              max-width="200"
               aspect-ratio="1" contain
            class="mx-auto"
          ></v-img>
        </v-col>
          <v-col cols="2">
          <v-img
              :src="require('../assets/img/laravel.png')"
              max-width="200"
               aspect-ratio="1" contain
            class="mx-auto"
          ></v-img>
        </v-col>
          <v-col cols="2">
          <v-img
              :src="require('../assets/img/S3.png')"
              max-width="200"
               aspect-ratio="1" contain
            class="mx-auto"
          ></v-img>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align="center">
          <v-divider></v-divider>
          <p class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>Jozaguts</strong>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    buttons: [
      {
        icon: "mdi-facebook",
        href: "https://www.facebook.com/JozagutsDev"
      },
      {
        icon: "mdi-twitter",
        href: "https://www.twitter.com/jozaguts"
      },
      {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/jozaguts/"
      },
      {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/jozagutsdev"
      }
    ]
  })
};
</script>

<style>
</style>
