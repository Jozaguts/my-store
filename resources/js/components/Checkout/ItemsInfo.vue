<template>
  <v-stepper-content step="1">
    <header>
      <h2 class="text-bold text-capitalize primary--text">Items in you cart</h2>
    </header>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center tex-capitalize">name</th>
            <th class="text-center text-capitalize">price</th>
            <th class="text-center text-capitalize">quantity</th>
            <th class="text-center text-capitalize">actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.name" v-show="(item.quantity > 0)">
            <td class="text-center text-capitalize">{{ item.name }}</td>
            <td class="text-center text-capitalize">{{ item.price }}</td>
            <td class="text-center text-capitalize">{{ item.quantity }}</td>
            <td>
              <v-btn text @click="deleteItem(item.id)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr v-if="(totalAmount>0) && totalQuantity">
            <td colspan="1" class="text-center text-capitalize text-bold">subtotals</td>
            <td colspan="1" class="text-center text-capitalize">{{totalAmount|money}}</td>
            <td colspan="1" class="text-center text-capitalize">{{totalQuantity}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <section class="d-flex flex-column align-center justify-center">
      <v-btn
        color="primary"
        class="text-capitalize mt-4"
        @click="$emit('change-step',2)"
        v-show="(totalAmount>0)"
      >
        <v-icon left>mdi-check</v-icon>Continue
      </v-btn>
    </section>
  </v-stepper-content>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      show: "cart/getToggleShow",
      cartItems: "cart/getCartItems",
      totalQuantity: "cart/getTotalQuantity",
      totalAmount: "cart/getTotalAmount"
    })
  },
  methods: {
    ...mapMutations({
      closeSidebar: "cart/TOGGLE_SHOW_CART"
    }),
    deleteItem(id) {
      this.$store.commit("cart/DELETE_ITEM", id);
    }
  }
};
</script>

<style>
</style>