<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-medium py-2">Account Details</h2>
    <v-divider></v-divider>
    <v-form class="mt-5 mb-10">
      <v-row>
        <v-col>
          <v-text-field
            :value="firstName"
            label="First Name"
            outlined
            dense
            title="First Name"
            :disabled="edit"
            type="text"
          ></v-text-field>
          <v-text-field
            :value="email"
            label="Email Address"
            outlined
            dense
            title="Email"
            :disabled="edit"
            type="email"
          ></v-text-field>
          <v-text-field
            v-if="!edit"
            :value="remail"
            label="Confirm Email Address"
            outlined
            dense
            title="Confirm Email Address"
            type="email"
          ></v-text-field>
          <v-text-field
            v-for="(field, i) in formFields"
            :key="i"
            :value="field.value"
            :label="field.label"
            outlined
            dense
            :title="field.label"
            :disabled="edit"
            :type="field.type"
          ></v-text-field>
          <v-text-field
            v-if="edit"
            value="*****"
            label="Password"
            outlined
            dense
            title="Password"
            :disabled="edit"
            type="text"
          ></v-text-field>
          <v-btn
            v-if="edit"
            class="grey darken-3"
            width="60%"
            dark
            @click="edit = false"
            >Edit</v-btn
          >
          <div v-else>
            <v-btn outlined depressed color="grey darken-3" @click="edit = true"
              >Cancel</v-btn
            >
            <v-btn class="grey darken-3" width="60%" dark>Update</v-btn>
            <p class="pt-6 mb-2">Password</p>
            <v-btn class="grey darken-3" width="50%" dark @click="edit = false"
              >Reset Password</v-btn
            >
          </div>
        </v-col>
        <v-col>
          <v-text-field
            :value="lastName"
            label="Last Name"
            outlined
            dense
            title="Last Name"
            :disabled="edit"
            type="text"
          ></v-text-field>
        </v-col>

        <v-col></v-col>
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
      edit: true,
      remail: null,
      formFields: [
        { value: '', label: 'Phone Number', type: 'number' },
        { value: '', label: 'Date Of Birth', type: 'text' },
      ],
    }
  },
  computed: {
    ...mapState('auth', ['firstName', 'lastName', 'email']),
  },
}
</script>
