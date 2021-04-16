<template>
  <v-app>
    <no-ssr>
      <notifications group="notify" />
    </no-ssr>
    <v-main>
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <nuxt-link to="/">Learning Nuxt</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <nuxt-link to="/weather-app">Weather App</nuxt-link>
          </v-btn>
          <v-btn text>
            <nuxt-link to="/quiz">Quiz App</nuxt-link>
          </v-btn>
          <v-btn v-if="$auth()" text @click="logout"> Logout </v-btn>
        </v-toolbar-items>
      </v-toolbar>
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
      this.$store.commit('auth/setLoggedIn', false)
      this.$router.push('/admin/login')
    },
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
