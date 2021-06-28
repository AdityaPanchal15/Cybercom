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

    <v-row class="bg-header" dark>
      <v-col>
        <nuxt-link to="/">
          <v-img
            class="ma-5"
            width="200"
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
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
          <nuxt-link to="/sales/guest/form">
            <span class="text-decoration-underline white--text">
              Track My Order
            </span>
          </nuxt-link>
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
          <v-menu open-on-hover offset-y tile>
            <template #activator="{ on, attrs }">
              <span
                v-if="!$store.state.auth.loggedIn"
                class="white--text font-weight-bold pa-3"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="white">mdi-login</v-icon>
                <span>Sign In</span>
              </span>
              <v-btn
                v-else
                dark
                text
                v-bind="attrs"
                class="text-capitalize"
                v-on="on"
              >
                <v-icon>mdi-account</v-icon>
                Hello {{ firstName }},<br />
                My Account
              </v-btn>
            </template>

            <v-list v-if="!$store.state.auth.loggedIn">
              <v-list-item class="grey lighten-3">
                <v-list-item-title class="mt-4 mx-4">
                  <v-btn
                    class="deep-orange accent-3"
                    width="200px"
                    dark
                    to="/customer/account/login"
                  >
                    Sign In
                  </v-btn>
                  <p class="py-2">
                    New Customer?
                    <nuxt-link to="/customer/account/create" class="blue--text">
                      Sign Up
                    </nuxt-link>
                  </p>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>
                  <nuxt-link :to="item.src" class="myLink" :title="item.title">
                    <v-icon class="pr-6">{{ item.icon }}</v-icon>
                    <span>{{ item.title }}</span>
                  </nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list v-else>
              <v-list-item v-for="(item, i) in customerPages" :key="i">
                <v-list-item-title>
                  <nuxt-link :to="item.src" class="myLink" :title="item.title">
                    <v-icon class="pr-6">{{ item.icon }}</v-icon>
                    <span class="pr-7">{{ item.title }}</span>
                  </nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <nuxt-link to="/checkout/cart" class="ml-6">
            <v-icon color="white">mdi-cart</v-icon>
            <span class="white--text font-weight-bold"
              ><v-badge v-if="products.length !== 0" :content="products.length"
                >Cart</v-badge
              ></span
            >
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
      </v-container>
      <Nuxt v-if="!$slots.default" />
      <slot />
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  data() {
    return {
      items: [
        {
          icon: 'mdi-account',
          title: 'My Account',
          src: '/customer/account/welcome',
        },
        {
          icon: 'mdi-google-maps',
          title: 'Order Status',
          src: '/sales/guest/form',
        },
        {
          icon: 'mdi-help',
          title: 'Help Center',
          src: '/policy/shipping-and-delivery',
        },
        { icon: 'mdi-cart', title: 'My Cart', src: '/checkout/cart' },
      ],
      customerPages: [
        { icon: 'mdi-cart', title: 'My Cart', src: '/checkout/cart' },
        {
          icon: 'mdi-account',
          title: 'My Account',
          src: '/customer/account/welcome',
        },
        {
          icon: 'mdi-google-maps',
          title: 'My Orders',
          src: '/sales/order/history',
        },
        {
          icon: 'mdi-book',
          title: 'Address Book',
          src: '/customer/address',
        },
        {
          icon: 'mdi-message-cog',
          title: 'Preference',
          src: '/newsletter/manage',
        },
        {
          icon: 'mdi-login',
          title: 'Log Out',
          src: '/customer/account/logout',
        },
      ],
    }
  },
  computed: {
    ...mapState('cart', ['products']),
    ...mapState('auth', ['firstName']),
  },
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
<style scoped>
.bg-header {
  background: #002859
    url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/header_img.png?v4b3a5475)
    0 0;
}
a {
  color: black;
}
.myLink:hover {
  color: #42a5f5;
}
.container {
  padding: 0;
}
</style>
