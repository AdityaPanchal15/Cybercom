<template>
  <div>
    <div v-for="(imgSrc, index) of img" :key="index">
      <v-row v-if="index % 2 == 0">
        <v-spacer></v-spacer>
        <v-col cols="6" sm="5">
          <v-img :src="img[index].src"></v-img>
        </v-col>
        <v-col cols="6" sm="5">
          <v-img :src="img[index + 1].src"></v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
}
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
