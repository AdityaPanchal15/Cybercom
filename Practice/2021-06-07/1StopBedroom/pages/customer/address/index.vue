<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-light py-2">Address Book</h2>
    <v-divider></v-divider>
    <v-row class="my-4">
      <v-col cols="4">
        <v-card flat tile class="d-flex grey lighten-4 pa-2">
          <address-card title="Default Billing Address" />
        </v-card>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="4">
        <v-card flat tile class="d-flex grey lighten-4 pa-2">
          <address-card title="Default Shipping Address" />
        </v-card>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card class="grey lighten-5" flat tile>
          <v-card-text>
            You have no additional address entries in your address book.
          </v-card-text>
          <v-btn class="grey darken-3 ma-2" dark to="/customer/address/new">
            Add New Button
          </v-btn>
        </v-card>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AddressCard from '~/components/OnePageComponents/AddressCard.vue'

export default {
  components: { AddressCard },
  layout: 'customerLayout',
  data() {
    return {
      id: this.$cookies.get('uid'),
    }
  },
}
</script>
