<template>
  <div class="ma-2">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        to="/sales/guest/form"
      >
        Track My Order
      </nuxt-link>
    </div>
    <v-row>
      <v-col>
        <h2 class="font-weight-light py-4">Track Your Order</h2>
        <p class="font-weight-light mb-2">
          Please enter your Order Number and Email address below.
        </p>
        <v-divider></v-divider>
        <v-row class="my-3">
          <v-col>
            <v-text-field
              v-model="email"
              label="Email Address"
              required
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="orderNumber"
              label="Order Number"
              required
              outlined
              dense
            ></v-text-field>
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header class="blue--text">
                  Where's my order confirmation number?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  You can find your order confirmation number just above the
                  Billing Information in the order confirmation email you
                  recieved after placing your order.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-btn class="deep-orange accent-3" dark>Continue</v-btn>
        <p class="font-weight-light py-5">
          Are you a member?<nuxt-link to="/customer/account/login"
            >Sign In</nuxt-link
          >
          to view your order status!
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      orderNumber: null,
    }
  },
  head: {
    title: 'Customer Login',
  },
}
</script>
