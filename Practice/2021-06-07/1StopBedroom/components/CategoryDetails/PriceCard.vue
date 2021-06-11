<template>
  <v-container>
    <v-card tile class="text-center">
      <v-card-subtitle class="grey lighten-3 py-1 black--text"
        >Today's Price</v-card-subtitle
      >
      <v-card-text class="mt-2">
        <span class="mr-5">Regular Price:</span>{{ regularPrice }}
        <br />
        <div v-if="offPrice">
          <span class="ml-10">Your Saving:</span>
          <v-chip class="ma-2 pa-1 subtitle-2" color="light-green lighten-1">
            {{ offPrice }}
          </v-chip>
        </div>
        <v-divider class="mx-12"></v-divider>

        <div
          v-if="productDetails.originalPrice || productDetails.specialPrice"
          class="special-price"
        >
          <span class="black--text subtitle-1">{{
            productDetails.specialPrice
              ? productDetails.specialPrice
              : productDetails.price
          }}</span>
          <span class="white--text special-price-label">
            <v-icon dark>mdi-tag-multiple</v-icon>
            Special Price
          </span>
        </div>

        <p class="font-weight-bold black--text ml-5 mt-2">
          PRICE MATCH
          <span class="font-weight-medium">GUARANTEE</span>
          <v-icon color="grey lighten-1" dense>mdi-information</v-icon>
        </p>
        <div class="d-flex flex-row my-2">
          <span class="mx-2 font-weight-bold my-2">Quantity: </span>
          <v-text-field
            v-model="quantity"
            class="mx-2"
            outlined
            dense
            @
          ></v-text-field>
          <nuxt-link to="checkout/cart">
            <v-btn
              class="orange"
              width="230px"
              @click="addProducts(productObj)"
            >
              Add to Cart
            </v-btn>
          </nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    productDetails: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    offPrice() {
      const data = this.productDetails.originalPrice
        ? this.productDetails.originalPrice
        : this.productDetails.specialPrice
      if (!data) {
        return null
      }
      let price
      if (data > this.productDetails.price) {
        price =
          this.priceFormat(data) - this.priceFormat(this.productDetails.price)
      } else {
        price =
          this.priceFormat(this.productDetails.price) - this.priceFormat(data)
      }

      price = '-$' + price.toFixed(2)
      return price
    },
    regularPrice() {
      const price = this.productDetails.originalPrice
        ? this.productDetails.originalPrice
        : this.productDetails.price
      return price
    },
    productObj() {
      const finalPrice = this.productDetails.spacialPrice
        ? this.priceFormat(this.productDetails.spacialPrice)
        : this.priceFormat(this.productDetails.price)
      const obj = {
        ...this.productDetails,
        quantity: parseInt(this.quantity),
        finalPrice,
        subTotal: (parseInt(this.quantity) * finalPrice).toFixed(2),
      }
      return obj
    },
  },
  methods: {
    priceFormat(price) {
      price = price.replace('$', '')
      price = price.replace(',', '')
      return price
    },
    ...mapMutations('cart', ['addProducts']),
  },
}
</script>
<style scoped>
.special-price {
  border: 1px solid red;
  width: 175px;
  margin-top: 10px;
  margin-left: 110px;
}
.special-price-label {
  font-size: 12px;
  background-color: red;
  padding-top: 8px;
  padding-bottom: 6px;
}
</style>
