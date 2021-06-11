<template>
  <v-app-bar color="primary" height="50">
    <div v-for="(link, index) in links" :key="index">
      <v-menu rounded="0" open-on-hover offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            tile
            height="50"
            class="onHoverBtn"
            v-on="on"
          >
            <nuxt-link
              :to="{ name: 'product', params: { product: link.link } }"
              >{{ link.linkTitle }}</nuxt-link
            >
          </v-btn>
        </template>
        <v-card max-width="900" flat tile>
          <v-row no-gutters class="pl-3 pr-3">
            <v-col
              v-for="(item, i) in subCategoryLinks[link.link]"
              :key="i"
              cols="4"
            >
              <v-btn text tile>
                <nuxt-link
                  :to="'/' + link.link + '/' + item.link"
                  class="black--text body-2"
                >
                  {{ item.linkTitle }}
                </nuxt-link>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { linkTitle: 'Bedroom', link: 'bedroom' },
        { linkTitle: 'Living Room', link: 'living' },
        { linkTitle: 'Dining & Kitchen', link: 'dining' },
        { linkTitle: 'Office', link: 'office' },
        { linkTitle: 'Bar & Game Room', link: 'barfurniture' },
        { linkTitle: 'Accessories', link: 'accessories' },
        { linkTitle: 'Outdoor', link: 'outdoors' },
        { linkTitle: 'Shop By Brand', link: 'brands' },
      ],
      subCategoryLinks: {
        bedroom: [
          { linkTitle: 'Bedroom Sets', link: 'bedroom-sets' },
          { linkTitle: 'Beds', link: 'beds' },
          { linkTitle: 'Nightstands', link: 'nightstands' },
          { linkTitle: 'Dressers', link: 'dressers' },
          { linkTitle: 'Dresser Mirrors', link: 'mirrors' },
          { linkTitle: 'Chests', link: 'chests' },
          { linkTitle: 'Bedroom Benches', link: 'benches' },
          { linkTitle: 'Bed Frames & Headboards', link: 'frames' },
          { linkTitle: 'Armoires and Wardrobes', link: 'armoires-n-wardrobes' },
          { linkTitle: 'Bedroom Vanities', link: 'vanities' },
          { linkTitle: 'Media Chests', link: 'media-chests' },
          { linkTitle: 'Jewelry Armoires', link: 'jewelry-armoires' },
          { linkTitle: 'Day Beds and Futons', link: 'day-beds-n-futons' },
          {
            linkTitle: 'Kids and Youth Furniture',
            link: 'kids-youth-furniture',
          },
          { linkTitle: 'Mattresses', link: 'mattresses' },
          { linkTitle: 'Pillows', link: 'pillows' },
          {
            linkTitle: 'Bedding and Comforter Sets',
            link: 'bedding-n-comforter-sets',
          },
        ],
        living: [
          { linkTitle: 'Living Room Sets', link: 'living-room-sets' },
          { linkTitle: 'Sectionals', link: 'sectionals' },
          { linkTitle: 'Sofas', link: 'sofas' },
          { linkTitle: 'Loveseats', link: 'loveseats' },
          { linkTitle: 'Reclining Loveseats', link: 'reclining-loveseats' },
          { linkTitle: 'Sleeper Sofas', link: 'sleeper-sofas' },
          { linkTitle: 'Recliners and Rockers', link: 'recliners-n-rockers' },
          { linkTitle: 'Theater Seating', link: 'theater-seating' },
          { linkTitle: 'Chairs', link: 'chairs' },
          { linkTitle: 'Accent Chairs', link: 'accent-chairs' },
          { linkTitle: 'Chaises', link: 'chaises' },
          { linkTitle: 'Ottomans', link: 'ottomans' },
          { linkTitle: 'Futons', link: 'futons' },
          { linkTitle: 'Leather Furniture', link: 'leather-furniture' },
          { linkTitle: 'Occasional Table Sets', link: 'occasional-table-sets' },
          { linkTitle: 'Sofa Tables', link: 'sofa-tables' },
          {
            linkTitle: 'Accent Chests and Cabinets',
            link: 'accent-chests-n-cabinets',
          },
          { linkTitle: 'Console Tables', link: 'console-tables' },
          {
            linkTitle: 'Coffee and Cocktail Tables',
            link: 'coffe-n-cooktail-tables',
          },
          { linkTitle: 'End Tables', link: 'end-tables' },
          { linkTitle: 'Accent Tables', link: 'accent-tables' },
          { linkTitle: 'Side Tables', link: 'side-tables' },
          { linkTitle: 'Rugs and Accessories', link: 'rugs-n-accessories' },
          {
            linkTitle: 'Entertainment Centers and Walls',
            link: 'entertainment-center-n-walls',
          },
          {
            linkTitle: 'TV Stands and TV Consoles',
            link: 'tv-stands-n-tv-consoles',
          },
          {
            linkTitle: 'CD and DVD Media Storage',
            link: 'cd-n-dvd-media-storage',
          },
        ],
        dining: [
          { linkTitle: 'Dining Sets', link: 'dining-sets' },
          { linkTitle: 'Dinette Sets', link: 'dinette-sets' },
          { linkTitle: 'Dining Chairs', link: 'dining-chairs' },
          { linkTitle: 'Dining Tables', link: 'dining-tables' },
          { linkTitle: "Baker's Racks", link: 'banker-racks' },
          { linkTitle: 'Dining Benches', link: 'dining-benches' },
          { linkTitle: 'China Cabinets', link: 'china-cabinets' },
          { linkTitle: 'Curios & Displays', link: 'curios-n-displays' },
          {
            linkTitle: 'Kitchen Island, Kitchen Cart',
            link: 'kitchen-island-cart',
          },
          {
            linkTitle: 'Servers, Sideboards & Buffets',
            link: 'servers-sideboards-buffets',
          },
        ],
        office: [
          { linkTitle: 'Home Office Sets', link: 'home-office-sets' },
          { linkTitle: 'Office Chairs', link: 'office-chairs' },
          { linkTitle: 'Desks & Hutches', link: 'desks-n-hutches' },
          {
            linkTitle: 'Modular Office Furniture',
            link: 'modular-office-furniture',
          },
          { linkTitle: 'Conference Room', link: 'conference-room' },
          {
            linkTitle: 'Filing Cabinets and Storage',
            link: 'filing-cabinets-n-storage',
          },
          {
            linkTitle: 'Bookcases, Book Shelves',
            link: 'bookcases-book-shelves',
          },
          { linkTitle: 'Office Accessories', link: 'office-accessories' },
          { linkTitle: 'Miscellaneous', link: 'miscellaneous' },
        ],
        barfurniture: [
          { linkTitle: 'Home Bar Sets', link: 'home-bar-sets' },
          {
            linkTitle: 'Bistro and Bar Table Sets',
            link: 'bistro-n-bar-table-sets',
          },
          { linkTitle: 'Game Table Sets', link: 'game-table-sets' },
          {
            linkTitle: 'Bar Tables and Pub Tables',
            link: 'bar-tables-n-pub-tables',
          },
          { linkTitle: 'Barstools', link: 'barstools' },
          { linkTitle: 'Wine Racks', link: 'wine-racks' },
          { linkTitle: 'Game Tables', link: 'game-tables' },
          { linkTitle: 'Game Room Chairs', link: 'game-room-chairs' },
          { linkTitle: 'Bar and Wine Cabinets', link: 'bar-n-wine-cabinets' },
        ],
        accessories: [
          { linkTitle: 'Rugs', link: 'rugs' },
          { linkTitle: 'Wall Art', link: 'wall-art' },
          {
            linkTitle: 'Accent and Storage Benches',
            link: 'accent-n-storge-benches',
          },
          { linkTitle: 'Accent Mirrors', link: 'accent mirrors' },
          { linkTitle: 'Curios', link: 'curios' },
          { linkTitle: 'Pillows and Throws', link: 'pillows-n-throws' },
          {
            linkTitle: 'Decorative Accessories',
            link: 'decorative-accessories',
          },
          { linkTitle: 'Entryway Furniture', link: 'entryway-furniture' },
          {
            linkTitle: 'Storage and Organization',
            link: 'storage-n-organization',
          },
          { linkTitle: 'Etageres', link: 'etageres' },
          { linkTitle: 'Clocks', link: 'clocks' },
          { linkTitle: 'Artificial Plants', link: 'artificial-plants' },
          { linkTitle: 'Picture Frames', link: 'picture-frames' },
          { linkTitle: 'Lighting', link: 'lighting' },
          { linkTitle: 'Desk and Buffet Lamps', link: 'desk-n-buffet-lamps' },
          { linkTitle: 'Lamp Sets', link: 'lamp-sets' },
          { linkTitle: 'Floor Lamps', link: 'floor-lamps' },
          { linkTitle: 'Pendant Lighting', link: 'pendant-lighting' },
          { linkTitle: 'Wall Sconces', link: 'wall-sconeces' },
          { linkTitle: 'Bathroom Furniture', link: 'bathroom-furniture' },
        ],
        outdoors: [
          {
            linkTitle: 'Outdoor Conversation Sets',
            link: 'outdoor-conversation-sets',
          },
          {
            linkTitle: 'Outdoor Dining Furniture',
            link: 'outdoor-dining-furniture',
          },
          { linkTitle: 'Outdoor Tables', link: 'outdoor-tables' },
          { linkTitle: 'Outdoor Chairs', link: 'outdoor-chairs' },
          {
            linkTitle: 'Outdoor Sofas & Loveseats',
            link: 'outdoor-sofas-n-loveseats',
          },
          {
            linkTitle: 'Outdoor Chaise Loungers',
            link: 'outdoor-chaise-loungers',
          },
          { linkTitle: 'Outdoor Bar Furniture', link: 'outdoor-bar-furniture' },
          { linkTitle: 'Outdoor Accessories', link: 'outdoor-accessories' },
          { linkTitle: 'Outdoor Fireplaces', link: 'outdoor-fireplaces' },
          { linkTitle: 'Outdoor Benches', link: 'outdoor-benches' },
          { linkTitle: 'Outdoor Ottomans', link: 'outdoor-ottomans' },
        ],
      },
    }
  },
}
</script>
<style scoped>
.onHoverBtn:hover {
  background-color: white;
}
a {
  color: white;
}
a:hover {
  color: black;
}
</style>
