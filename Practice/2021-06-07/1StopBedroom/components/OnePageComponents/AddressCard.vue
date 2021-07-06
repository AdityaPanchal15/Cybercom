<template>
  <div v-if="address && loggedIn">
    <h2 class="font-weight-regular">{{ title }}</h2>
    <nuxt-link
      :to="'/customer/address/edit/id/' + address.addressId"
      class="pt-1 font-weight-bold float-right"
    >
      Edit
    </nuxt-link>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      address: Object,
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
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
