<template>
  <v-row class="blue darken-4" dark no-gutters>
    <v-spacer></v-spacer>
    <nuxt-link to="/">
      <v-img
        class="mt-7 mb-7"
        width="200"
        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
      ></v-img>
    </nuxt-link>

    <v-spacer></v-spacer>
    <p class="pt-12 body-1">
      <a class="white--text" @click="$router.go(-1)">
        Return to previous page
      </a>
      <!-- Return to previous page -->
    </p>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {}
</script>
