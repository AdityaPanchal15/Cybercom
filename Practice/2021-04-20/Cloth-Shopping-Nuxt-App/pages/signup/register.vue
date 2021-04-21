<template>
  <v-container>
    <v-layout>
      <v-flex xs5 offset-xs4>
        <v-card>
          <v-card-title
            ><h1 class="display-1 ma-auto">Register</h1>
          </v-card-title>
          <v-card-text>
            <v-flex>
              <h4 class="subtitle-1 mx-9 my-3">
                Sign up to get access to exciting offers and promotions
              </h4>
              <h2 class="my-6 black--text">Continue With</h2>
              <v-row align="center" class="my-6" justify="space-around">
                <v-btn tile class="elevation-0">
                  <v-img
                    src="https://images.koovs.com/uploads/koovs/koovsglogo.jpg"
                    alt="google"
                    width="20px"
                  />&nbsp; Google
                </v-btn>
                <v-btn tile class="elevation-0">
                  <v-img
                    src="data:image/png;base64,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"
                    alt="facebook"
                    width="35px"
                  />&nbsp; Facebook
                </v-btn>
              </v-row>
              <h2 class="mt-8 mb-2 black--text">Using Email</h2>
              <v-text-field
                v-model="email"
                placeholder="Email"
                type="email"
                dense
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                placeholder="Password"
                type="password"
                dense
                outlined
              ></v-text-field>
              <v-btn class="black" width="200px" x-large dark @click="signup"
                >Sign Up</v-btn
              >
              <v-layout class="mt-4">
                <v-spacer></v-spacer>
                <span class="black--text">Already have an account ?</span>
                <nuxt-link to="/signup/register"> Sign In </nuxt-link>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout class="mt-7"
                >By creating an account, I agree to Koovs Terms of Use and
                Privacy Policy</v-layout
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
      password: '',
    }
  },
  methods: {
    signup() {
      this.$axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.AppId}`,
          {
            email: this.email,
            password: this.password,
          }
        )
        .then((res) => {
          console.log(res.data)
        })
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
