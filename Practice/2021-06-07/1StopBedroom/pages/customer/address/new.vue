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
              value=""
              label="First Name"
              outlined
              dense
              class="pr-2"
              title="First Name"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              value=""
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
            value=""
            label="Company"
            outlined
            dense
            class="mr-2"
            title="Company"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              value=""
              label="Phone Number"
              outlined
              dense
              class="pr-2"
              title="Phone Number"
              type="number"
            ></v-text-field>
            <v-text-field
              value=""
              label="Alternate Phone Number"
              outlined
              dense
              class="pr-2"
              title="Alternate Phone Number"
              type="number"
            ></v-text-field>
          </v-layout>
          <v-text-field
            value=""
            label="Street Address"
            outlined
            dense
            class="mr-2"
            title="Street Address"
            type="text"
          ></v-text-field>
          <v-text-field
            value=""
            label="Street Address"
            outlined
            dense
            class="mr-2"
            title="Street Address"
            type="text"
          ></v-text-field>
          <v-layout>
            <v-text-field
              value=""
              label="City"
              outlined
              dense
              class="pr-2"
              title="City"
              type="text"
            ></v-text-field>
            <v-select
              value="Please select region,state or province"
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
            value=""
            label="Zip/Postal Code"
            outlined
            dense
            class="mr-2"
            title="Zip/Postal Code"
            type="text"
          ></v-text-field>
          <div class="mt-8 mb-4">
            <v-btn outlined depressed color="grey darken-3">Cancel</v-btn>
            <v-btn class="grey darken-3 mx-2" dark>Save Address</v-btn>
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
    }
  },
}
</script>
