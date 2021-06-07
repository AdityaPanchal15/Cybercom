<template>
  <div>
    <div class="orange darken-2 py-3"></div>
    <div class="blue darken-4">
      <v-row>
        <v-col>
          <v-card tile flat width="500" class="mx-auto my-15">
            <v-card-text>
              <p class="text-center title py-4">
                <span class="font-weight-light">Sign in to </span>
                1StopBedrooms.com
              </p>
              <v-form class="mx-6">
                <v-text-field
                  v-model="register.firstName"
                  label="First Name"
                  placeholder="First Name"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="register.lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="register.email"
                  label="Email"
                  placeholder="Email"
                  :rules="[rules.required]"
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="register.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  placeholder="Confirmed Password"
                  hint="At least 8 characters"
                  outlined
                  dense
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-text-field
                  v-model="rpassword"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, rules.passwordMatch]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Confirmed Password"
                  placeholder="Confirmed Password"
                  hint="At least 8 characters"
                  outlined
                  dense
                  @click:append="show2 = !show2"
                ></v-text-field>
                <v-btn
                  color="indigo accent-4"
                  height="50"
                  title="Log in"
                  dark
                  block
                  @click="signUp"
                  >Register</v-btn
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
  data() {
    return {
      show1: false,
      show2: false,
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      rpassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        passwordMatch: (v) =>
          this.register.password === v || `password doesn't match`,
      },
    }
  },
  methods: {
    signUp() {
      this.$axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHlvRK5SCz0hRGRgqt8b-eMGwhloC2I-U`,
          {
            email: this.register.email,
            password: this.register.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          this.$router.push('login')
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
