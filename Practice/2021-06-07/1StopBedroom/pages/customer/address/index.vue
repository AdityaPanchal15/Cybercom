<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-light py-2">Address Book</h2>
    <v-divider></v-divider>
    <v-row v-if="address" class="my-4">
      <v-col cols="4">
        <v-card flat tile class="d-flex grey lighten-4 pa-2">
          <div>
            <h2>Default Billing Address</h2>
            <p class="font-weight-light subtitle-2">
              {{ address.firstName }} {{ address.lastName }}<br />
              {{ address.company }}<br />
              {{ address.streetAddress }}<br />
              {{ address.streetAddress2 }}<br />
              {{ address.city }},{{ address.state }}-{{ address.zipCode }}<br />
              T:{{ address.phoneNumber }}<br />
              Alternate No.:{{ address.alternatePhoneNumber }}
            </p>
          </div>
          <nuxt-link to="address/new" class="pt-1 font-weight-bold">
            Edit
          </nuxt-link>
        </v-card>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="4">
        <v-card flat tile class="d-flex grey lighten-4 pa-2">
          <div>
            <h2>Default Shipping Address</h2>
            <p class="font-weight-light subtitle-2">
              {{ address.firstName }} {{ address.lastName }}<br />
              {{ address.company }}<br />
              {{ address.streetAddress }}<br />
              {{ address.streetAddress2 }}<br />
              {{ address.city }},{{ address.state }}-{{ address.zipCode }}<br />
              T:{{ address.phoneNumber }}<br />
              Alternate No.:{{ address.alternatePhoneNumber }}
            </p>
          </div>
          <nuxt-link to="address/new" class="pt-1 font-weight-bold">
            Edit
          </nuxt-link>
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
export default {
  layout: 'customerLayout',
  data() {
    return {
      id: this.$cookies.get('uid'),
      address: null,
    }
  },
  created() {
    this.fetchAddress()
  },
  methods: {
    fetchAddress() {
      this.$axios
        .get(
          `https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com/userInfo.json?orderBy="uid"&startAt="${this.id}"&endAt="${this.id}"`
        )
        .then((res) => {
          this.address = Object.values(res.data)
            ? Object.values(res.data)[0]
            : false
          if (!this.address) {
            this.$router.push('/customer/address/new')
          }
        })
    },
  },
}
</script>
