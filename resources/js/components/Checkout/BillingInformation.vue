<template>
  <v-stepper-content step="2">
    <header>
      <h2 class="text-bold text-capitalize primary--text">Billing Information</h2>
    </header>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <v-text-field type="text" label="Fist name" name="fist_name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field type="text" label="Last name" name="last_name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field type="email" label="Email" name="email"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field type="text" label="Phone Number" name="phone_number"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field type="text" label="Street Address" name="street_address"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <section class="d-flex align-center justify-space-between">
      <v-btn color="secondary" class="text-capitalize" @click="$emit('change-step',1)">
        <v-icon left>mdi-arrow-left</v-icon>back
      </v-btn>
      <v-btn color="primary" class="text-capitalize" @click="$emit('change-step',3)">
        <v-icon left>mdi-check</v-icon>continue
      </v-btn>
    </section>
  </v-stepper-content>
</template>

<script>
export default {};
</script>

<style></style>