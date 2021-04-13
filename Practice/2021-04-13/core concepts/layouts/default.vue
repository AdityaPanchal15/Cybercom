<template>
  <v-app>
    <v-main>
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text><nuxt-link to="/">Home</nuxt-link></v-btn>
          <v-btn text> <nuxt-link to="/about">About</nuxt-link> </v-btn>
          <v-btn text><nuxt-link to="/inspire">Inspire</nuxt-link> </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
