<template>
  <div class="ma-4 black--text">
    <h2 class="font-weight-medium py-2">My orders</h2>
    <v-card class="grey lighten-4 text-center py-10" tile flat>
      <v-img
        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/unbox_in_house.png?vd1e8a7d4"
        width="10%"
        class="mx-auto"
      ></v-img>
      <p class="title pt-4">You don't have any orders yet!</p>
      <p>
        After you place your first order, you can find all the details and track
        the <br />
        delivery status here. Ready to start shopping?
      </p>
      <v-btn class="deep-orange accent-3" dark width="15%">Shop Now</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'customerLayout',
}
</script>
