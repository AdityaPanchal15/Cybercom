<template>
  <v-app>
    <login-layout-header />
    <v-img v-if="banners[$route.name]" :src="banners[$route.name].src"></v-img>

    <v-row>
      <v-col cols="3">
        <know-about-sidebar />
      </v-col>
      <v-col>
        <v-main>
          <Nuxt />
        </v-main>
      </v-col>
    </v-row>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import KnowAboutSidebar from '~/components/knowAboutSidebar.vue'
import LoginLayoutHeader from '~/components/LoginLayoutHeader.vue'
export default {
  components: { LoginLayoutHeader, KnowAboutSidebar },
  data() {
    return {
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
