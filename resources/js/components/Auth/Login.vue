<template>
  <ValidationObserver>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="6">
            <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
              <v-text-field
                type="text"
                name="Email"
                label="Email"
                :error-messages="errors"
                v-model="credentials.email"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="6">
            <ValidationProvider v-slot="{ errors }" name="password" rules="required">
              <v-text-field
                type="password"
                name="Password"
                label="Password"
                :error-messages="errors"
                v-model="credentials.password"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="6">
            <ValidationProvider>
              <v-btn>Loging</v-btn>
            </ValidationProvider>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </ValidationObserver>
</template>
<script>
export default {
  data() {
    return {
      credentials: {
        email: null,
        password: null
      }
    };
  }
};
</script>