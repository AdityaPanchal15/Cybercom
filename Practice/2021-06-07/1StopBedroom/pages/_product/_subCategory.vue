<template>
  <div class="ma-2">
    <!-- <div v-if="filterParams">
      {{ filterMattressesWithQuery() }}
    </div> -->
    <div v-if="subCategoryType !== 'mattresses'" class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="'/' + product"
      >
        {{ product }}
      </nuxt-link>
      /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="subCategoryType"
      >
        {{ subCategoryType }}
      </nuxt-link>
    </div>
    <div v-else>
      <mattresses-filter v-if="!filteredData">
        <template #default="{ filterData }">
          {{ setFilterData(filterData) }}
        </template>
      </mattresses-filter>
    </div>
    <v-row class="mt-3" no-gutters>
      <v-col cols="3">
        <filter-product-panel :sub-category="subCategoryType" />
      </v-col>
      <v-col>
        <product-cards
          v-if="!data"
          :products="filteredData ? filteredData : subCategory"
          :is-mattress-filtered="filteredData ? true : false"
        />
        <product-cards v-else :products="data" :is-mattress-filtered="true" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import FilterProductPanel from '~/components/SubCategoryComponents/FilterProductPanel.vue'
import MattressesFilter from '~/components/SubCategoryComponents/mattressesFilter.vue'
import ProductCards from '~/components/SubCategoryComponents/ProductCards.vue'
export default {
  components: { FilterProductPanel, ProductCards, MattressesFilter },
  apollo: {
    subCategory: {
      query: gql`
        query getsubCategory($type: String!) {
          subCategory(categoryType: $type) {
            src
            title
            subTitle
            webId
            price
            specialPrice
            originalPrice
            numberOfRating
            rating
            sku
            mattress_type
            mattress_comfort
            mattress_thickness
            mattress_top
          }
        }
      `,
      variables() {
        return {
          type: this.subCategoryType,
        }
      },
    },
  },

  data() {
    return {
      product: this.$route.params.product,
      subCategoryType: this.$route.params.subCategory,
      filteredData: null,
      filterParams: this.$route.query,
      subCategory: null,
      data: null,
    }
  },
  watchQuery(newValue, oldValue) {
    if (newValue && newValue !== null) {
      this.filterParams = newValue
      this.filterMattressesWithQuery()
    }
  },
  methods: {
    setFilterData(data) {
      this.filteredData = data
    },

    filterMattressesWithQuery() {
      this.$axios
        .post('http://localhost:4000/graphql', {
          query: `
            query($categoryType:String,$mattress_size: String,$mattress_position:String,$mattress_comfort:String){
                subCategoryFilter(categoryType:$categoryType,mattress_size:$mattress_size,mattress_position:$mattress_position,mattress_comfort:$mattress_comfort){
                    mattress_type
                    mattress_comfort
                    mattress_thickness
                    mattress_top
                    specialPrice
                    src
                    title
                    subTitle
                    webId
                    price
                    specialPrice
                    originalPrice
                    numberOfRating
                    rating
                    sku
                }
            }
        `,
          variables: {
            mattress_size: this.filterParams.mattress_size
              ? this.filterParams.mattress_size
              : null,
            mattress_comfort: this.filterParams.mattress_comfort
              ? this.filterParams.mattress_comfort
              : null,
            mattress_position: null,
            categoryType: this.subCategoryType,
          },
        })
        .then((res) => {
          this.data = res.data.data.subCategoryFilter
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
