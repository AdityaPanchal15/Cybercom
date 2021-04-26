<template>
  <wish-list-cards :products="products" />
</template>

<script>
export default {
  middleware: 'guest',
  computed: {
    products() {
      return this.$store.state.cart.cartItems
    },
  },
}
</script>
