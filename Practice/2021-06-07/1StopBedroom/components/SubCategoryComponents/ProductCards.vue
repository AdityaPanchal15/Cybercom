<template>
  <div class="ml-5">
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <h4 class="text-right pt-2">Sort by:</h4>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectedSortedType"
          :items="items"
          label="Top Sellers"
          dense
          solo
          flat
          @change="sortProducts(selectedSortedType)"
        ></v-select>
      </v-col>
    </v-row>
    <div v-if="isMattressFiltered" class="state-filters">
      <p class="block-subtitle">Filters:</p>
      <v-btn
        v-if="
          (!mattress_size && mattress_comfort) ||
          (mattress_size && !mattress_comfort)
        "
        href="/bedroom/mattresses"
        rounded
        outlined
        color="grey"
        @click="setMattressSize(null)"
      >
        <b>{{ mattress_size ? 'Size' : 'Comfort' }}:</b
        >{{ mattress_size ? mattress_size : mattress_comfort }}
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn
        v-if="mattress_size && mattress_comfort"
        :to="{
          path: '/bedroom/mattresses',
          query: { mattress_comfort: mattress_comfort },
        }"
        rounded
        outlined
        color="grey"
        @click="setMattressSize(null)"
      >
        <b>Size:</b>{{ mattress_size }} <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn
        v-if="mattress_comfort && mattress_size"
        :to="{
          path: '/bedroom/mattresses',
          query: { mattress_size: mattress_size },
        }"
        rounded
        outlined
        color="grey"
        @click="setMattressComfort(null)"
      >
        <b>Comfort:</b>{{ mattress_comfort }} <v-icon>mdi-close</v-icon>
      </v-btn>
      <a href="/bedroom/mattresses" class="mx-2 text-decoration-underline">
        Clear all
      </a>
    </div>
    <v-row>
      <v-col v-for="(product, i) in products" :key="i" cols="4">
        <v-hover v-slot="{ hover }">
          <nuxt-link :to="'/' + product.title">
            <v-card
              max-width="350"
              :elevation="hover ? 10 : 0"
              @click="setProductDetailsAndPathFrom(product)"
            >
              <v-img :src="product.src" lazy-src="../lazyImg.gif"></v-img>
              <v-row>
                <v-btn
                  tile
                  text
                  class="grey lighten-2 subtitle-2 ml-5 mr-12 my-2 text-capitalize"
                >
                  More Options
                </v-btn>
                <v-btn text class="my-2 mr-5 py-3" height="50"
                  ><v-icon>mdi-magnify-scan</v-icon>
                  <span class="subtitle-2 text-left pl-1 text-capitalize">
                    Shop <br />
                    Similars
                  </span>
                </v-btn>
              </v-row>
              <p class="pt-5 px-2 black--text subtitle-1 mb-1">
                {{ product.title }}
              </p>
              <p v-if="!hover" class="px-2 subtitle-2 font-weight-regular mb-1">
                {{ product.subTitle }}
              </p>
              <p v-else class="px-2 subtitle-2 font-weight-medium mb-1">
                Web Id:<span class="font-weight-bold">{{ product.webId }}</span>
              </p>
              <p v-if="!product.specialPrice" class="red--text mx-2 title my-1">
                {{ product.price }}
                <span
                  class="grey--text subtitle-2 pl-2 text-decoration-line-through font-weight-light"
                >
                  {{ product.originalPrice }}
                </span>
              </p>
              <div v-else class="mx-2">
                <p class="special-price">
                  <span class="px-2 black--text">{{
                    product.specialPrice
                  }}</span>
                  <span class="white--text special-price-label">
                    <v-icon dark>mdi-tag-multiple</v-icon>
                    Special Price
                  </span>
                </p>
              </div>
              <v-row no-gutters class="mx-1">
                <v-col cols="4">
                  <v-rating
                    v-model="product.rating"
                    readonly
                    background-color="grey"
                    half-increments
                    size="17"
                    dense
                  ></v-rating>
                </v-col>
                <v-col>
                  <span class="body-2 black--text">
                    ({{ product.numberOfRating }})
                  </span>
                </v-col>
              </v-row>
              <table v-if="product.mattress_type" class="best-matches">
                <tbody>
                  <tr>
                    <th valign="middle" width="25%">Comfort Level</th>
                    <th valign="middle" width="25%">Thickness</th>
                    <th valign="middle" width="25%">Type</th>
                    <th valign="middle" width="25%">Top Type</th>
                  </tr>
                  <tr>
                    <td valign="middle">{{ product.mattress_comfort }}</td>
                    <td valign="middle">{{ product.mattress_thickness }}</td>
                    <td valign="middle">{{ product.mattress_type }}</td>
                    <td valign="middle">{{ product.mattress_top }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="px-2 subtitle-2 py-2">Free Home Delivery</p>
            </v-card>
          </nuxt-link>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    isMattressFiltered: {
      type: Boolean,
      default: false,
      required: true,
    },
    products: {
      type: Array,
      default: null,
      required: false,
    },
  },
  data() {
    return {
      selectedSortedType: null,
      subCategory: this.$route.params.subCategory,
      items: ['Top Sellers', 'Price:Low-High', 'Price:High-Low'],
    }
  },
  computed: {
    ...mapState('mattressFilter', ['mattress_size', 'mattress_comfort']),
  },

  methods: {
    sortProducts(type) {
      function compare(a, b) {
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
      }
      if (type === 'Price:Low-High') {
        this.subCategory.sort(compare)
      }
      if (type === 'Price:High-Low') {
        this.subCategory.sort(compare).reverse()
      }
    },
    setProductDetailsAndPathFrom(product) {
      this.addProductDetails(product)
      this.setPathFrom(this.$route.params)
    },
    ...mapMutations(['addProductDetails', 'setPathFrom']),
    ...mapMutations('mattressFilter', [
      'setMattressSize',
      'setMattressComfort',
    ]),
  },
}
</script>
<style scoped>
.block-subtitle {
  display: inline-block;
  width: 60px;
  font-weight: 600;
  font-size: 15px;
  padding: 6px 0;
}
.special-price {
  border: 1px solid red;
  width: 194px;
}
.special-price-label {
  font-size: 12px;
  background-color: red;
  padding: 7px 2px;
}
.best-matches {
  border-color: #eeeded;
  border-width: 1px;
  border-style: solid;
  width: 95%;
  border-collapse: collapse;
  margin: 10px 5px;
  text-align: center;
}
table {
  border-spacing: 0;
}
th {
  width: 25%;
}
.best-matches th {
  background: #005ccc;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  padding: 6px 5px;
  text-align: center;
  border-right: 1px solid #eeeded;
  vertical-align: middle;
  font-style: normal;
}
.best-matches td {
  background: #efefef;
  color: #5e5e5e;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  padding: 3px 3px;
  text-align: center;
  border-right: 1px solid #d6d6d6;
  height: 40px;
  vertical-align: middle;
  word-break: break-word;
}
</style>
