<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
    />
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add To Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addProductToCart: "cart/addProductToCart",
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products.items,
    }),
    ...mapGetters("products", {
      productIsInStock: "productIsInStock",
    }),
  },
  created() {
    this.loading = true;
    this.fetchProducts().then(() => {
      this.loading = false;
    });
  },
};
</script>

<style>
</style>