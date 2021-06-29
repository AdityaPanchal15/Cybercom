<template>
  <div>
    <div class="orange darken-2 py-3"></div>
    <div class="blue darken-4">
      <v-row>
        <v-col>
          <v-card tile flat width="400" class="mx-auto my-15">
            <v-card-text>
              <p class="text-center title py-4">
                <span class="font-weight-light">Sign in to </span>
                1StopBedrooms.com
              </p>
              <v-form class="mx-6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  placeholder="Email"
                  outlined
                  dense
                  type="email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  placeholder="Password"
                  outlined
                  dense
                  type="password"
                ></v-text-field>
                <v-btn
                  color="indigo accent-4"
                  height="50"
                  title="Log in"
                  dark
                  block
                  @click="signIn"
                  >Sign In</v-btn
                >
              </v-form>
              <p class="mx-6 pt-2">
                By continuing you agree to our Terms and Conditions and our
                Privacy Policy.
              </p>
              <p class="mx-6">Forgot your password? Reset it</p>
              <v-divider></v-divider>
              <p class="headline mx-6">Sign in with your facebook account</p>
              <p class="mx-6">
                We'll never post anything without your permission.
              </p>
              <div class="mx-5 my-5">
                <v-btn color="indigo darken-1" class="mx-auto" dark block>
                  <v-icon>mdi-facebook</v-icon>
                  Facebook</v-btn
                >
              </div>
            </v-card-text>
            <div class="grey lighten-3 py-6 text-center">
              Don't have an account?
              <nuxt-link to="/customer/account/create"> Create one </nuxt-link>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-img
            class="banner-container"
            width="400"
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  middleware: 'customer',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signIn() {
      this.$axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHlvRK5SCz0hRGRgqt8b-eMGwhloC2I-U`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          this.$cookies.set('token', res.data.idToken)
          this.$cookies.set('userName', res.data.displayName)
          this.$cookies.set('email', res.data.email)
          this.$cookies.set('uid', res.data.localId)
          this.$store.commit('auth/setLoggedIn', {
            loggedIn: true,
            name: res.data.displayName,
            email: res.data.email,
          })
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.response.data.error.message)
        })
    },
  },
}
</script>
<style scoped>
.banner-container {
  margin: 250px 0;
}
</style>
