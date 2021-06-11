<template>
  <div>
    <p>{{ products }}</p>
    <v-card v-for="(product, index) in products" :key="index" tile>
      <v-row>
        <v-col cols="1">
          <v-img :src="product.src" width="120px" height="100px"></v-img>
        </v-col>
        <v-col cols="5">
          <h2 class="font-weight-medium">
            {{ product.title }}
          </h2>
          <p>{{ product.subTitle }}</p>
        </v-col>
        <v-col cols="4">
          <v-radio-group v-model="enable" column>
            <v-radio key="fedX" label="FedX Ground" value="fedX"> </v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <h3 class="font-weight-medium">{{ product.price }}</h3>
          <v-select
            v-model="selectedQuantity"
            :items="quantity"
            class="mr-9"
            outlined
            label="Quantity"
            dense
          >
          </v-select>
          <v-btn class="blue--text" @click="removeProduct(index)"
            ><v-icon>mdi-delete</v-icon>Remove</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      enable: 'fedX',
      selectedQuantity: null,
    }
  },
  computed: {
    ...mapState('cart', ['products']),
  },
  methods: {
    ...mapMutations('cart', ['removeProduct']),
    // ...mapActions('cart', ['updateQuantity']),
  },
}
</script>
