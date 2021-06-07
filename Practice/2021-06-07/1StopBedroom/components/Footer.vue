<template>
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
          <nuxt-link :to="item.link" class="grey--text">{{
            item.title
          }}</nuxt-link>
        </div>
      </v-col>
      <v-col>
        <h3 class="pb-3">Customer Service</h3>
        <div v-for="(item, i) in footerLinks.customerService" :key="i">
          <nuxt-link :to="item.link" class="grey--text pb-3">{{
            item.title
          }}</nuxt-link>
        </div>
      </v-col>
      <v-col>
        <h3>Contact Us</h3>
        <v-btn color="primary" class="my-5 px-12"
          ><v-icon class="mr-2">mdi-message</v-icon> Message
        </v-btn>
        <v-btn
          href="tel:877-958-9203"
          color="primary"
          class="my-5 px-12"
          outlined
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
</template>

<script>
export default {
  data() {
    return {
      footerLinks: {
        knowUs: [
          { title: 'About Us', link: 'about-us' },
          { title: 'The 1Stop Advantage', link: 'advantages' },
          { title: 'Sell on 1StopBedrooms', link: 'sell-on-1stepbedrooms' },
          { title: 'Careers', link: 'careers' },
          { title: 'Social Responsibility', link: 'social-responsibility' },
          { title: 'Reviews', link: 'reviews' },
          { title: 'A Note on COVID-19', link: 'covid-19' },
        ],
        customerService: [
          { title: 'My Account', link: 'my-account' },
          { title: 'My Orders', link: 'my-orders' },
          { title: 'Track My Order', link: 'track-my-orders' },
          { title: 'Help Center', link: 'help-center' },
          { title: 'Return Policy', link: 'return-policy' },
          { title: 'Shipping & Delivery', link: 'shipping-n-delivery' },
          { title: 'Coupons', link: 'coupons' },
          { title: 'Price Match', link: 'price-match' },
          { title: 'Financing', link: 'financing' },
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
