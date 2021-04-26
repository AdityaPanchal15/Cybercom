<template>
  <div>
    <slider :items="items" />
    <grid-image :img="img" />
    <rounded-img-and-button :img-src="imgSrc" />
    <v-layout>
      <v-container>
        <v-img
          src="https://product.koovs.com/home-web-896x503-FMXoTu.jpg"
          alt="banner"
        ></v-img>
      </v-container>
    </v-layout>
  </div>
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
      img: [
        {
          src: 'https://product.koovs.com/home-uni-1-6uxXhm.jpg',
        },
        {
          src: 'https://product.koovs.com/home-uni-2-fkm7Ia.jpg',
        },
        {
          src: 'https://product.koovs.com/home-uni-3-JiPVzg.jpg',
        },
        {
          src: 'https://product.koovs.com/home-uni-4-TP9WI8.jpg',
        },
        {
          src: 'https://product.koovs.com/home-uni-5_2-huCgpZ.jpg',
        },
        {
          src: 'https://product.koovs.com/home-uni-6-4CZBvZ.jpg',
        },
      ],
      imgSrc: [
        {
          src: 'https://product.koovs.com/home-WEB-6-Pm7i2S.webp',
          alt: 'dresses',
        },
        {
          src: 'https://product.koovs.com/home-uni-m8gAsJ.webp',
          alt: 'denim',
        },
        {
          src: 'https://product.koovs.com/home-WEB-8-KBDa9W.webp',
          alt: 'topstees',
        },
        {
          src: 'https://product.koovs.com/home-WEB-9-6ChJvF.webp',
          alt: 'footwear',
        },
        {
          src: 'https://product.koovs.com/home-WEB-10-h61wst.webp',
          alt: 'jackets',
        },
      ],
    }
  },
}
</script>
