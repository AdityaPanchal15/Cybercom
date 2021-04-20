<template>
  <div>
    <v-card tile>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-img src="https://images.koovs.com/uploads/koovs/logo.png"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text>
          <nuxt-link to="/">Login|SignUp</nuxt-link>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
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
            <nuxt-link to="/">Men</nuxt-link>
          </v-btn>
          <v-btn text>
            <nuxt-link to="/women">Women</nuxt-link>
          </v-btn>
          <v-btn text>
            <nuxt-link to="/blog">The Blog</nuxt-link>
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: grey;
}
</style>
