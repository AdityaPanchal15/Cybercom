<template>
  <div>
    <p class="headline py-5 font-weight-light">Shop By Room</p>
    <v-sheet class="mx-auto">
      <v-slide-group show-arrows>
        <v-slide-item v-for="(item, i) in cardData" :key="i">
          <v-card class="mx-1" height="430" width="240" tile flat>
            <nuxt-link
              :to="{ name: 'product', params: { product: item.link } }"
            >
              <v-img height="200" :src="item.imgUrl"></v-img>
            </nuxt-link>
            <v-card-title class="font-weight-light headline">
              {{ item.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div
                v-for="(category, index) in item.subCategory"
                :key="index"
                class="font-weight-light"
              >
                <nuxt-link :to="category">{{ category }}</nuxt-link>
              </div>
              <a href="/" class="blue--text">See All</a>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-divider></v-divider>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bedroom_v2.jpg',
          title: 'Bedroom',
          subCategory: [
            'Bedroom Sets',
            'Beds',
            'Nightstands',
            'Dressers',
            'Dressers Mirrors',
          ],
          link: 'bedroom',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/living_room_v2.jpg',
          title: 'Living Room',
          subCategory: [
            'Living Room Sets',
            'Sectionals',
            'Sofas',
            'Loveseats',
            'Sleeper Sofas',
          ],
          link: 'living',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/dining_kitchen_v2.jpg',
          title: 'Dining & Kitchen',
          subCategory: [
            'Dining Sets',
            'Dining Chairs',
            'Dining Tables',
            "Backer's Racks",
          ],
          link: 'dining',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/office_v2.jpg',
          title: 'Office',
          subCategory: [
            'Home Office Sets',
            'Office Chairs',
            'Desks & Hutches',
            'Office Accesories',
            'Conference Room',
          ],
          link: 'office',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bar_game_room_v2.jpg',
          title: 'Bar & Game Room',
          subCategory: [
            'Home Bar Sets',
            'Bistro and Bar Table Sets',
            'Game Table Sets',
            'Home Bars',
            'Bar Tables and Pub Tables',
          ],
          link: 'barfurniture',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/outdoor_v1.jpg',
          title: 'Outdoor',
          subCategory: [
            'Outdoor Dining Furniture',
            'Outdoor Bar Furniture',
            'Outdoor Accessories',
            'Outdoor Conversation Sets',
          ],
          link: 'outdoors',
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
