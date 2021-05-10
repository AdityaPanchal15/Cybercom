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
        <v-img
          class="ma-5"
          width="200"
          src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
        ></v-img>
      </v-col>
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
          append-icon="mdi-search-web"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-col class="pa-9">
          <v-icon dark>mdi-login</v-icon>
          <span class="white--text">Sign In <br />My Account</span></v-col
        >
      </v-col>
    </v-row>

    <v-app-bar color="primary" height="50">
      <v-btn v-for="(link, index) in links" :key="index" text>
        <nuxt-link :to="link.link" class="white--text">{{
          link.linkTitle
        }}</nuxt-link>
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

    <v-footer padless="false">
      <v-container>
        <v-row class="py-5">
          <v-col>
            <v-img
              width="150"
              src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
            ></v-img>
          </v-col>
          <v-col>
            <h3 class="pb-3">Get to Know Us</h3>
            <div v-for="(item, i) in footerLinks.knowUs" :key="i">
              <nuxt-link :to="item" class="grey--text">{{ item }}</nuxt-link>
            </div>
          </v-col>
          <v-col>
            <h3 class="pb-3">Customer Service</h3>
            <div v-for="(item, i) in footerLinks.customerService" :key="i">
              <nuxt-link :to="item" class="grey--text pb-3">{{
                item
              }}</nuxt-link>
            </div>
          </v-col>
          <v-col>
            <h3>Contact Us</h3>
            <v-btn color="primary" class="my-5 px-12"
              ><v-icon class="mr-2">mdi-message</v-icon> Message
            </v-btn>
            <v-btn color="primary" class="my-5 px-12" outlined
              ><v-icon class="mr-2">mdi-phone-in-talk</v-icon> Call Us
            </v-btn>
          </v-col>
        </v-row>
        <v-card flat tile width="100%" class="white lighten-1 text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="font-weight-bold">
            <a href="">Privacy Policy</a> | <a href="">Terms of Use </a>
            <span class="black--text"
              ><v-icon color="black" size="17">mdi-copyright</v-icon>2021
              1StopBedrooms Inc.</span
            >
          </v-card-text>
        </v-card>
      </v-container>
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
      footerLinks: {
        knowUs: [
          'About Us',
          'The 1Stop Advantage',
          'Sell on 1StopBedrooms',
          'Careers',
          'Social Responsibility',
          'Reviews',
          'A Note on COVID-19',
        ],
        customerService: [
          'My Account',
          'My Orders',
          'Track My Order',
          'Help Center',
          'Return Policy',
          'Shipping & Delivery',
          'Coupons',
          'Price Match',
          'Financing',
        ],
      },
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-pinterest',
        'mdi-twitter',
        'mdi-youtube',
      ],
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
