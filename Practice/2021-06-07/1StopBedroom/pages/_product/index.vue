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
      // product: {
      //   bedroom: {
      //     productLinks: [
      //       { linkTitle: 'Bedroom Sets', link: 'bedroom-sets' },
      //       { linkTitle: 'Beds', link: 'beds' },
      //       { linkTitle: 'Nightstands', link: 'nightstands' },
      //       { linkTitle: 'Dressers', link: 'dressers' },
      //       { linkTitle: 'Dresser Mirrors', link: 'mirrors' },
      //       { linkTitle: 'Chests', link: 'chests' },
      //       { linkTitle: 'Bedroom Benches', link: 'benches' },
      //       { linkTitle: 'Bed Frames & Headboards', link: 'frames' },
      //       {
      //         linkTitle: 'Armoires and Wardrobes',
      //         link: 'armoires-n-wardrobes',
      //       },
      //       { linkTitle: 'Bedroom Vanities', link: 'vanities' },
      //       { linkTitle: 'Media Chests', link: 'media-chests' },
      //       { linkTitle: 'Jewelry Armoires', link: 'jewelry-armoires' },
      //       { linkTitle: 'Day Beds and Futons', link: 'day-beds-n-futons' },
      //       {
      //         linkTitle: 'Kids and Youth Furniture',
      //         link: 'kids-youth-furniture',
      //       },
      //       { linkTitle: 'Mattresses', link: 'mattresses' },
      //       { linkTitle: 'Pillows', link: 'pillows' },
      //       {
      //         linkTitle: 'Bedding and Comforter Sets',
      //         link: 'bedding-n-comforter-sets',
      //       },
      //     ],
      //     img:
      //       'https://cdn.1stopbedrooms.com/media/catalog/category/bedroom_bnr_new_1.png',
      //     categories: [
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-set_v1.png',
      //         name: 'BEDROOM SETS (2054)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/beds_2.png',
      //         name: 'BEDS (10803)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/nightstand_3.png',
      //         name: 'NIGHTSTANDS (2456)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser_1.png',
      //         name: 'DRESSERS (1806)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser-mirror.png',
      //         name: 'DRESSER MIRRORS (1851)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/chest_1.png',
      //         name: 'CHESTS (1990)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-benches.png',
      //         name: 'BEDROOM BENCHES (1117)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Bed-Frames-_-Headboards.png',
      //         name: 'BED FRAMES & HEADBOARDS (1320)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Armoires-and-Wardrobes.png',
      //         name: 'ARMOIRES AND WARDROBES (262)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-vanities.png',
      //         name: 'BEDROOM VANITIES (269)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/media-chest.png',
      //         name: 'MEDIA CHESTS (191)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/jewellery-armories_1.png',
      //         name: 'JEWELRY ARMOIRES (39)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/daybeds-and-futons.png',
      //         name: 'DAY BEDS AND FUTONS (429)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/10270070.png',
      //         name: 'KIDS AND YOUTH FURNITURE (336)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/mattress.png',
      //         name: 'MATTRESSES (1151)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/pillow.png',
      //         name: 'PILLOWS (840)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedding-set.png',
      //         name: 'BEDDING AND COMFORTER SETS (152)',
      //       },
      //     ],
      //   },
      //   living: {
      //     productLinks: [
      //       { linkTitle: 'Bedroom Sets', link: 'bedroom-sets' },
      //       { linkTitle: 'Beds', link: 'beds' },
      //       { linkTitle: 'Nightstands', link: 'nightstands' },
      //       { linkTitle: 'Dressers', link: 'dressers' },
      //       { linkTitle: 'Dresser Mirrors', link: 'mirrors' },
      //       { linkTitle: 'Chests', link: 'chests' },
      //       { linkTitle: 'Bedroom Benches', link: 'benches' },
      //       { linkTitle: 'Bed Frames & Headboards', link: 'frames' },
      //       {
      //         linkTitle: 'Armoires and Wardrobes',
      //         link: 'armoires-n-wardrobes',
      //       },
      //       { linkTitle: 'Bedroom Vanities', link: 'vanities' },
      //       { linkTitle: 'Media Chests', link: 'media-chests' },
      //       { linkTitle: 'Jewelry Armoires', link: 'jewelry-armoires' },
      //       { linkTitle: 'Day Beds and Futons', link: 'day-beds-n-futons' },
      //       {
      //         linkTitle: 'Kids and Youth Furniture',
      //         link: 'kids-youth-furniture',
      //       },
      //       { linkTitle: 'Mattresses', link: 'mattresses' },
      //       { linkTitle: 'Pillows', link: 'pillows' },
      //       {
      //         linkTitle: 'Bedding and Comforter Sets',
      //         link: 'bedding-n-comforter-sets',
      //       },
      //     ],
      //     img:
      //       'https://cdn.1stopbedrooms.com/media/catalog/category/bedroom_bnr_new_1.png',
      //     categories: [
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-set_v1.png',
      //         name: 'BEDROOM SETS (2054)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/beds_2.png',
      //         name: 'BEDS (10803)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/nightstand_3.png',
      //         name: 'NIGHTSTANDS (2456)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser_1.png',
      //         name: 'DRESSERS (1806)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser-mirror.png',
      //         name: 'DRESSER MIRRORS (1851)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/chest_1.png',
      //         name: 'CHESTS (1990)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-benches.png',
      //         name: 'BEDROOM BENCHES (1117)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Bed-Frames-_-Headboards.png',
      //         name: 'BED FRAMES & HEADBOARDS (1320)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Armoires-and-Wardrobes.png',
      //         name: 'ARMOIRES AND WARDROBES (262)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-vanities.png',
      //         name: 'BEDROOM VANITIES (269)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/media-chest.png',
      //         name: 'MEDIA CHESTS (191)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/jewellery-armories_1.png',
      //         name: 'JEWELRY ARMOIRES (39)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/daybeds-and-futons.png',
      //         name: 'DAY BEDS AND FUTONS (429)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/10270070.png',
      //         name: 'KIDS AND YOUTH FURNITURE (336)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/mattress.png',
      //         name: 'MATTRESSES (1151)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/pillow.png',
      //         name: 'PILLOWS (840)',
      //       },
      //       {
      //         src:
      //           'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedding-set.png',
      //         name: 'BEDDING AND COMFORTER SETS (152)',
      //       },
      //     ],
      //   },
      // },
    }
  },
}
</script>
