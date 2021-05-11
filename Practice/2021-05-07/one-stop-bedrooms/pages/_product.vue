<template>
  <div class="mx-2">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link> /
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="productName"
        >{{ productName }}</nuxt-link
      >
    </div>
    <v-row class="mt-3" no-gutters>
      <v-col>
        <side-panel :bedroom="product[productName]" />
      </v-col>
      <v-col>
        <product-images
          :img-src="product[productName + 'Img']"
          :categories="product[productName + 'Categories']"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductImages from '~/components/ProductLandingPage/ProductImages.vue'
import SidePanel from '~/components/ProductLandingPage/SidePanel.vue'
export default {
  components: { SidePanel, ProductImages },
  data() {
    return {
      productName: this.$route.params.product,
      product: {
        bedroom: [
          'Bedroom Sets',
          'Beds',
          'Nightstands',
          'Dressers',
          'Dresser Mirrors',
          'Chests',
          'Bedroom Benches',
          'Bed Frames & Headboards',
          'Armoires and Wardrobes',
          'Bedroom Vanities',
          'Media Chests',
          'Jewelry Armoires',
          'Day Beds and Futons',
          'Kids and Youth Furniture',
          'Mattresses',
          'Pillows',
          'Bedding and Comforter Sets',
        ],
        bedroomImg:
          'https://cdn.1stopbedrooms.com/media/catalog/category/bedroom_bnr_new_1.png',
        bedroomCategories: [
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-set_v1.png',
            name: 'BEDROOM SETS (2054)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/beds_2.png',
            name: 'BEDS (10803)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/nightstand_3.png',
            name: 'NIGHTSTANDS (2456)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser_1.png',
            name: 'DRESSERS (1806)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser-mirror.png',
            name: 'DRESSER MIRRORS (1851)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/chest_1.png',
            name: 'CHESTS (1990)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-benches.png',
            name: 'BEDROOM BENCHES (1117)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Bed-Frames-_-Headboards.png',
            name: 'BED FRAMES & HEADBOARDS (1320)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Armoires-and-Wardrobes.png',
            name: 'ARMOIRES AND WARDROBES (262)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-vanities.png',
            name: 'BEDROOM VANITIES (269)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/media-chest.png',
            name: 'MEDIA CHESTS (191)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/jewellery-armories_1.png',
            name: 'JEWELRY ARMOIRES (39)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/daybeds-and-futons.png',
            name: 'DAY BEDS AND FUTONS (429)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/10270070.png',
            name: 'KIDS AND YOUTH FURNITURE (336)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/mattress.png',
            name: 'MATTRESSES (1151)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/pillow.png',
            name: 'PILLOWS (840)',
          },
          {
            src:
              'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedding-set.png',
            name: 'BEDDING AND COMFORTER SETS (152)',
          },
        ],
      },
    }
  },
}
</script>
