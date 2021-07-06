<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-light py-2">Edit Address</h2>
    <v-divider></v-divider>
    <p class="subtitle-2 font-weight-regular red--text py-3">
      * Required Fields
    </p>
    <v-form>
      <v-row>
        <v-col>
          <v-layout>
            <v-text-field
              v-model="address.firstName"
              label="First Name"
              outlined
              dense
              class="pr-2"
              title="First Name"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="address.lastName"
              label="Last Name"
              outlined
              dense
              class="pr-2"
              title="Last Name"
              type="text"
              required
            ></v-text-field>
          </v-layout>
          <v-text-field
            v-model="address.company"
            label="Company"
            outlined
            dense
            class="mr-2"
            title="Company"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              v-model="address.phoneNumber"
              label="Phone Number"
              outlined
              dense
              class="pr-2"
              title="Phone Number"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="address.alternatePhoneNumber"
              label="Alternate Phone Number"
              outlined
              dense
              class="pr-2"
              title="Alternate Phone Number"
              type="number"
            ></v-text-field>
          </v-layout>
          <v-text-field
            v-model="address.streetAddress"
            label="Street Address"
            outlined
            dense
            class="mr-2"
            title="Street Address"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="address.streetAddress2"
            label="Street Address 2"
            outlined
            dense
            class="mr-2"
            title="Street Address 2"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              v-model="address.city"
              label="City"
              outlined
              dense
              class="pr-2"
              title="City"
              type="text"
            ></v-text-field>
            <v-select
              v-model="address.state"
              :items="state"
              label="State"
              outlined
              dense
              class="pr-2"
              title="Last Name"
              type="text"
            ></v-select>
          </v-layout>
          <v-text-field
            v-model="address.zipCode"
            label="Zip/Postal Code"
            outlined
            dense
            class="mr-2"
            title="Zip/Postal Code"
            type="text"
          ></v-text-field>
          <div class="mt-8 mb-4">
            <v-btn
              outlined
              depressed
              color="grey darken-3"
              to="/customer/address"
            >
              Cancel
            </v-btn>
            <v-btn class="grey darken-3 mx-2" dark @click="updateAddress">
              Save Address
            </v-btn>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'customerLayout',
  data() {
    return {
      state: ['Please select region,state or province', 'Gujarat'],
      address: Object,
      uid: this.$cookies.get('uid'),
      editKey: null,
    }
  },

  created() {
    this.fetchAddress()
  },
  methods: {
    fetchAddress() {
      this.$axios
        .get(
          `https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com/userInfo.json?orderBy="uid"&startAt="${this.uid}"&endAt="${this.uid}"`
        )
        .then((res) => {
          this.editKey = res.data ? Object.keys(res.data)[0] : null
          this.address = Object.values(res.data)
            ? Object.values(res.data)[0]
            : false
          if (!this.address) {
            this.$router.push('/customer/address/new')
          }
        })
    },
    updateAddress() {
      console.log(this.address)
      this.$axios
        .patch(
          `https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com/userInfo/${this.editKey}.json`,
          this.address
        )
        .then((res) => {
          this.$router.push('/customer/address/')
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch((err) => {
          alert('update does not successfull')
        })
    },
  },
}
</script>
