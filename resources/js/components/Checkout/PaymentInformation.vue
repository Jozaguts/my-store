<template>
    <v-container>
        <v-row>
            <v-col>
                <header>
                    <h2 class="text-bold text-capitalize primary--text">Payment Information</h2>
                </header>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ValidationObserver v-slot="{valid}" ref="form">
                    <form action="/charge" method="post" id="payment-form">
                        <v-row>
                            <v-col cols="6">
                                <validation-provider v-slot="{errors}" name="Name" rules="required">
                                    <v-text-field type="text" v-model="paymentInformation.name" label="Name"
                                                  :error-messages="errors"></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="6">
                                <validation-provider v-slot="{errors}" name="Email" rules="required|email">
                                    <v-text-field type="email" v-model="paymentInformation.email" label="Email"
                                                  :error-messages="errors"></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" id="card-element">
                                <validation-provider v-slot="{errors}" name="Card" rules="required">
                                    <v-text-field type="text" label="Card" :error-messages="errors"
                                                  v-model="card"></v-text-field>
                                </validation-provider>
                            </v-col>
                        </v-row>
                        <div id="card-errors" role="alert"></div>
                        <v-col>
                            <v-btn
                                color="primary"
                                class="text-capitalize"
                                :x-large="true"
                                :loading="isPaying"
                                :disabled="!valid"
                                @click="payment"
                            >Pay {{ totalAmount|money }}
                            </v-btn>
                        </v-col>
                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import {loadStripe} from '@stripe/stripe-js';

export default {
    data() {
        return {
            paymentInformation: {
                name: 'Sagit gutierrez',
                email: 'admin@mystore.com'
            },
            stripeHandler: null,
            stripe: null,
            card: null,
            userIntent: null
        };
    },
    async created() {
        const script = document.createElement('script')
        script.src = 'https://js.stripe.com/v3'
        document.body.appendChild(script)
        script.onload = () => this.initStripe()
    },
    computed: {
        ...mapGetters({
            totalAmount: "cart/getTotalAmount",
            isPaying: 'cart/getIsPaying'
        })
    },
    methods: {
        ...mapActions({
            stripeTokenHandler: 'cart/payment'
        }),
        async payment() {
            try {
                this.$store.commit('cart/TOGGLE_IS_PAYING')
                const {setupIntent, error} = await this.stripe.confirmCardSetup(
                    this.userIntent.client_secret, {
                        payment_method: {
                            card: this.card,
                            billing_details: {name: this.paymentInformation.name, email: this.paymentInformation.email}
                        }
                    }
                )
                if (error) {
                    console.error('error', error)
                } else {
                      await this.stripeTokenHandler(setupIntent)
                }
            } catch (e) {
                console.error(e)
            } finally {
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                });
                this.paymentInformation = {name: '', email: ''};
                this.stripeHandler = null;
                this.stripe = null;
                this.card.clear();
                this.userIntent = null
                this.$store.commit('cart/TOGGLE_IS_PAYING')
                await this.$router.push('/')
            }


        },
        async initStripe() {
            this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY);
            var elements = this.stripe.elements();
            const style = {
                base: {
                    color: '#32325d',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            };
            this.card = elements.create('card', {style: style});
            this.card.mount('#card-element');

            const userIntentRequest = await axios.post('/api/client-intent', {userId: this.$store.getters['global/getUserId']})
                .then(responseJson => responseJson)
            this.userIntent = userIntentRequest.data.intent

        }
    }
};
</script>

<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}

.StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
    border-color: #fa755a;
}

.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
}
</style>
