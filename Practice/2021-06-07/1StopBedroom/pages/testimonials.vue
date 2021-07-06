<template>
  <div class="ma-2">
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none"> Home </nuxt-link>
      /
      <nuxt-link class="text-decoration-none" to="/testimonials">
        Testimonials | 1StopBedrooms
      </nuxt-link>
    </div>
    <v-container>
      <div class="grey lighten-4">
        <v-img
          src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/review_img.png"
        >
        </v-img>

        <v-row class="my-6 mx-12">
          <v-col>
            <h1 class="font-weight-medium">1STOPBEDROOMS</h1>

            <v-img
              src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/star_small_v1.png"
              width="10%"
              class="float-left"
            ></v-img>

            <p class="subtitle-2">
              &nbsp;<a href="">38,497 reviews</a> | 1716 Coney Island Ave
              Brooklyn, NY 11230
            </p>
          </v-col>
          <v-col cols="3">
            <write-review />
          </v-col>
        </v-row>
      </div>

      <v-row>
        <v-col>
          <v-card tile flat class="grey lighten-4">
            <reviews />
          </v-card>
          <div class="text-center">
            <v-pagination :length="3" disabled outlined></v-pagination>
          </div>
        </v-col>
        <v-col cols="4">
          <contact-card />
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>
      <p class="subtitle-2 font-weight-light">
        Welcome to our 1StopBedrooms testimonials page! On this page you’ll find
        feedback from our customers about our service and the products we sell.
        Testimonials reflect our customers’ opinion about their experiences with
        our company. These opinions will help others make the right choice when
        considering where to buy from. <br /><br />
        We gather 1StopBedrooms testimonials for several reasons. First, as you
        consider buying from us, we want to give you a chance to read first-hand
        stories from customers who have been where you are now. We know that
        buying from an online store can seem like a leap of faith. The input you
        find on this page will show you what others are saying about the
        experience they had with 1stopbedrooms.<br /><br />Second, we want you
        to learn about the details of our furniture and services that stand out
        most to customers who choose us. While we are concerned with every
        aspect of your furniture-buying experience, these customers can relate
        the highlights that matter most to them. The information on this page is
        a deep dive into what it is like to navigate the website, order
        furniture, accept delivery, and contact our customer service
        department.<br /><br />
        What you discover when you read 1StopBedrooms testimonials is the
        thoughts and feelings of customers who know precisely what makes our
        company stand out. Their authentic stories tend to be very descriptive
        and highly personalized. By the time you finish reading them, you’ll
        have a clearer picture of what 1StopBedrooms is all about. Whether you
        are a new or returning customer, we are here for you! Please share your
        thoughts with us! Furniture is what we sell but customers are who we
        serve.
      </p>
    </v-container>
  </div>
</template>

<script>
import ContactCard from '~/components/Testimonials/ContactCard.vue'
import Reviews from '~/components/Testimonials/Reviews.vue'
import WriteReview from '~/components/Testimonials/WriteReview.vue'
export default {
  components: { ContactCard, Reviews, WriteReview },
}
</script>
