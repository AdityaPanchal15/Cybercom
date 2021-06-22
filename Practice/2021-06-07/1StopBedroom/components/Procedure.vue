<template>
  <div>
    <v-row v-for="(item, i) in procedure" :key="i" class="my-3">
      <v-col cols="2">
        <v-img :src="item.src" width="90%"></v-img>
      </v-col>
      <v-col>
        <h3 class="py-2">{{ item.title }}</h3>
        <p class="subtitle-2 font-weight-regular">
          {{ item.content }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    procedure: {
      type: Array,
      default: null,
      required: true,
    },
  },
}
</script>
