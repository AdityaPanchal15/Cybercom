<template>
  <v-container>
    <v-row no-gutters class="black--text">
      <v-col v-for="(feature, i) in features" :key="i">
        <!-- <v-spacer></v-spacer> -->
        <v-icon size="50" color="black">{{ feature.icon }}</v-icon>

        <h3>{{ feature.title }}</h3>
        <p>
          {{ feature.content1 }} <br />
          {{ feature.content2 }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'mdi-truck-delivery-outline',
          title: 'Free Delivery',
          content1: 'Free in home delivery',
          content2: 'Available nationwide*',
        },
        {
          icon: 'mdi-credit-card',
          title: 'Financing Available',
          content1: 'Buy now and pay over time',
          content2: 'Choose 12,24 or 36 months*',
        },
        {
          icon: 'mdi-printer-pos',
          title: 'Best Price Guarantee',
          content1: 'We won’t be beat on price.',
          content2: 'Find a lower price and we’ll beat it',
        },
        {
          icon: 'mdi-star-shooting-outline',
          title: 'Shop Top Brands',
          content1: 'Including Ashley, Liberty,',
          content2: 'A.R.T., Coaster and more',
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Americas Highest Rated Furniture Company',
          content1: 'Over 200k verified online ',
          content2: 'Reviews',
        },
      ],
    }
  },
}
</script>
