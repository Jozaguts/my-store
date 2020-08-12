<template>
    <v-container>
        <v-row>
            <v-col>
                <header>
                    <h2 class="text-bold text-capitalize primary--text">Payment Information</h2>
                </header>
            </v-col>
        </v-row>
        <ValidationObserver v-slot="{valid}">
            <v-row>
                <v-col cols="12">
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="6" sm="12">
                                <validation-provider name="Credit Cart" rules="required|digits:16" v-slot="{errors}">
                                    <v-text-field
                                        type="text"
                                        label="Credit Card"
                                        :error-messages="errors"
                                        v-model="paymentInformation.creditCard"
                                        counter="16"
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="4" md="4" sm="4">
                                <validation-provider name="Exp. Date" rules="required|min:4" v-slot="{errors}">
                                    <v-text-field
                                        type="text"
                                        label="Exp. Date"
                                        :error-messages="errors"
                                        v-model="paymentInformation.expDate"
                                        placeholder="MM/YY"
                                        hint="MM/YY"
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="4" md="4" sm="4">
                                <validation-provider name="CVC" rules="required|min:3" v-slot="{errors}">
                                    <v-text-field
                                        type="password"
                                        label="CVC"
                                        :error-messages="errors"
                                        v-model="paymentInformation.cvc"
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="4" md="4" sm="4">
                                <validation-provider name="Zipcode" rules="required|digits:5" v-slot="{errors}">
                                    <v-text-field
                                        type="text"
                                        label="Zipcode"
                                        :error-messages="errors"
                                        v-model="paymentInformation.zipCode"
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
                <v-col cols="12">
                    <section class="d-flex mb-8 align-center justify-center">
                        <v-btn
                            color="primary"
                            class="text-capitalize"
                            :x-large="true"
                            :disabled="!valid"
                            @click="checkOut"
                        >Pay {{ totalAmount|money }}
                        </v-btn>
                    </section>
                </v-col>
                <v-col cols="12">
                    <section class="d-flex align-center justify-start">
                        <v-btn color="secondary" class="text-capitalize" @click="$emit('change-step','back')">
                            <v-icon left>mdi-arrow-left</v-icon>
                            back
                        </v-btn>
                    </section>
                </v-col>
            </v-row>
        </ValidationObserver>

    </v-container>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
            paymentInformation: {
                creditCard: null,
                expDate: null,
                cvc: null,
                zipCode: null
            }
        };
    },
    computed: {
        ...mapGetters({
            totalAmount: "cart/getTotalAmount"
        })
    },
    methods:{
        ...mapActions({
            checkOut: 'cart/checkOut'
        })
    }
};
</script>
