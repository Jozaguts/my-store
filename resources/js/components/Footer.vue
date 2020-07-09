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
        <v-col>
          <v-img
            src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"
            max-height="100"
            max-width="100"
            class="mx-auto"
            alt="Vuetify"
            name="Vuetify"
          ></v-img>
        </v-col>
        <v-col class="d-flex">
          <v-img
            src="https://cdn.glitch.com/project-avatar/001fabdc-d95c-4523-a793-1e3114a62699.png"
            max-height="100"
            max-width="100"
            class="mx-auto"
          ></v-img>
          <v-img
            src="https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png"
            max-height="100"
            max-width="100"
            class="mx-auto"
          ></v-img>
          <v-img
            src="https://secure.meetupstatic.com/photos/event/8/9/a/d/600_480095245.jpeg"
            max-height="100"
            max-width="100"
            class="mx-auto"
          ></v-img>
        </v-col>
        <v-col>
          <v-img
            src="https://desarrolloweb.com/storage/tag_images/actual/7sY8a8whbcQcFvkV3nQGiCjXYITUgdLALYqlFzmM.png"
            max-height="150"
            max-width="150"
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