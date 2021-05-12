<template>
  <div>
    <v-img :src="imgSrc" class="mb-9">
      <v-card flat tile color="rgba(0, 0, 0, 0.3)">
        <h1 class="text-center text-capitalize">
          {{ $route.params.product }}
        </h1>
      </v-card>
    </v-img>
    <v-row>
      <v-col v-for="(category, i) in categories" :key="i" class="mb-16">
        <nuxt-link
          :to="'/' + $route.params.product + '/' + productLinks[i].link"
          class="text-decoration-none"
        >
          <v-hover v-slot="{ hover }">
            <v-card id="rounded-card">
              <v-avatar size="200">
                <v-img :src="category.src"></v-img>
              </v-avatar>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute style="z-index: 0">
                  <v-icon large>mdi-share</v-icon>
                </v-overlay>
              </v-fade-transition>
              <v-card-text>
                <p class="font-weight-bold pt-3 black--text text-center">
                  {{ category.name }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <div>
      <p class="text-center display-1 font-weight-light">
        WHY BUY AT 1STOPBEDROOMS
      </p>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i">
          <v-card tile flat>
            <v-img
              :src="feature.src"
              :alt="feature.title"
              width="150"
              class="ml-5"
            ></v-img>
            <v-card-title class="px-2">{{ feature.title }}</v-card-title>
            <v-card-text>
              <p>{{ feature.info }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider class="my-5"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: { type: String, default: null },
    categories: { type: Array, default: null },
    productLinks: { type: Array, default: null },
  },
  data() {
    return {
      features: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/top_brand_v1.png',
          title: 'Shop Top Brands',
          info: 'Including Ashley, Liberty, A.R.T., Coaster & more.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/expert_advise_v1.png',
          title: 'Get Expert Advice',
          info: 'Non-commissioned consultants are here to help. 877-958-9203',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/best_price_v1.png',
          title: 'Price Match Guarantee',
          info: 'Found a lower price? Just let us know and we’ll beat it!',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/free_Delivery_v1.png',
          title: 'Free! White Glove Delivery',
          info: 'Room of Choice + Full Setup On almost everything!',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/buy_now_icon.png',
          title: 'Buy Now and Pay Over Time',
          info: 'Choose 12, 24, or 36 months*',
        },
      ],
    }
  },
}
</script>

<style scoped>
#rounded-card {
  border-radius: 50%;
  height: 230px;
  width: 230px;
  border: 2px grey solid;
  padding: 15px;
}
</style>
