<template>
  <!-- <v-app> -->
  <v-container>
    <br /><br /><br />
    <v-row>
      <v-col v-for="(img, i) in imgSrc" :key="i">
        <v-img :src="img.src" width="210px"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        {
          src: 'https://product.koovs.com/home-uni-fTAE6X.webp',
          alt: 'denim',
        },
        {
          src: 'https://product.koovs.com/home-WEB-6-hsIFwL.webp',
          alt: 'dresses',
        },
        {
          src: 'https://product.koovs.com/home-WEB-5-yll2fq.webp',
          alt: 'footwear',
        },
        {
          src: 'https://product.koovs.com/home-WEB-8-Yo0wHk.webp',
          alt: 'topstees',
        },
        {
          src: 'https://product.koovs.com/home-WEB-2-Cv14sf.webp',
          alt: 'jackets',
        },
      ],
    }
  },
}
</script>
