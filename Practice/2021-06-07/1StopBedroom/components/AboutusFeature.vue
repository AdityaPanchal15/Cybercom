<template>
  <div class="grey lighten-4 my-12 text-center">
    <h1 v-if="titleObj" class="py-4">{{ titleObj.title }}</h1>
    <p v-if="titleObj" class="py-2">{{ titleObj.subTitle }}</p>
    <v-row>
      <v-col v-for="(item, i) in feature" :key="i" class="ma-4">
        <v-img :src="item.src" width="40%" class="mx-auto my-5"></v-img>
        <h3 class="black--text">{{ item.title }}</h3>
        <p class="black--text">
          {{ item.content }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    titleObj: {
      type: Object,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      feature: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/discount.png',
          title: 'It starts with discounts',
          content:
            'At 1StopBedrooms we offer special discounted pricing specifically for living and dining room sets.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/add-pieces.png',
          title: 'Add pieces and save',
          content:
            'The more pieces you order from any particular set, the greater the discount you receive.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/calc.png',
          title: 'We ship smarter to save you more',
          content:
            'Our technology systems calculate the savings from shipping multiple items all at once, then we pass that savings on to you!',
        },
      ],
    }
  },
}
</script>
