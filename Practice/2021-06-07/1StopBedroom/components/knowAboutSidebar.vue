<template>
  <v-navigation-drawer color="grey lighten-4" width="100%">
    <div
      v-for="(item, index) in knowUsLinks"
      :key="index"
      class="py-3 font-weight-regular"
    >
      <nuxt-link :to="item.link" class="linkStyle">
        {{ item.title }}
      </nuxt-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
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
    }
  },
}
</script>
<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: black;
  display: block;
  background-color: white;
  padding: 10px 20px;
  margin-left: 10px;
  width: 90%;
  border-radius: 5px;
}
.linkStyle {
  padding: 10px 30px;
  color: black;
}
a:hover {
  font-weight: bold;
}
</style>
