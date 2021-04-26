<template>
  <v-row>
    <v-card
      v-for="(product, i) in products"
      :key="i"
      class="mx-auto my-12"
      max-width="300"
    >
      <v-img height="300" :src="product.src"> </v-img>

      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>
        <div>{{ product.description }}</div>
        <h3>{{ product.price }}</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" @click="removeFromCart(i)">Remove </v-btn>
      </v-card-actions>
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
    ...mapMutations('cart', ['removeFromCart']),
  },
}
</script>
