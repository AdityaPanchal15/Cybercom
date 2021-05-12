<template>
  <v-app>
    <v-system-bar color="white" height="30" fixed>
      <h4 class="black--text">
        SPRING INTO SAVINGS! SAVE UP TO 75% + FREE HOME DELIVERY
      </h4>
      <v-spacer></v-spacer>
      Question? Non-commissioned consultants are here to help! &nbsp;
      <a href="tel:877-958-9203">
        <h4 class="title">
          <v-icon color="orange" size="18">mdi-cellphone</v-icon>
          877-958-9203
        </h4>
      </a>
    </v-system-bar>
    <br />

    <v-row class="blue darken-4" dark>
      <v-col>
        <nuxt-link to="/">
          <v-img
            class="ma-5"
            width="200"
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
          ></v-img>
        </nuxt-link>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <p class="pt-3 white--text body-2">
          <a href="">
            <span class="text-decoration-underline white--text"
              >36 Month Financing*</span
            ></a
          >&nbsp;&nbsp;&nbsp;
          <a href=""
            ><span class="text-decoration-underline white--text"
              >Track My Order</span
            ></a
          >
        </p>
        <v-text-field
          dark
          label="Search Furniture"
          class="mt-1"
          width="60"
          append-icon="mdi-search-web"
        >
          <template #append>
            <v-btn icon>
              <v-icon>mdi-search-web</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <div class="pt-12">
          <nuxt-link to="sign-in">
            <v-icon dark>mdi-login</v-icon>
            <span class="white--text">Sign In</span>
          </nuxt-link>
          <nuxt-link to="cart">
            <v-icon dark class="pl-10">mdi-cart</v-icon>
            <span class="white--text"><v-badge content="0">Cart</v-badge></span>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>

    <navbar />

    <v-main>
      <v-img
        src="https://cdn.1stopbedrooms.com/media/bannerslider/s/p/springsale_topbanner_desk_050321.png"
        class="deep-orange lighten-1"
      ></v-img>
      <v-container fluid>
        <v-fab-transition>
          <v-btn
            color="blue"
            fixed
            dark
            bottom
            right
            fab
            @click="
              $vuetify.goTo(0, {
                easing: 'easeInCubic',
                duration: '2000',
              })
            "
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-fab-transition>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
