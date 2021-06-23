<template>
  <v-navigation-drawer color="grey lighten-3" width="100%">
    <div
      v-for="(item, index) in knowUsLinks"
      :key="index"
      class="py-3 font-weight-regular"
    >
      <nuxt-link :to="item.link" class="linkStyle">
        {{ item.title }}
      </nuxt-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    knowUsLinks: {
      type: Array,
      default: null,
      required: true,
    },
  },
}
</script>
<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: black;
  display: block;
  background-color: white;
  padding: 10px 20px;
  margin-left: 20px;
  width: 90%;
  border-radius: 5px;
}
.linkStyle {
  padding: 10px 40px;
  color: black;
}
a:hover {
  font-weight: bold;
}
</style>
