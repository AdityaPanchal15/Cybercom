<template>
  <v-container>
    <br /><br /><br />
    <v-row>
      <v-col v-for="(img, i) in imgSrc" :key="i">
        <v-img :src="img.src" width="210px"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: Array,
      default: null,
    },
  },
}
</script>
