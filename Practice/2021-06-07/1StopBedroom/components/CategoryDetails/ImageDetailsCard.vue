<template>
  <div>
    <h1 class="font-weight-regular">{{ productDetails.title }}</h1>
    <v-row class="body-2" no-gutters>
      <nuxt-link to="/review"> Write a Review </nuxt-link>
      |
      <p class="grey--text">{{ productDetails.webId }}</p>
      <v-spacer></v-spacer>
      <nuxt-link to="/">Desciption | Specification</nuxt-link>
    </v-row>
    <v-divider></v-divider>

    <v-row>
      <v-col>
        <v-img
          :src="productDetails.src"
          height="400px"
          width="400px"
          :title="productDetails.title"
        ></v-img>
      </v-col>
      <v-col class="mt-12">
        <p class="gray--text mb-1">
          <span>Brand:</span
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <nuxt-link to="/brand/signature-design-by-ashley/">Ashley</nuxt-link>
        </p>
        <p class="gray--text mb-1">
          <span>Collection:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <nuxt-link
            to="/brand/signature-design-by-ashley/collection_type/lettner-collection/"
            >Lettner</nuxt-link
          >
        </p>
        <p class="gray--text mb-1">
          <span>Bed Size:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <v-btn-toggle v-model="text" color="deep-purple accent-3" dense tile>
            <v-btn value="twin">Twin</v-btn>
            <v-btn value="full">Full</v-btn>
          </v-btn-toggle>
        </p>
        <p class="gray--text mb-1">
          <span>Set Selection:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <v-btn-toggle v-model="set" color="deep-purple accent-3" dense tile>
            <v-btn value="2">2-Piece Set</v-btn>
            <v-btn value="4">4-Piece Set</v-btn>
            <v-btn value="custom">Build Your Own</v-btn>
          </v-btn-toggle>
        </p>
        <div v-for="(item, index) in itemSet" :key="index">
          <span>{{ item.productType }}</span>
          <span>SKU:{{ item.sku }}</span>
        </div>
      </v-col>
    </v-row>

    <h1 class="font-weight-light">Include Additional Items</h1>
    <div v-for="(item, index) in itemSet" :key="index">
      <nuxt-link :to="'/' + item.title">
        <v-row @click="setProductDetailsAndPathFrom(item)">
          <v-col cols="2">
            <v-img :src="item.src" width="150px"></v-img>
          </v-col>
          <v-col cols="8">
            <h4 class="font-weight-medium">{{ item.title }}</h4>
            <p class="grey--text body-1">
              sku:{{ item.sku }} | Web Id:{{ item.webId }}
            </p>
            <h3>{{ item.price || item.specialPrice }}</h3>
          </v-col>
          <v-col class="mt-4">
            <v-select
              v-model="selectedQuantity"
              :items="quantityOptions"
              dense
              outlined
              background-color="grey lighten-4"
            ></v-select>
          </v-col>
        </v-row>
      </nuxt-link>
      <v-divider class="my-5"></v-divider>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
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
      text: 'twin',
      set: '2',
      selectedQuantity: 1,
      quantityOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  methods: {
    setProductDetailsAndPathFrom(product) {
      this.addProductDetails(product)
    },
    ...mapMutations(['addProductDetails']),
  },
  apollo: {
    itemSet: {
      query: gql`
        query getItemSet($sku: String) {
          itemSet(sku: $sku) {
            src
            title
            webId
            price
            specialPrice
            sku
            productType
          }
        }
      `,
      variables() {
        return {
          sku: this.productDetails.sku,
        }
      },
    },
  },
}
</script>
<style scoped>
a {
  color: black;
}
</style>
