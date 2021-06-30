<template>
  <div>
    <h2 class="font-weight-regular">Secure Checkout</h2>
    <v-card class="grey lighten-5 my-5" flat tile>
      <one-page-form v-if="!loggedIn" />
      <address-card v-else />
      <div class="mx-4">
        <v-row>
          <v-col cols="11">
            <h2 class="font-weight-regular">Review your order</h2>
          </v-col>
          <v-col cols="1" class="mt-2">
            <nuxt-link to="/checkout/cart">Edit cart</nuxt-link>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="my-8 white"
        >
          <v-row>
            <v-col cols="1">
              <v-img
                :src="product.src"
                width="120px"
                height="100px"
                class="ml-2"
              ></v-img>
            </v-col>
            <v-col cols="5" class="mt-1">
              <h3 class="font-weight-regular">
                {{ product.title }}
              </h3>
              <p class="body-2">
                {{ product.subTitle }} |
                <span class="font-italic">Web ID:{{ product.webId }}</span>
              </p>
            </v-col>
            <v-col cols="2"> Home Delivery </v-col>
            <v-col cols="2"> Free </v-col>
            <v-col cols="1"> Qty: {{ product.quantity }} </v-col>
            <v-col cols="1">
              <h3 class="font-weight-medium">${{ product.subTotal }}</h3>
            </v-col>
          </v-row>
        </div>
      </div>
      <credit-card />
      <total-amount-card :agree="agree" btn-title="Place Order" />
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CreditCard from '~/components/OnePageComponents/CreditCard.vue'
import TotalAmountCard from '~/components/OnePageComponents/TotalAmountCard.vue'
import AddressCard from '~/components/OnePageComponents/AddressCard.vue'
export default {
  components: { CreditCard, TotalAmountCard, AddressCard },
  middleware: 'onepage',
  data() {
    return {
      agree: true,
    }
  },
  head: {
    title: 'Onepage Checkout',
  },
  computed: {
    ...mapState('cart', ['products']),
    ...mapState('auth', ['loggedIn']),
  },
}
</script>
