<template>
  <v-form class="mx-4">
    <v-row>
      <v-col class="d-inline-flex mt-4">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          outlined
          dense
        >
        </v-text-field>
        <p class="pt-2 pl-2">
          Already have an account?
          <nuxt-link to="/customer/account/login"> Sign in here.</nuxt-link>
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="font-weight-regular">Billing Address</h2>
        <v-divider></v-divider>
        <br />
        <div class="d-flex mt-10">
          <v-text-field
            v-model="firstName"
            outlined
            dense
            class="mr-3"
            label="First Name*"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            label="Last Name*"
            outlined
            dense
            required
          ></v-text-field>
        </div>
        <v-text-field
          v-model="company"
          label="Company(optional)"
          outlined
          dense
          required
        ></v-text-field>
        <div class="d-flex">
          <v-text-field
            v-model.number="phoneNumber"
            outlined
            type="number"
            dense
            class="mr-3"
            label="Phone Number*"
            required
          ></v-text-field>
          <v-text-field
            v-model.number="alternateNumber"
            label="Alternate Number(Optional)"
            outlined
            dense
            required
            type="number"
          ></v-text-field>
        </div>
        <v-text-field
          v-model="street"
          label="Street Address*"
          outlined
          dense
          required
        ></v-text-field>
        <v-text-field
          v-model="apartment"
          label="Apartment,suite,etc(optional)"
          outlined
          dense
          required
        ></v-text-field>
        <div class="d-flex">
          <v-text-field
            v-model.number="city"
            outlined
            dense
            class="mr-3"
            label="City*"
            required
          ></v-text-field>
          <v-select
            v-model.number="state"
            label="State*"
            outlined
            dense
            :items="items"
            class="mr-3"
            required
          ></v-select>
          <v-text-field
            v-model.number="zipcode"
            label="Zip/Postal Code*"
            outlined
            dense
            required
          ></v-text-field>
        </div>
      </v-col>
      <v-col>
        <h2 class="font-weight-regular">Shipping Address</h2>
        <v-divider></v-divider>
        <v-checkbox
          v-model="same"
          label="My billing and shipping address are same"
        ></v-checkbox>
        <div v-if="!same">
          <div class="d-flex">
            <v-text-field
              v-model="firstName1"
              outlined
              dense
              class="mr-3"
              label="First Name*"
              required
            ></v-text-field>
            <v-text-field
              v-model="lastName1"
              label="Last Name*"
              outlined
              dense
              required
            ></v-text-field>
          </div>
          <v-text-field
            v-model="company1"
            label="Company(optional)"
            outlined
            dense
            required
          ></v-text-field>
          <div class="d-flex">
            <v-text-field
              v-model.number="phoneNumber1"
              outlined
              type="number"
              dense
              class="mr-3"
              label="Phone Number*"
              required
            ></v-text-field>
            <v-text-field
              v-model.number="alternateNumber1"
              label="Alternate Number(Optional)"
              outlined
              dense
              required
              type="number"
            ></v-text-field>
          </div>
          <v-text-field
            v-model="street1"
            label="Street Address*"
            outlined
            dense
            required
          ></v-text-field>
          <v-text-field
            v-model="apartment1"
            label="Apartment,suite,etc(optional)"
            outlined
            dense
            required
          ></v-text-field>
          <div class="d-flex">
            <v-text-field
              v-model.number="city1"
              outlined
              dense
              class="mr-3"
              label="City*"
              required
            ></v-text-field>
            <v-select
              v-model.number="state1"
              label="State*"
              outlined
              dense
              :items="items"
              class="mr-3"
              required
            ></v-select>
            <v-text-field
              v-model.number="zipcode1"
              label="Zip/Postal Code*"
              outlined
              dense
              required
            ></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
    <h2 class="font-weight-regular mb-2">
      Create a password <span class="subtitle-1">(optional)</span>
    </h2>
    <v-divider></v-divider>
    <p class="body-2 py-2">
      You can log in to view your order status at any time
    </p>
    <v-row>
      <v-col>
        <v-text-field
          v-model="password"
          label="Password"
          outlined
          dense
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="rpassword"
          label="Confirm Password"
          outlined
          dense
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      same: false,
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      phoneNumber: null,
      alternateNumber: null,
      street: '',
      apartment: '',
      city: '',
      state: '',
      zipcode: null,
      firstName1: '',
      lastName1: '',
      company1: '',
      phoneNumber1: null,
      alternateNumber1: null,
      street1: '',
      apartment1: '',
      city1: '',
      state1: '',
      zipcode1: null,
      password: '',
      rpassword: '',
      items: ['Gujarat'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
}
</script>
