<template>
  <div>
    <default-layout>
      <v-app-bar class="white" dense flat>
        <v-spacer></v-spacer>
        <div v-for="(item, i) in customerLinks" :key="i">
          {{ i > 0 ? '|' : null }}
          <nuxt-link :to="item.link"> {{ item.title }} </nuxt-link>
        </div>
      </v-app-bar>
      <Nuxt />
    </default-layout>
  </div>
</template>

<script>
import defaultLayout from './default.vue'
export default {
  components: { defaultLayout },
  data() {
    return {
      customerLinks: [
        { link: '/customer/account/welcome', title: 'My Account' },
        { link: '/sales/order/history', title: 'My Orders' },
        { link: '/customer/account/edit', title: 'My Details' },
        { link: '/customer/address', title: 'Address Book' },
        { link: '/newsletter/manage', title: 'Preferences' },
        { link: '/customer/account/logout', title: 'Sign Out' },
      ],
    }
  },
}
</script>
<style scoped>
a {
  padding: 4px 7px;
  padding-bottom: 10px;
  font-weight: bold;
}
a:hover {
  color: black;
}
a.nuxt-link-active {
  color: black;
  border-bottom-style: solid;
  border-bottom-color: blue;
  border-bottom-width: 6px;
}
</style>
