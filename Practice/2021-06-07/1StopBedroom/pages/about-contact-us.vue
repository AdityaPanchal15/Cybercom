<template>
  <div class="ma-6 black--text">
    <p class="display-3 font-weight-bold titleColor">Contact Us</p>
    <v-row>
      <v-col v-for="(item, i) in contactDetails" :key="i">
        <h2 class="py-5">{{ item.title }}</h2>
        <v-divider></v-divider>
        <div class="py-6">
          <p class="cursor blue--text my-1">{{ item.contactAddress }}</p>
          <p>{{ item.content }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-img
          src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/map.png"
        ></v-img>
      </v-col>
      <v-col>
        <h2>Corporate Headquarters</h2>
        <v-divider class="my-4"></v-divider>
        <p>
          1716 Coney Island Avenue <br />
          Brooklyn, NY 11230
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'knowAbout',
  data() {
    return {
      contactDetails: [
        {
          title: 'Sales & Support',
          contactAddress: 'Use our contact form',
          content: 'or call 866-456-8823',
        },
        {
          title: 'Media',
          contactAddress: 'press@1stopbedrooms.com',
          content: '',
        },
        {
          title: 'Careers',
          contactAddress: 'jobs@1stopbedrooms.com',
          content: '',
        },
      ],
    }
  },
}
</script>
<style scoped>
.titleColor {
  color: #0d47a1;
}
.cursor {
  cursor: pointer;
}
</style>
