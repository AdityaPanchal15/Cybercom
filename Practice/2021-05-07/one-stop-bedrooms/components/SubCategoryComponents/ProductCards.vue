<template>
  <div class="ml-5">
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <h4 class="text-right pt-2 pb-7">Sort by:</h4>
      </v-col>
      <v-col cols="2">
        <v-select :items="items" label="Select" dense solo flat></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 10" :key="n">
        <v-card width="300">
          <v-img
            src="https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/b/6/b647-31-36-46-78-56-97-91-q236_1_1.jpg"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Top Sellers', 'Price:Low-High', 'Price:High-Low'],
    }
  },
}
</script>
