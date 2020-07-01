<template>
  <v-navigation-drawer :temporary="true" :value="show" :right="true" width="400px" app>
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
          <tr v-for="item in cartItems" :key="item.name">
            <td class="text-center text-capitalize">{{ item.name }}</td>
            <td class="text-center text-capitalize">{{ item.price }}</td>
            <td class="text-center text-capitalize">{{ item.quantity }}</td>
            <td>
              <v-icon>mdi-trash-can</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      show: "cart/getToggleShow",
      cartItems: "cart/getCartItems"
    })
  },
};
</script>

<style>
</style>
