<template>
  <v-container>
    <v-layout>
      <!-- <v-spacer></v-spacer> -->
      <v-flex xs5 offset-xs4>
        <v-card>
          <v-card-title
            ><h1 class="display-1 ma-auto">Reset Password</h1>
            <!-- <br /> -->
          </v-card-title>
          <v-card-text>
            <v-flex>
              <h4 class="subtitle-1 mx-9 my-3">
                Reset your password to get access to your account
              </h4>
              <v-text-field
                v-model="email"
                placeholder="Enter your email"
                type="email"
                dense
                outlined
              ></v-text-field>
              <v-btn class="black" width="200px" x-large dark @click="reset"
                >Reset Password</v-btn
              >
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    reset() {
      this.$axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.AppId}`,
          {
            requestType: 'PASSWORD_RESET',
            email: this.email,
          }
        )
        .then((res) => {
          alert('reset password link send to your email address')
          console.log(res)
        })
    },
  },
}
</script>
