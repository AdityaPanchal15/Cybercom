<template>
  <div>
    <p class="headline py-5 font-weight-light">{{ title }}</p>
    <v-row no-gutters>
      <v-col v-for="(item, i) in cardData" :key="i">
        <v-card class="mx-1" height="260" width="205" tile flat>
          <v-img :src="item.src" height="160"></v-img>
          <v-list-item-content>
            <v-list-item-title class="black--text pb-2">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="pb-2">{{
              item.subtitle
            }}</v-list-item-subtitle>
            <p class="red--text title">
              {{ item.price
              }}<span
                class="text-decoration-line-through subtitle-1 grey--text px-2"
                >{{ item.originalPrice }}</span
              >
            </p>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    cardData: { type: Array, default: null },
    title: { type: String, default: null },
  },
}
</script>
