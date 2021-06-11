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
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
    }
  },
}
</script>
