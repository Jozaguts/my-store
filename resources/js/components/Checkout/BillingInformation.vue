<template>
  <v-stepper-content step="2">
    <header>
      <h2 class="text-bold text-capitalize primary--text">Billing Information</h2>
    </header>
    <ValidationObserver v-slot="{valid}">
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
              <ValidationProvider
                v-slot="{ errors }"
                name="Phone Number"
                rules="digits:10|required"
              >
                <v-text-field
                  type="text"
                  counter="10"
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
              <ValidationProvider v-slot="{ errors }" name="Country" rules="required">
                <v-autocomplete
                  type="text"
                  label="Country"
                  name="country"
                  :error-messages="errors"
                  v-model="billingInfomation.searchCountry"
                  :items="itemsCountry"
                ></v-autocomplete>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <ValidationProvider v-slot="{errors}" name="State" rules="required">
                <v-autocomplete
                  type="text"
                  label="State"
                  name="state"
                  :error-messages="errors"
                  v-model="billingInfomation.searchState"
                  :items="itemsState"
                ></v-autocomplete>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <ValidationProvider v-slot="{ errors }" name="City" rules="required">
                <v-autocomplete
                  label="City"
                  name="city"
                  :error-messages="errors"
                  v-model="billingInfomation.searchCity"
                  :items="itemsCity"
                ></v-autocomplete>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
              <ValidationProvider v-slot="{ errors }" name="Zip code" rules="required|digits:5">
                <v-text-field
                  type="text"
                  label="Zip code"
                  name="zip_code"
                  counter="5"
                  :error-messages="errors"
                  v-model="billingInfomation.zipCode"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <section class="d-flex align-center justify-space-between">
        <v-btn color="secondary" class="text-capitalize" @click="$emit('change-step',1)">
          <v-icon left>mdi-arrow-left</v-icon>back
        </v-btn>
        <v-btn
          color="primary"
          class="text-capitalize"
          :disabled="!valid"
          @click="$emit('change-step',3)"
        >
          <v-icon left>mdi-check</v-icon>continue
        </v-btn>
      </section>
    </ValidationObserver>
  </v-stepper-content>
</template>

<script>
import countryes from "country-state-city";
export default {
  data() {
    return {
      autocompleRules: [value => !!value || "this field is required"],
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