<template>
  <v-row class="py-12">
    <v-col cols="3">
      <v-img
        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
        width="40%"
      ></v-img>
    </v-col>
    <v-col cols="3">
      <div v-for="(item, i) in knowUsLinks.slice(0, 4)" :key="i" class="pb-4">
        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
      </div>
    </v-col>
    <v-col cols="3">
      <div v-for="(item, j) in knowUsLinks.slice(4, 7)" :key="j" class="pb-4">
        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
      </div>
    </v-col>
    <v-col cols="3" class="text-right font-weight-bold">
      <nuxt-link to="/">Shop 1StopBedrooms.com</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    knowUsLinks: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      knowUsLinkCoulmn1: [
        { title: 'About Us', link: '/about-us' },
        { title: 'The 1Stop Advantage', link: '/the-onestop-advantage' },
        { title: 'Sell on 1StopBedrooms', link: '/partner-with-us' },
        { title: 'Careers', link: '/careers' },
      ],
      knowUsLinkCoulmn2: [
        { title: 'Social Responsibility', link: '/onestop-cares' },
        { title: 'Reviews', link: '/testimonials' },
        { title: 'A Note on COVID-19', link: '/covid-19' },
      ],
    }
  },
}
</script>
<style scoped>
a {
  color: black;
}
</style>
