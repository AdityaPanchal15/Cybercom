<template>
  <div>
    <div class="d-inline-flex mt-3">
      <p class="blue--text display-1 mb-10">Your Cart</p>
      <router-link to="/onepage">
        <v-btn
          v-if="$store.state.cart.products.length"
          class="ml-5 deep-orange accent-3"
          dark
          right
        >
          <v-icon left dark> mdi-lock </v-icon>
          Proceed To Checkout
        </v-btn>
      </router-link>
    </div>
    <v-card
      v-if="$store.state.cart.products.length"
      class="my-5 grey lighten-4"
      tile
      flat
    >
      <v-row>
        <v-col>
          <v-btn class="white ma-3" @click="$router.go(-1)"
            >Back To Shopping</v-btn
          >
        </v-col>
        <v-col>
          <h2 class="font-weight-medium text-right pr-10 py-3">
            Subtotal: ${{ totalAmount }}
          </h2>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      v-for="(product, index) in products"
      :key="index"
      tile
      flat
      class="grey lighten-4"
    >
      <v-row class="mb-7">
        <v-col cols="1">
          <v-img
            :src="product.src"
            width="120px"
            height="100px"
            class="ml-2"
          ></v-img>
        </v-col>
        <v-col cols="5">
          <h2 class="font-weight-medium">
            {{ product.title }}
          </h2>
          <p>{{ product.subTitle }}</p>
        </v-col>
        <v-col cols="4">
          <v-radio-group v-model="enable" column>
            <v-radio key="fedX" label="FedX Ground" value="fedX"> </v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <h3 class="font-weight-medium">${{ product.subTotal }}</h3>
          <v-select
            :key="index"
            :value="product.quantity"
            :items="quantity"
            class="mr-9 mt-2"
            outlined
            label="Quantity"
            dense
            @change="updateProduct({ quantity: $event, id: index })"
          >
          </v-select>
          <v-btn class="blue--text" @click="removeProduct(index)"
            ><v-icon>mdi-delete</v-icon>Remove</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      enable: 'fedX',
    }
  },
  head: {
    title: 'Cart',
  },
  computed: {
    ...mapState('cart', ['products']),
    ...mapGetters('cart', ['totalAmount']),
  },
  methods: {
    ...mapMutations('cart', ['removeProduct', 'updateProduct']),
  },
}
</script>
