<template>
  <v-row>
    <v-card
      v-for="(product, i) in products"
      :key="i"
      class="mx-auto my-12"
      max-width="350"
    >
      <v-img height="300" :src="product.src">
        <v-btn icon @click="setCartItem(product)">
          <!-- <nuxt-link to="/checkout/wishlist"> -->
          <v-icon>mdi-heart-outline</v-icon>
          <!-- </nuxt-link> -->
        </v-btn>
      </v-img>

      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>
        <div>{{ product.description }}</div>
        <h3>{{ product.price }}</h3>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    products: {
      type: Array,
      default: null,
    },
  },

  methods: {
    ...mapMutations('cart', ['setCartItem']),
  },
}
</script>
