<template>
    <v-container>
        <v-row class="d-flex align-start justify-center">
            <v-col cols="12" md="6" lg="6">
                <v-card>
                    <v-stepper :value="stepper">
                        <v-stepper-header>

                            <v-stepper-step v-if="this.$vuetify.breakpoint.mobile" step="1" :editable="true"
                                            :complete="stepper >1">Items in Your Cart
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step :step="this.$vuetify.breakpoint.mobile ? 2: 1" :editable="true">Billing
                                Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step :step="this.$vuetify.breakpoint.mobile ? 3: 2" :editable="true">Payment
                                Information
                            </v-stepper-step>
                            <v-divider></v-divider>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content v-if="this.$vuetify.breakpoint.mobile" step="1">
                                <ItemsInfo @change-step=" changeStep($event)"/>
                            </v-stepper-content>
                            <v-stepper-content :step="this.$vuetify.breakpoint.mobile ? 2 : 1 ">
                                <BillingInformation @change-step="changeStep($event)"/>
                            </v-stepper-content>
                            <v-stepper-content :step="this.$vuetify.breakpoint.mobile ? 3 : 2 ">
                                <PaymentInformation @change-step="changeStep($event)"/>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-card>
            </v-col>
            <v-col cols="12" md="5" lg="5">
                <v-card>
                    <ItemsInfo v-if="!this.$vuetify.breakpoint.mobile" @change-step=" changeStep($event)"/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ItemsInfo from "../components/Checkout/ItemsInfo";
import BillingInformation from "../components/Checkout/BillingInformation";
import PaymentInformation from "../components/Checkout/PaymentInformation";

export default {
    components: {ItemsInfo, BillingInformation, PaymentInformation},
    data() {
        return {
            stepper: 1
        };
    },
    methods: {
        changeStep(step) {
            if (step === 'back') {
                return this.stepper--
            } else if (step === 'next') {
                return this.stepper++
            }
        }
    },
    created() {
        this.$store.commit("global/SET_LAYOUT", "MainLayout");
    }
};
</script>



