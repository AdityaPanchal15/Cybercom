<template>
  <v-row v-if="address" class="my-4 pa-4">
    <v-col cols="5">
      <h2 class="font-weight-regular">Default Billing Address</h2>
      <v-divider></v-divider>
      <p class="font-weight-light subtitle-2 py-2">
        {{ address.firstName }} {{ address.lastName }}<br />
        {{ address.company }}<br />
        {{ address.streetAddress }}<br />
        {{ address.streetAddress2 }}<br />
        {{ address.city }},{{ address.state }}-{{ address.zipCode }}<br />
        T:{{ address.phoneNumber }}<br />
        Alternate No.:{{ address.alternatePhoneNumber }}
      </p>

      <nuxt-link to="/customer/address/new" class="pt-1 font-weight-bold">
        Edit
      </nuxt-link>
    </v-col>
    <v-col cols="5">
      <h2 class="font-weight-regular">Default Shipping Address</h2>
      <v-divider></v-divider>
      <p class="font-weight-light subtitle-2 py-2">
        {{ address.firstName }} {{ address.lastName }}<br />
        {{ address.company }}<br />
        {{ address.streetAddress }}<br />
        {{ address.streetAddress2 }}<br />
        {{ address.city }},{{ address.state }}-{{ address.zipCode }}<br />
        T:{{ address.phoneNumber }}<br />
        Alternate No.:{{ address.alternatePhoneNumber }}
      </p>

      <nuxt-link to="address/new" class="pt-1 font-weight-bold">
        Edit
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      address: null,
    }
  },
  created() {
    this.fetchAddress()
  },
  methods: {
    fetchAddress() {
      if (this.$cookies.get('uid') !== null) {
        this.$axios
          .get(
            `https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com/userInfo.json?orderBy="uid"&startAt="${this.$cookies.get(
              'uid'
            )}"&endAt="${this.$cookies.get('uid')}"`
          )
          .then((res) => {
            this.address = Object.values(res.data)
              ? Object.values(res.data)[0]
              : false
          })
      }
    },
  },
}
</script>
