<template>
  <div>
    <h2 class="text-capitalize pb-5">{{ subCategory }}</h2>
    <v-expansion-panels
      v-for="(filterProduct, i) in filters"
      :key="i"
      accordion
      tile
      flat
    >
      <v-expansion-panel class="mb-4">
        <v-expansion-panel-header class="grey lighten-2">{{
          filterProduct.name
        }}</v-expansion-panel-header>
        <v-expansion-panel-content class="my-0">
          <div v-for="(item, index) in filterProduct.types" :key="index">
            <v-checkbox
              v-model="filterProduct.typesData[index]"
              :label="item"
              :true-value="item"
              false-value=""
              @click="query(filterProduct.typesData[index])"
            ></v-checkbox>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    subCategory: { type: String, default: null },
  },
  data() {
    return {
      filters: [
        {
          name: 'Product Types',
          types: [
            'Arch Bed(11)',
            'Bedroom Set(48)',
            'Bookcase Bed(31)',
            'Bunk Bed(39)',
            'Canopy Bed(20)',
            'Captain Bed(1)',
            'DayBed(8)',
            'Estate Bed(1)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
        {
          name: 'Bed Size',
          types: [
            'California King (600)',
            'Full (457)',
            'Full Over Full (4)',
            'King (1368)',
            'Queen (1422)',
            'Twin (405)',
            'Twin Over Full (12)',
            'Twin Over Twin (17)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
        {
          name: 'Price',
          types: [
            '$0 - $500 (15)',
            '$500 - $1,000 (698)',
            '$1,000 - $1,500 (576)',
            '$1,500 - $2,000 (226)',
            '$2,000 and above (539)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
          ],
        },
        {
          name: 'Style',
          types: [
            'Casual (121)',
            'Coastal (9)',
            'Contemporary (496)',
            'Cottage (20)',
            'Country (3)',
            'Farmhouse (12)',
            'French (16)',
            'Glam (4)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
        {
          name: 'Color',
          types: [
            'Beige (111)',
            'Black (140)',
            'Blue (7)',
            'Bronze (1)',
            'Brown (876)',
            'Cream (63)',
            'Gold (16)',
            'Gray (312)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
        {
          name: 'Material',
          types: [
            'Bonded Leather (1)',
            'Brass (1)',
            'Fabric (46)',
            'Faux Leather (2)',
            'Glass (28)',
            'Iron (2)',
            'Leather (11)',
            'Metal (14)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
        {
          name: 'Brand',
          types: [
            'A-America (20)',
            'A.R.T. (42)',
            'ACME (136)',
            'Alpine (32)',
            'American Drew (19)',
            'American Woodcrafters (6)',
            'Artisan & Post (24)',
            'Ashley (168)',
          ],
          typesData: [
            { type1: false },
            { type2: false },
            { type3: false },
            { type4: false },
            { type5: false },
            { type6: false },
            { type7: false },
            { type8: false },
          ],
        },
      ],
    }
  },
  methods: {
    query(val) {
      if (val) {
        console.log(val)
      }
    },
  },
}
</script>
