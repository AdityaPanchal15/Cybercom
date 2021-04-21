<template>
  <v-app>
    <v-main>
      <v-card tile>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <v-img
              src="https://images.koovs.com/uploads/koovs/logo.png"
            ></v-img>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn v-if="!$authUser()" text>
            <nuxt-link to="/signup/login">Login</nuxt-link>
          </v-btn>
          <v-btn v-if="$authUser()" text @click="logout"> Logout </v-btn>
          |
          <v-btn text>
            <nuxt-link to="/signup/register">SignUp</nuxt-link>
          </v-btn>

          <v-btn icon>
            <nuxt-link to="/checkout/wishlist">
              <v-icon>mdi-heart-outline</v-icon>
            </nuxt-link>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-shopping-outline</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
      <v-card flat tile>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text>
              <nuxt-link to="/" title="MEN">Men</nuxt-link>
            </v-btn>
            <v-btn text>
              <nuxt-link to="/women" title="WOMEN">Women</nuxt-link>
            </v-btn>
            <v-btn text>
              <nuxt-link to="/blog" title="BLOG">The Blog</nuxt-link>
            </v-btn>
            <v-btn text>
              <nuxt-link to="/clearance">Clearance</nuxt-link>
            </v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-text-field
              single-line
              append-icon="mdi-magnify"
              placeholder="Search for products,brands"
            ></v-text-field>
          </v-col>
        </v-toolbar>
      </v-card>

      <hr />
      <transition>
        <nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$store.commit('setLoggedIn', false)
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: grey;
}
</style>
