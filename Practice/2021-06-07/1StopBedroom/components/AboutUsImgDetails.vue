<template>
  <div>
    <v-row>
      <v-col :order="detailsObj.order">
        <h2 v-html="detailsObj.title"></h2>
        <p class="py-4 font-weight-regular">
          {{ detailsObj.content }}
        </p>
        <nuxt-link :to="detailsObj.link" class="indigo--text font-weight-bold">
          {{ detailsObj.linkName }}
        </nuxt-link>
      </v-col>
      <v-col>
        <v-img :src="detailsObj.src" width="90%"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    detailsObj: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>
