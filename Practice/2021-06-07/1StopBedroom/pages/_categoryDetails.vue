<template>
  <div v-if="pathFrom" class="mx-2">
    <div v-if="productDetails" class="body-2">
      <nuxt-link to="/" class="grey--text text-decoration-none">Home</nuxt-link>
      /
      <nuxt-link
        class="text-decoration-none grey--text text-capitalize"
        :to="pathFrom.product"
      >
        {{ pathFrom.product }}
      </nuxt-link>
      /
      <nuxt-link
        class="text-decoration-none text-capitalize grey--text"
        :to="pathFrom.product + '/' + pathFrom.subCategory"
      >
        {{ pathFrom.subCategory }}
      </nuxt-link>
      /
      <nuxt-link
        class="text-decoration-none text-capitalize grey--text"
        :to="productDetails.title"
        >sku:{{ productDetails.sku }}</nuxt-link
      >
    </div>

    <v-row>
      <v-col cols="8">
        <image-details-card :product-details="productDetails" />
      </v-col>
      <v-col>
        <price-card :product-details="productDetails" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImageDetailsCard from '~/components/CategoryDetails/ImageDetailsCard.vue'
import PriceCard from '~/components/CategoryDetails/PriceCard.vue'
export default {
  components: { ImageDetailsCard, PriceCard },
  computed: {
    ...mapState(['productDetails', 'pathFrom']),
  },
}
</script>
