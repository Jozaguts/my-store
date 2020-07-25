<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <header class="d-flex ">
                    <h2 class="text-bold text-capitalize primary--text">Billing Information</h2>
                    <v-spacer></v-spacer>
                    <div class="div">
                        <v-dialog
                            v-model="dialog"
                            max-width="300"
                        >
                            <template v-slot:activator="{attrs}">
                                <v-btn text :loading="isLogin" @click.stop="login" v-bind="attrs" class="accent--text">
                                    <v-icon>mdi-account-check</v-icon>
                                    sign-in
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Login</v-card-title>
                                <ValidationObserver v-slot="{valid}" ref="loginForm">
                                    <v-card-text>
                                        <v-form>
                                            <ValidationProvider v-slot="{errors}" name="Email" rules="required|email">
                                                <v-text-field
                                                    :error-messages="errors"
                                                    label="Email"
                                                    v-model="credentials.email"
                                                ></v-text-field>
                                            </ValidationProvider>
                                            <ValidationProvider v-slot="{errors}" name="Password" rules="required">
                                                <v-text-field
                                                    :error-messages="errors"
                                                    label="Password"
                                                    v-model="credentials.password"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-form>
                                        <v-card-actions>
                                            <v-btn text :disabled="!valid" color="primary" @click="login">
                                                sign-in
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card-text>
                                </ValidationObserver>
                            </v-card>
                        </v-dialog>
                        <v-btn text @click="login" class="accent&#45;&#45;text">
                            <v-icon>mdi-account</v-icon>
                           guest
                        </v-btn>
                    </div>
                </header>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <ValidationObserver v-slot="{valid}">
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="6" sm="12">
                                <ValidationProvider v-slot="{ errors }" name="First Name" rules="required">
                                    <v-text-field
                                        :error-messages="errors"
                                        required
                                        type="text"
                                        label="Fist name"
                                        name="first_name"
                                        v-model="billingInformation.firstName"
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
                                        v-model="billingInformation.lastName"
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
                                        v-model="billingInformation.email"
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
                                        v-model="billingInformation.phoneNumber"
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
                                        v-model="billingInformation.address"
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
                                        v-model="billingInformation.searchCountry"
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
                                        v-model="billingInformation.searchState"
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
                                        v-model="billingInformation.searchCity"
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
                                        v-model="billingInformation.zipCode"
                                    ></v-text-field>
                                </ValidationProvider>
                            </v-col>
                        </v-row>

                    </v-form>
                    <section class="d-flex align-center justify-space-between">
                        <v-btn color="secondary" class="text-capitalize" @click="$emit('change-step',1)">
                            <v-icon left>mdi-arrow-left</v-icon>
                            back
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="text-capitalize"
                            :disabled="!valid"
                            @click="$emit('change-step',3)"
                        >
                            <v-icon left>mdi-check</v-icon>
                            continue
                        </v-btn>
                    </section>
                </ValidationObserver>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import countries from "country-state-city";

    export default {
        data() {
            return {
                dialog: false,
                credentials: {
                    email: '',
                    password: ''
                },
                autocompleteRules: [value => !!value || "this field is required"],
                billingInformation: {
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
                return countries.getAllCountries().map(elem => {
                    return {
                        text: elem.name,
                        value: elem.id
                    };
                });
            },
            isLogin() {
                return this.$store.getters['auth/getIsLogin'];
            },
            itemsState() {
                return countries
                    .getStatesOfCountry(this.billingInformation.searchCountry)
                    .map(elem => {
                        return {text: elem.name, value: elem.id};
                    });
            },
            itemsCity() {
                return countries
                    .getCitiesOfState(this.billingInformation.searchState)
                    .map(elem => {
                        return {text: elem.name, value: elem.id};
                    });
            }
        },
        methods: {
            login() {
                try {
                    this.$store.commit('auth/TOGGLE_IS_LOGIN')
                    if (this.$store.getters['auth/getAuthenticateStatus']) {
                        //si esta autnteicado pido los datos
                        console.log('autenticado SI')
                        console.log(this.$store.getters('auth/getAuthenticateStatus'))
                    } else {
                        console.log('ento al esle no esta autenticado muestro el form de login')
                        this.dialog = !this.dialog
                    }

                } catch (e) {
                    console.error(e)
                } finally {
                    console.log('entor al fnaly')
                    this.$store.commit('auth/TOGGLE_IS_LOGIN')
                }

            }
        },
        created() {

        }
    };
</script>
