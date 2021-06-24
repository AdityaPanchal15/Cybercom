<template>
  <div class="ma-2">
    <div class="body-2 mb-2">
      <nuxt-link to="/" class="text-decoration-none">Home</nuxt-link>
      <nuxt-link
        class="text-decoration-none text-capitalize"
        :to="$route.fullPath"
      >
        / Policy / {{ name }}</nuxt-link
      >
    </div>
    <v-row>
      <v-col v-if="layoutSet()" cols="3" :order="order">
        <v-card tile flat class="pa-2 px-4 grey lighten-5 fix">
          <div v-for="(item, i) of sidebarLinks" :key="i" class="py-2">
            <h4 class="text-uppercase">{{ item.heading }}</h4>
            <div v-for="(link, j) of item.links" :key="j">
              <nuxt-link
                :to="link.link"
                active-class="highlighted"
                :class="[
                  link.link === $route.fullPath ? 'highlighted' : '',
                  'sidebarLinks',
                ]"
              >
                {{ link.title }}
              </nuxt-link>
            </div>
          </div>
        </v-card>
      </v-col>
      <nuxt-child> </nuxt-child>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  scrollToTop: true,
  data() {
    return {
      order: 0,
      sidebarLinks: [
        {
          heading: 'Customer Service',
          links: [
            { title: 'Help Center', link: '/policy/help-center' },
            { title: 'My Account', link: '/customer/account/login' },
            { title: 'Privacy Policy', link: '/policy/privacy-policy' },
            { title: 'Return Policy', link: '/policy/return-policy' },
            {
              title: 'Cancellation Policy',
              link: '/policy/return-policy#cancellation-policy',
            },
            {
              title: 'Delivery Policy',
              link: '/policy/return-policy#delivery-policy',
            },
            {
              title: 'Terms & Condition',
              link: '/policy/terms-and-conditions',
            },
            { title: 'Contact Us', link: '/contact-us' },
          ],
        },
        {
          heading: 'Shipping And Delivery',
          links: [
            { title: 'COVID-19', link: 'covid-19' },
            {
              title: 'Shipping Information',
              link: '/policy/shipping-and-delivery',
            },
            { title: 'Delivery Option', link: '/policy/white-glove-delivery' },
            { title: 'Track My Order', link: 'track-my-order' },
            {
              title: 'International Shipping',
              link: '/policy/international-shipping',
            },
            { title: 'Free Shipping', link: '/policy/free-shipping' },
            {
              title: 'I Receive An Incomplete Order',
              link: '/policy/order-help#i-received-order',
            },
            {
              title: 'My Item Arrived Damaged',
              link: '/policy/order-help#i-received-damaged',
            },
            {
              title: 'I Received Wrong Item',
              link: '/policy/order-help#i-received-item',
            },
            {
              title: 'Missing Parts',
              link: '/policy/order-help#missing-parts',
            },
          ],
        },
        {
          heading: 'Billing And Payment',
          links: [
            { title: 'Payment Methods', link: '/policy/billing-and-payment' },
            {
              title: 'Ordering Option',
              link: '/policy/billing-and-payment#ordering-options',
            },
            {
              title: 'Price Match Guarantee',
              link: '/policy/price-match-guarantee',
            },
            { title: 'Sales Tax', link: '/policy/sales-tax' },
          ],
        },
        {
          heading: 'Account Help',
          links: [
            {
              title: 'Unsubscribe From Emails',
              link: '/customer/account/login',
            },
          ],
        },
      ],
    }
  },
  computed: {
    ...mapState('policy', ['name', 'layout']),
  },
  methods: {
    layoutSet() {
      if (this.layout === '1 column') {
        return false
      } else {
        this.order = this.layout === '2 columns with right bar' ? 1 : 0
        return true
      }
    },
  },
}
</script>
<style scoped>
.sidebarLinks {
  color: grey;
  font-size: 15px;
}
.sidebarLinks:hover {
  color: blue;
}
.highlighted {
  color: black;
  border-bottom: 2px solid blue;
}
.fix {
  position: sticky;
  top: 20px;
}
</style>
