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
      <v-col cols="2">
        <nuxt-link to="/">
          <v-img
            class="ma-5"
            width="200"
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
          ></v-img>
        </nuxt-link>
      </v-col>

      <v-col cols="1"></v-col>
      <v-col cols="5">
        <p class="pt-3 white--text body-2">
          <a href="">
            <span class="text-decoration-underline white--text">
              36 Month Financing*
            </span></a
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

      <v-col cols="1"></v-col>

      <v-col cols="3">
        <div class="pt-12">
          <router-link to="/testimonials">
            <v-img
              src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/1sb-testimonials-stars.png?va49360aa"
              width="22%"
              class="float-left my-1"
            ></v-img>
          </router-link>
          <v-menu open-on-hover offset-y tile>
            <template #activator="{ on, attrs }">
              <span
                v-if="!$store.state.auth.loggedIn"
                class="font-weight-bold white--text pa-3"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark>mdi-login</v-icon>
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

          <v-menu
            open-on-hover
            :close-on-content-click="false"
            offset-y
            tile
            max-height="70vh"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                to="/checkout/cart"
                text
                v-bind="attrs"
                class="pa-3"
                v-on="on"
              >
                <v-icon color="white">mdi-cart</v-icon>
                <span class="white--text font-weight-bold">
                  <v-badge
                    v-if="products.length !== 0"
                    :content="products.length"
                  >
                    Cart
                  </v-badge>
                </span>
              </v-btn>
            </template>

            <div v-if="products.length !== 0">
              <v-list width="60vh">
                <v-subheader>RECENTLY ADDED ITEM(S)</v-subheader>
                <template v-for="(item, i) in products">
                  <v-divider :key="i" class="my-1"></v-divider>
                  <v-list-item :key="i">
                    <v-row>
                      <v-col cols="2">
                        <v-list-item-avatar tile>
                          <v-img :src="item.src"></v-img>
                        </v-list-item-avatar>
                      </v-col>
                      <v-col cols="7">
                        <v-list-item-title class="subtitle-2 text-wrap">
                          {{ item.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="d-inline-flex">
                          <p class="py-3 mr-2">Qty:</p>
                          <v-text-field
                            :value="item.quantity"
                            outlined
                            dense
                            style="width: 40px"
                            @focus="okBtnEnable = true"
                            @change="changedQuantity = $event"
                          ></v-text-field>
                          <v-btn
                            v-if="okBtnEnable"
                            class="mx-1"
                            @click="updateQuantity(i)"
                          >
                            ok
                          </v-btn>
                          <v-btn icon class="mx-6" @click="removeProduct(i)">
                            <v-icon color="grey">mdi-delete</v-icon>
                          </v-btn>
                        </v-list-item-subtitle>
                      </v-col>
                      <v-col>{{ item.subTotal }}</v-col>
                    </v-row>
                  </v-list-item>
                </template>
              </v-list>
              <v-card class="grey lighten-4" flat tile>
                <v-card-subtitle class="text-right font-weight-bold blue--text">
                  CART SUBTOTAL: {{ totalAmount }}
                </v-card-subtitle>
              </v-card>
              <v-card flat tile>
                <v-btn
                  to="/checkout/cart"
                  class="ma-2 blue lighten-4"
                  outlined
                  width="45%"
                >
                  View Cart
                </v-btn>
                <v-btn
                  to="/onepage"
                  class="ma-2 deep-orange accent-3"
                  dark
                  width="45%"
                >
                  Checkout
                </v-btn>
              </v-card>
            </div>
            <v-list v-if="products.length === 0">
              <v-list-item class="body-2 blue--text font-weight-light">
                RECENTLY ADDED ITEM(S) <br />
                You have no items in your shopping cart.
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>

    <navbar />

    <v-main>
      <v-img
        src="https://cdn.1stopbedrooms.com/media/bannerslider/j/u/july4thsale2021_topbnr_internal_170621.png"
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
import { mapState, mapMutations, mapGetters } from 'vuex'
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  data() {
    return {
      changedQuantity: null,
      okBtnEnable: false,
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
    ...mapGetters('cart', ['totalAmount']),
  },
  methods: {
    ...mapMutations('cart', ['removeProduct', 'updateProduct']),
    updateQuantity(i) {
      this.updateProduct({ quantity: this.changedQuantity, id: i })
      this.okBtnEnable = false
    },
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
.myLink {
  color: black;
}
.myLink:hover {
  color: #42a5f5;
}

.container {
  padding: 0;
}
</style>
