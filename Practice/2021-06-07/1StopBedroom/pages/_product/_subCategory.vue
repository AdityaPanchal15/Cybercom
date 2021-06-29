<template>
  <div class="ma-2">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="'/' + product"
      >
        {{ product }}
      </nuxt-link>
      /
      <nuxt-link class="text-decoration-none text-capitalize" :to="subCategory">
        {{ subCategory }}
      </nuxt-link>
    </div>
    <v-row class="mt-3" no-gutters>
      <v-col cols="3">
        <filter-product-panel :sub-category="subCategory" />
      </v-col>
      <v-col>
        <product-cards />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FilterProductPanel from '~/components/SubCategoryComponents/FilterProductPanel.vue'
import ProductCards from '~/components/SubCategoryComponents/ProductCards.vue'
export default {
  components: { FilterProductPanel, ProductCards },
  data() {
    return {
      product: this.$route.params.product,
      subCategory: this.$route.params.subCategory,
    }
  },
}
</script>
