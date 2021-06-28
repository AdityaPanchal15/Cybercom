<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-light py-2">Add New Address</h2>
    <v-divider></v-divider>
    <p class="subtitle-2 font-weight-regular red--text py-3">
      * Required Fields
    </p>
    <v-form>
      <v-row>
        <v-col>
          <v-layout>
            <v-text-field
              v-model="newAddress.firstName"
              label="First Name"
              outlined
              dense
              class="pr-2"
              title="First Name"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="newAddress.lastName"
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
            v-model="newAddress.company"
            label="Company"
            outlined
            dense
            class="mr-2"
            title="Company"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              v-model="newAddress.phoneNumber"
              label="Phone Number"
              outlined
              dense
              class="pr-2"
              title="Phone Number"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newAddress.alternatePhoneNumber"
              label="Alternate Phone Number"
              outlined
              dense
              class="pr-2"
              title="Alternate Phone Number"
              type="number"
            ></v-text-field>
          </v-layout>
          <v-text-field
            v-model="newAddress.streetAddress"
            label="Street Address"
            outlined
            dense
            class="mr-2"
            title="Street Address"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="newAddress.streetAddress2"
            label="Street Address 2"
            outlined
            dense
            class="mr-2"
            title="Street Address 2"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              v-model="newAddress.city"
              label="City"
              outlined
              dense
              class="pr-2"
              title="City"
              type="text"
            ></v-text-field>
            <v-select
              v-model="newAddress.state"
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
            v-model="newAddress.zipCode"
            label="Zip/Postal Code"
            outlined
            dense
            class="mr-2"
            title="Zip/Postal Code"
            type="text"
          ></v-text-field>
          <div class="mt-8 mb-4">
            <v-btn outlined depressed color="grey darken-3">Cancel</v-btn>
            <v-btn class="grey darken-3 mx-2" dark @click="createNewAddress">
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
import { mapState } from 'vuex'
export default {
  layout: 'customerLayout',
  data() {
    return {
      state: ['Please select region,state or province', 'Gujarat'],
      newAddress: {
        firstName: this.firstName,
        lastName: this.lastName,
        company: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: 'Please select region,state or province',
        zipCode: '',
        uid: this.$cookies.get('uid'),
      },
    }
  },

  computed: {
    ...mapState('auth', ['firstName', 'lastName']),
  },
  methods: {
    createNewAddress() {
      this.$axios
        .post(
          `https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com/userInfo.json`,
          this.newAddress
        )
        .then((res) => {
          this.$router.push('/customer/address')
        })
    },
  },
}
</script>
