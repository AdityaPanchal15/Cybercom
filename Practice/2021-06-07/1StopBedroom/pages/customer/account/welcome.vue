<template>
  <div class="grey lighten-5 text-center">
    <p class="display-1 py-10 blue--text font-weight-bold">Wecome! Aditya</p>
    <v-row
      v-for="(item, i) in otherPageLink"
      :key="i"
      align="center"
      width="60%"
    >
      <v-spacer></v-spacer>
      <v-col>
        <v-card flat>
          <v-img :src="item.src" width="50%" class="mx-auto"></v-img>
          <p class="blue--text title text-center mx-auto my-1">
            {{ item.title }}
          </p>
          <p class="subtitle-2 pb-3 font-weight-light">
            {{ item.content }}
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat>
          <v-img :src="item.src" width="50%" class="mx-auto"></v-img>
          <p class="blue--text title text-center mx-auto my-1">
            {{ item.title }}
          </p>
          <p class="subtitle-2 pb-3 font-weight-light">
            {{ item.content }}
          </p>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'customerLayout',
  data() {
    return {
      otherPageLink: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_orders_icon.png',
          title: 'My Orders',
          content: 'Track your orders or check your order history',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_details_icon.png',
          title: 'My Details',
          content: 'Manage your personal & account information',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/address_book_icon.png',
          title: 'Address Book',
          content: 'Add, change or remove addresses.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/preferences_icon.png',
          title: 'Preferences',
          content: 'Update contact preferences and notifications.',
        },
      ],
    }
  },
}
</script>
