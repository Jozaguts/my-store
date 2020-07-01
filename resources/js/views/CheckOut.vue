<template>
  <v-stepper :value="steps">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="steps >1">Items in Your Cart</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2" :complete="steps >2">Billing Information</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :editable="true" :complete="steps >2">Payment Information</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <ItemsInfo @change-step="changeStep($event)" />
      <BillingInformation @change-step="changeStep($event)" />
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import ItemsInfo from "../components/Checkout/ItemsInfo";
import BillingInformation from "../components/Checkout/BillingInformation";
export default {
  components: { ItemsInfo, BillingInformation },
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



