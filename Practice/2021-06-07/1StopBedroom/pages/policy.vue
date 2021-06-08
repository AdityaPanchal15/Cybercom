<template>
  <div class="mx-2">
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
      <v-col v-if="layout !== '1 column'" cols="3">
        <v-card tile flat class="pa-2 px-4 grey lighten-5">
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
  data() {
    return {
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
            { title: 'Shipping Information', link: 'shipping-information' },
            { title: 'Delivery Option', link: 'delivery-option' },
            { title: 'Track My Order', link: 'track-my-order' },
            { title: 'International Shipping', link: 'internation-shipping' },
            { title: 'Free Shipping', link: 'free-shipping' },
            { title: 'I Receive An Incomplete Order', link: 'order-help' },
            { title: 'My Item Arrived Damaged', link: 'order-help' },
            { title: 'I Received Wrong Item', link: 'order-help' },
            { title: 'Missing Parts', link: 'order-help' },
          ],
        },
        {
          heading: 'Billing And Payment',
          links: [
            { title: 'Payment Methods', link: 'billing-and-payment' },
            { title: 'Ordering Option', link: 'billing-and-payment' },
            { title: 'Price Match Guarantee', link: 'price-match-guarantee' },
            { title: 'Sales Tax', link: 'sales-tax' },
          ],
        },
        {
          heading: 'Account Help',
          links: [
            { title: 'Unsubscribe From Emails', link: '/newsletter/manage' },
          ],
        },
      ],
    }
  },
  computed: {
    ...mapState('policy', ['name', 'layout']),
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
</style>
