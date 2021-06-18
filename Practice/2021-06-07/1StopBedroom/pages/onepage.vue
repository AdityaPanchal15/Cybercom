<template>
  <div>
    <h2 class="font-weight-regular">Secure Checkout</h2>
    <v-card class="grey lighten-5 my-5" flat tile>
      <one-page-form />
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
      <div class="mt-5">
        <v-row>
          <v-col> </v-col>
          <v-col>
            <v-card tile flat class="grey lighten-3 mx-3 px-4">
              <h2 class="font-weight-regular py-4">Order Summary</h2>
              <v-divider></v-divider>
              <div class="text-right">
                <v-row>
                  <v-col cols="8">
                    <h3 class="font-weight-medium pt-1">Subtotal</h3>
                    <h3 class="font-weight-medium pt-1">Shipping</h3>
                  </v-col>
                  <v-col>
                    <h3 class="font-weight-medium pt-1">${{ totalAmount }}</h3>
                    <h3 class="font-weight-medium py-1">FREE!</h3>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="8">
                    <h2 class="font-weight-regular pt-1">Total</h2>
                  </v-col>
                  <v-col>
                    <h2 class="font-weight-regular pt-1 red--text">
                      ${{ totalAmount }}
                    </h2>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-checkbox
                  v-model="agree"
                  label="I read and agree to the Terms & Conditions"
                  color="black"
                  class="black--text d-inline-flex text-left mr-4"
                ></v-checkbox>
                <v-btn
                  right
                  class="my-5 deep-orange accent-3"
                  width="40%"
                  dark
                  large
                  >PLACE ORDER</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CreditCard from '~/components/OnePageComponents/CreditCard.vue'
export default {
  components: { CreditCard },
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
    ...mapGetters('cart', ['totalAmount']),
  },
}
</script>
