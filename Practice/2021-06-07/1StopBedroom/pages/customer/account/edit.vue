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

      <v-row v-if="!edit">
        <v-col>
          <p class="pt-6 mb-2">Password</p>
          <v-divider></v-divider>
          <v-btn
            v-if="editPassword"
            class="grey darken-3 my-2"
            dark
            @click="editPassword = !editPassword"
          >
            Reset Password
          </v-btn>
          <div v-if="!editPassword">
            <v-text-field
              v-model="currentPassword"
              label="Currrent Password"
              outlined
              dense
              title="Currrent Password"
              type="password"
            ></v-text-field>
            <v-layout>
              <v-text-field
                v-model="newPassword"
                label="New Password"
                outlined
                dense
                title="New Password"
                class="mr-2"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="confirmNewPassword"
                label="Confirm New Password"
                :rules="emailRules"
                outlined
                dense
                title="Confirm New Password"
                type="password"
              ></v-text-field>
            </v-layout>
            <v-btn outlined depressed color="grey darken-3" @click="edit = true"
              >Cancel</v-btn
            >
            <v-btn class="grey darken-3" dark @click="resetPassword">
              Update
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
      emailRules: [(v) => v === this.newPassword || 'Password mismatch'],
      edit: true,
      editPassword: false,
      remail: null,
      currentPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      formFields: [
        { value: '', label: 'Phone Number', type: 'number' },
        { value: '', label: 'Date Of Birth', type: 'text' },
      ],
    }
  },
  computed: {
    ...mapState('auth', ['firstName', 'lastName', 'email']),
  },
  methods: {
    resetPassword() {
      this.$axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDHlvRK5SCz0hRGRgqt8b-eMGwhloC2I-U`,
          {
            idToken: this.$cookies.get('token'),
            password: this.confirmNewPassword,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          alert('Password reset successfully.')
          this.$cookies.set('token', res.data.idToken)
          this.$router.push('/customer/account/welcome')
        })
    },
  },
}
</script>
