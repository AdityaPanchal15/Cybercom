<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-medium py-2">Email Preferences</h2>
    <v-divider></v-divider>
    <v-row>
      <v-col v-for="(item, i) in option" :key="i" cols="6">
        <v-checkbox
          v-model="enableOption"
          :label="item.label"
          class="black--text"
          :value="item.label"
          hide-details
        ></v-checkbox>
        <p class="pl-8 body-2">
          {{ item.content }}
        </p>
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-btn class="grey darken-3 float-right my-3" dark width="15%">
      Update
    </v-btn>
  </div>
</template>

<script>
export default {
  layout: 'customerLayout',
  data() {
    return {
      enableOption: 'Exclusive invitations and offers',
      option: [
        {
          label: 'Exclusive invitations and offers',
          content:
            'Hear about our exclusive sale previews and special promotions',
        },
        {
          label: 'Style Updates',
          content:
            'Stay up to date with our edit of the best new arrivals, Brands and trends',
        },
        {
          label: 'Editorial Roundup',
          content:
            'Receive updates about products & services, special offers, news & events from 1StopBedrooms',
        },
        {
          label: 'Unsubscribe from all',
          content: 'You will still receive emails related to orders',
        },
      ],
    }
  },
}
</script>
