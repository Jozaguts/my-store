<template>
  <v-stepper-content step="2">
    <header>
      <h2 class="text-bold text-capitalize primary--text">Billing Information</h2>
    </header>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <ValidationProvider v-slot="{ errors }" name="First Name" rules="required">
              <v-text-field
                :error-messages="errors"
                required
                type="text"
                label="Fist name"
                name="first_name"
                v-model="billingInfomation.firstName"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <ValidationProvider v-slot="{ errors }" name="Last Name" rules="required">
              <v-text-field
                type="text"
                label="Last name"
                name="last_name"
                :error-messages="errors"
                required
                v-model="billingInfomation.lastName"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <ValidationProvider v-slot="{ errors }" name="email" rules="email|required">
              <v-text-field
                type="email"
                label="Email"
                name="email"
                :error-messages="errors"
                required
                v-model="billingInfomation.email"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <ValidationProvider v-slot="{ errors }" name="Phone Number" rules="digits:10|required">
              <v-text-field
                type="text"
                label="Phone Number"
                name="phone_number"
                :error-messages="errors"
                v-model="billingInfomation.phoneNumber"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <ValidationProvider v-slot="{ errors }" name="Street Address" rules="required">
              <v-text-field
                type="text"
                label="Street Address"
                name="street_address"
                :error-messages="errors"
                v-model="billingInfomation.address"
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-autocomplete
              label="Country"
              name="country"
              :rules="autocompleRules"
              v-model="billingInfomation.searchCountry"
              :items="itemsCountry"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" lg="4" sm="12">
            <v-autocomplete
              label="State"
              name="state"
              v-model="billingInfomation.searchState"
               :rules="autocompleRules"
              :items="itemsState"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" lg="4" sm="12">
            <v-autocomplete
              label="City"
              name="city"
              v-model="billingInfomation.searchCity"
               :rules="autocompleRules"
              :items="itemsCity"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" lg="4" sm="12">
            <v-text-field
              type="text"
              label="Zip code"
              name="zip_code"
               :rules="autocompleRules"
              v-model="billingInfomation.zipCode"
            ></v-text-field>
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
import countryes from "country-state-city";
export default {
  data() {
    return {
      autocompleRules: [value => !!value || 'this field is required'],
      billingInfomation: {
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        phoneNumber: null,
        searchCountry: null,
        searchState: null,
        searchCity: null,
        zipCode: null
      }
    };
  },
  computed: {
    itemsCountry() {
      return countryes.getAllCountries().map(elem => {
        return {
          text: elem.name,
          value: elem.id
        };
      });
    },
    itemsState() {
      return countryes
        .getStatesOfCountry(this.billingInfomation.searchCountry)
        .map(elem => {
          return { text: elem.name, value: elem.id };
        });
    },
    itemsCity() {
      return countryes
        .getCitiesOfState(this.billingInfomation.searchState)
        .map(elem => {
          return { text: elem.name, value: elem.id };
        });
    }
  }
};
</script>