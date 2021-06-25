<template>
  <div class="grey lighten-5 text-center">
    <p class="display-1 py-10 blue--text font-weight-bold">Wecome! Aditya</p>
    <div v-for="i in 3" :key="i">
      <v-row v-if="i % 2 !== 0">
        <v-col cols="2"></v-col>
        <v-col>
          <nuxt-link :to="otherPageLink[i - 1].link">
            <v-card flat>
              <v-img
                :src="otherPageLink[i - 1].src"
                width="50%"
                class="mx-auto"
              ></v-img>
              <p class="blue--text title text-center mx-auto my-1">
                {{ otherPageLink[i - 1].title }}
              </p>
              <p class="subtitle-2 pb-3 font-weight-light">
                {{ otherPageLink[i - 1].content }}
              </p>
            </v-card>
          </nuxt-link>
        </v-col>
        <v-col>
          <nuxt-link :to="otherPageLink[i].link">
            <v-card flat>
              <v-img
                :src="otherPageLink[i].src"
                width="50%"
                class="mx-auto"
              ></v-img>
              <p class="blue--text title text-center mx-auto my-1">
                {{ otherPageLink[i].title }}
              </p>
              <p class="subtitle-2 pb-3 font-weight-light">
                {{ otherPageLink[i].content }}
              </p>
            </v-card>
          </nuxt-link>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </div>
    <v-card flat tile class="mt-6 mb-12">
      <v-row class="py-6">
        <v-col cols="2"></v-col>

        <v-col>
          <nuxt-link to="/policy/white-glove-delivery">
            <v-btn color="blue darken-4" depressed dark class="py-10 px-12">
              White Glove Delivery
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col>
          <nuxt-link to="/policy/affirm-financing">
            <v-btn color="blue darken-4" depressed dark class="py-10 px-12">
              Buy Now, Pay Later
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-card>
    <v-card class="px-12 pb-10" flat tile>
      <h2 class="black--text py-5">Customer Service</h2>
      <v-divider></v-divider>
      <h3 class="text-left py-4">How can we help you?</h3>
      <v-row class="text-left">
        <v-col v-for="(item, i) in helpLinks" :key="i" cols="3">
          <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        </v-col>
      </v-row>
    </v-card>
    <hr />
  </div>
</template>

<script>
export default {
  layout: 'customerLayout',
  middleware: 'auth',
  data() {
    return {
      otherPageLink: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_orders_icon.png',
          title: 'My Orders',
          content: 'Track your orders or check your order history',
          link: '/sales/order/history',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_details_icon.png',
          title: 'My Details',
          content: 'Manage your personal & account information',
          link: '/customer/account/edit',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/address_book_icon.png',
          title: 'Address Book',
          content: 'Add, change or remove addresses.',
          link: '/customer/address',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/preferences_icon.png',
          title: 'Preferences',
          content: 'Update contact preferences and notifications.',
          link: '/newsletter/manage',
        },
      ],
      helpLinks: [
        {
          title: 'Shipping Information',
          link: '/policy/shipping-and-delivery',
        },
        {
          title: 'International Shipping',
          link: '/policy/international-shipping',
        },
        { title: 'Payment Methods', link: '/policy/billing-and-payment' },
        { title: 'Sales Tax', link: '/policy/sales-tax' },
        { title: 'Delivery Option', link: '/policy/white-glove-delivery' },
        { title: 'Free Shipping', link: '/policy/free-shipping' },
        {
          title: 'Ordering Option',
          link: '/policy/billing-and-payment#ordering-options',
        },
        {
          title: 'See all Help Topics',
          link: '/policy/shipping-and-delivery',
        },
        { title: 'Track My Order', link: 'track-my-order' },
        {
          title: 'Unsubscribe From Emails',
          link: '/customer/account/login',
        },
        {
          title: 'Contact Us',
          link: 'https://support.1stopbedrooms.com/hc/en-us/requests/new',
        },
      ],
    }
  },
}
</script>
<style scoped>
button {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
}
button::after {
  content: '';
  bottom: -1px;
  right: -1px;
  position: absolute;
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/curve_right.png?v7914c020)
    0 0 no-repeat;
  width: 59px;
  height: 70px;
}
</style>
