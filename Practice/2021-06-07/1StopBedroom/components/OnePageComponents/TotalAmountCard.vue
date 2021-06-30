<template>
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
              v-if="agree"
              v-model="isAgree"
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
              :to="path"
            >
              {{ btnTitle }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    path: {
      type: String,
      default: null,
    },
    btnTitle: {
      type: String,
      default: null,
      required: true,
    },
    agree: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      isAgree: this.agree,
    }
  },
  computed: {
    ...mapGetters('cart', ['totalAmount']),
  },
}
</script>
