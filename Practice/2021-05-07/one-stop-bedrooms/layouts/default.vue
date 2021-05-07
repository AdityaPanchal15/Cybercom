<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn v-for="(link, index) in links" :key="index" text>
        <nuxt-link :to="link.link">{{ link.linkTitle }}</nuxt-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-img
        src="https://cdn.1stopbedrooms.com/media/bannerslider/s/p/springsale_topbanner_desk_050321.png"
        class="deep-orange lighten-1"
      ></v-img>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
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
        { linkTitle: 'Bar & Game Room', link: 'bar-furniture' },
        { linkTitle: 'Accessories', link: 'accessories' },
        { linkTitle: 'Outdoor', link: 'outdoors' },
        { linkTitle: 'Shop By Brand', link: 'brands' },
      ],
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
