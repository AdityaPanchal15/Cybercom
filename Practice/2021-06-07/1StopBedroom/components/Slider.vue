<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img
        :src="slide.imgUrl"
        :alt="slide.alt"
        lazy-src="lazyImg.gif"
        height="100%"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          imgUrl:
            'https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif',
          alt: 'img1',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/media/bannerslider/s/p/springsale_mattress_mainbnr_desk_040321.png',
          alt: 'img2',
        },
        {
          imgUrl:
            'https://cdn.1stopbedrooms.com/media/bannerslider/b/e/bedroomblowout_mainbnr_desk_120321.png',
          alt: 'img3',
        },
      ],
    }
  },
}
</script>
