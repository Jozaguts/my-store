<template>
    <v-container>
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" md="8" lg="8"  >
                <v-card>
                    <v-stepper :value="steps">
                    <v-stepper-header>
                        <v-stepper-step step="1" :editable="true" :complete="steps >1">Items in Your Cart
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="2" :editable="true" :complete="steps >2">Billing Information
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3" :editable="true" :complete="steps >2">Payment Information
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <ItemsInfo @change-step="changeStep($event)"/>
                        <BillingInformation @change-step="changeStep($event)"/>
                        <PaymentInformation @change-step="changeStep($event)"/>
                    </v-stepper-items>
                </v-stepper>
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
                steps: 1
            };
        },
        methods: {
            changeStep(step) {
                return (this.steps = step);
            }
        }
    };
</script>



