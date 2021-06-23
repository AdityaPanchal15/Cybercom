<template>
  <v-app>
    <login-layout-header />
    <v-img v-if="banners[$route.name]" :src="banners[$route.name].src"></v-img>

    <v-row class="containerStyle">
      <v-col cols="3" class="pa-0">
        <know-about-sidebar :know-us-links="knowUsLinks" />
      </v-col>
      <v-col cols="9">
        <v-main>
          <Nuxt />
        </v-main>
      </v-col>
    </v-row>

    <v-footer class="grey lighten-2">
      <know-about-footer :know-us-links="knowUsLinks" />
    </v-footer>
  </v-app>
</template>

<script>
import KnowAboutFooter from '~/components/KnowAboutFooter.vue'
import KnowAboutSidebar from '~/components/knowAboutSidebar.vue'
import LoginLayoutHeader from '~/components/LoginLayoutHeader.vue'
export default {
  components: { LoginLayoutHeader, KnowAboutSidebar, KnowAboutFooter },
  data() {
    return {
      knowUsLinks: [
        { title: 'About Us', link: 'about-us' },
        { title: 'Our Story', link: 'our-story' },
        { title: 'The 1Stop Advantage', link: 'the-onestop-advantage' },
        { title: '1Stop Cares', link: 'onestop-cares' },
        { title: 'Careers', link: 'careers' },
        { title: 'Partner With Us', link: 'partner-with-us' },
        { title: 'Contact Us', link: 'about-contact-us' },
      ],
      banners: {
        'about-us': {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_about_us.jpg',
        },
        'the-onestop-advantage': {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_the_onestop_advantage.jpg',
        },
        'our-story': {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_our_story.jpg',
        },
        'onestop-cares': {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_onestop_cares.jpg',
        },
        careers: {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_careers.jpg',
        },
        'partner-with-us': {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_partner_with_us.jpg',
        },
      },
    }
  },
}
</script>
<style scoped>
.containerStyle {
  margin-top: 0;
}
</style>
