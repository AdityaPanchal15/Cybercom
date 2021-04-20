<template>
  <v-app>
    <!-- <v-card> -->
    <v-carousel
      cycle
      height="auto"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- </v-card> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://assets.ajio.com/medias/sys_master/images/images/hac/h2a/31252538490910/Ajio-SS21-BANNERS-1400x600px-05.jpg',
        },
        {
          src:
            'https://assets.ajio.com/medias/sys_master/images/images/h6b/he5/31252538294302/Ajio-SS21-BANNERS-1400x600px-03.jpg',
        },
        {
          src:
            'https://assets.ajio.com/medias/sys_master/images/images/had/h7f/31252539473950/Ajio-SS21-BANNERS-1400x600px-06.jpg',
        },
        {
          src:
            'https://assets.ajio.com/medias/sys_master/images/images/hf6/hec/31252539605022/Ajio-SS21-BANNERS-1400x600px-07.jpg',
        },
      ],
    }
  },
}
</script>
