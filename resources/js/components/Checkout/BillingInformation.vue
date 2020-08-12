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
                        <v-btn text @click="isGuest = true" class="accent&#45;&#45;text">
                            <v-icon>mdi-account</v-icon>
                            guest
                        </v-btn>
                    </div>
                </header>
            </v-col>
        </v-row>
        <ValidationObserver v-slot="{valid}">
            <v-row>
                <v-col v-if="!isGuest">
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
                                            v-model="billingInformationDraft.first_name"
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
                                            v-model="billingInformationDraft.last_name"
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
                                            v-model="billingInformationDraft.email"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        name="Phone Number"
                                        rules="digits:12|required"
                                    >
                                        <v-text-field
                                            type="text"
                                            counter="12"
                                            label="Phone Number"
                                            name="phone_number"
                                            :error-messages="errors"
                                            v-model="billingInformationDraft.phone"
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
                                            v-model="billingInformationDraft.address"
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
                                            v-model="billingInformationDraft.country"
                                            :items="billingInformationDraft.country==null ? itemsCountry:[billingInformationDraft.country]"
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
                                            v-model="billingInformationDraft.state"
                                            :items="billingInformationDraft.state==null?itemsState:[billingInformationDraft.state]"
                                        ></v-autocomplete>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" md="4" lg="4" sm="12">
                                    <ValidationProvider v-slot="{ errors }" name="City" rules="required">
                                        <v-autocomplete
                                            label="City"
                                            name="city"
                                            :error-messages="errors"
                                            v-model="billingInformationDraft.city"
                                            :items="billingInformationDraft.city==null?itemsCity:[billingInformationDraft.city]"
                                        ></v-autocomplete>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" md="4" lg="4" sm="12">
                                    <ValidationProvider v-slot="{ errors }" name="Zip code" rules="required|digits:5">
                                        <v-text-field

                                            type="text"
                                            label="Zip code"
                                            name="zipcode"
                                            counter="5"
                                            :error-messages="errors"
                                            v-model="billingInformationDraft.zipcode"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                            </v-row>

                        </v-form>
                </v-col>
                <v-col v-else>
                    <ValidationObserver v-slot="{valid}" ref="form-guest">
                        <v-form>
                            <ValidationProvider v-slot="{errors}" name="Email" rules="required|email">
                                <v-text-field
                                    label="Email"
                                    :error-messages="errors"
                                    v-model="emailGuest"
                                >

                                </v-text-field>
                            </ValidationProvider>
                        </v-form>
                    </ValidationObserver>
                </v-col>
                <v-col cols="12">
                    <section class="d-flex align-center justify-space-between">
                        <v-btn color="secondary" class="text-capitalize" @click="$emit('change-step', 'back')">
                            <v-icon left>mdi-arrow-left</v-icon>
                            back
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="text-capitalize"
                            :disabled="!valid"
                            @click="$emit('change-step','next')"
                        >
                            <v-icon left>mdi-check</v-icon>
                            continue
                        </v-btn>
                    </section>
                </v-col>
            </v-row>
        </ValidationObserver>
    </v-container>
</template>

<script>
import countries from "country-state-city";


export default {
    data() {
        return {
            dialog: false,
            isGuest: false,
            emailGuest: '',
            credentials: {
                email: '',
                password: ''
            },
            autocompleteRules: [value => !!value || "this field is required"],
            billingInformationDraft: {
                first_name: null,
                last_name: null,
                email: null,
                address: null,
                phone: null,
                country: null,
                state: null,
                city: null,
                zipcode: null
            }
        };
    },
    watch: {
        billingInformationDraft(newValue, oldValue){
            this.$store.commit('cart/SET_BILLING_INFORMATION',newValue)
        }
        // phone: function (oldValue, newValue) {
        //     if (oldValue != null || newValue != null) {
        //         return this.billingInformation.phone = oldValue.replace(/\s/g, '')
        //     }
        // }
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
        // phone() {
        //     return this.billingInformation.phone
        // },
        isLogin() {
            return this.$store.getters['auth/getIsLogin'];
        },
        isAuthenticated() {
            return this.$store.getters['auth/getAuthenticateStatus']
        },
        itemsState() {
            return countries
                .getStatesOfCountry(this.billingInformationDraft.country)
                .map(elem => {
                    return {text: elem.name, value: elem.id};
                });
        },
        itemsCity() {
            return countries
                .getCitiesOfState(this.billingInformationDraft.state)
                .map(elem => {
                    return {text: elem.name, value: elem.id};
                });
        },
    },
    methods: {
        login() {
            try {
                this.$store.commit('auth/TOGGLE_IS_LOGIN')
                if (this.$store.getters['auth/getAuthenticateStatus']) {
                    this.isGuest = false
                    // //si esta autnteicado pido los datos
                    // console.log('autenticado SI')
                    // console.log(this.$store.getters('auth/getAuthenticateStatus'))
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

        },
    },
    created: function () {
        if (this.isAuthenticated) {
            try {
                this.$store.dispatch('users/getUserInformation')
                .then(()=>{
                    this.billingInformationDraft = this.$store.getters['cart/getBillingInformation']
                })
            } catch (e) {
                console.error(e)
            }

        } else {
            console.log(' entro al else del created')
        }
    }
};
</script>
