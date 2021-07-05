<template>
  <div class="ma-4">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="productName"
        >{{ productName }}</nuxt-link
      >
    </div>
    <v-row v-if="product" class="mt-3" no-gutters>
      <v-col>
        <side-panel :product-links="product.productLinks" />
      </v-col>
      <v-col>
        <product-images
          :img-src="product.img"
          :categories="product.categories"
          :product-links="product.productLinks"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ProductImages from '~/components/ProductLandingPage/ProductImages.vue'
import SidePanel from '~/components/ProductLandingPage/SidePanel.vue'
export default {
  components: { SidePanel, ProductImages },
  apollo: {
    product: {
      query: gql`
        query getProductDetails($type: String!) {
          product(productType: $type) {
            productLinks {
              linkTitle
              link
            }
            img
            categories {
              src
              name
            }
          }
        }
      `,
      variables() {
        return {
          type: this.productName,
        }
      },
    },
  },
  data() {
    return {
      productName: this.$route.params.product,
    }
  },
}
</script>
