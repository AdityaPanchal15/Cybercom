<template>
  <div>
    <div class="body-2">
      <nuxt-link to="/" class="text-decoration-none black--text">
        Home
      </nuxt-link>
      /
      <nuxt-link class="text-decoration-none black--text" to="/coupon-code">
        Coupon Codes
      </nuxt-link>
    </div>
    <div class="grey lighten-4 my-4">
      <v-row class="pa-10">
        <v-col class="white mx-3">
          <v-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/free-shipping.svg"
            width="40%"
            class="float-left my-3 mx-5"
          ></v-img>
          <div class="my-10">
            <h4>FREE Shipping</h4>
            <p class="body-2 black--text">On all Orders</p>
          </div>
        </v-col>
        <v-col class="white mx-3">
          <v-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/1sb-affirm.svg"
            width="30%"
            class="float-left my-10 mx-5"
          ></v-img>
          <div class="my-12">
            <h4>Buy Now, Pay Later!</h4>
            <p class="body-2 black--text">Up to 36 months* financing</p>
          </div>
        </v-col>
        <v-col class="white mx-3">
          <v-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/price-match.svg"
            width="30%"
            class="float-left my-3 mx-5"
          ></v-img>
          <div class="my-10">
            <h4>Price Match Guarantee</h4>
            <p class="body-2 black--text">
              Found a lower price? <br />
              Just let us know and we’ll beat it!
            </p>
          </div>
        </v-col>
      </v-row>
      <h1 class="text-center black--text">Coupon Codes</h1>
      <p class="text-center black--text py-4">
        *In addition to the 1StopBedrooms sale price, receive an additional
        discount by entering one of the applicable coupon codes below at
        checkout.
      </p>
      <h3 class="font-weight-regular text-center black--text pb-3">
        Questions? Call Us <span class="font-weight-bold"> 866-456-8823 </span>
      </h3>
    </div>

    <v-row class="my-10">
      <v-col class="black--text text-center">
        <h2 class="font-weight-medium my-2">
          Coupon codes for discounts based on order totals
        </h2>
        <v-row>
          <v-col
            v-for="(coupon, index) in coupons.totalOrderBasedDiscount"
            :key="index"
            cols="4"
          >
            <v-card class="grey lighten-4" flat tile>
              <v-card-text class="black--text">
                <p class="subtitle-2 font-weight-regular mb-2 mt-6">SAVE</p>
                <h1>{{ coupon.amount }}</h1>
                <h4 class="red--text py-3">{{ coupon.save }}</h4>
                <p class="subtitle-2 font-weight-regular">
                  {{ coupon.details }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="black--text text-center">
        <h2 class="font-weight-medium my-2">
          Coupon codes for manufacturer discounts
        </h2>
        <v-row>
          <v-col
            v-for="(coupon, index) in coupons.manufacturerDiscount"
            :key="index"
            cols="4"
          >
            <v-card class="grey lighten-4" flat tile>
              <v-card-text class="black--text">
                <v-img :src="coupon.src" width="70%" class="mx-6"></v-img>
                <p class="subtitle-2 font-weight-regular my-1">SAVE</p>
                <h1>{{ coupon.amount }}</h1>
                <h4 class="indigo--text py-2">{{ coupon.code }}</h4>
                <p class="subtitle-2 font-weight-regular mb-0">
                  {{ coupon.details }} <br />{{ coupon.orders }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-card class="grey lighten-3 pa-5 text-center black--text" flat>
      *Coupon codes do not apply for Bestar, AICO, Kincaid, Hammary and Hooker
      products. Additionally they do not apply on discontinued items and items
      marked "Special Price".<br />
      *Some brands may be excluded from sale, see product page to view available
      discount. Only 1 coupon per household, promotions can not be combined.<br /><br />
      <p class="title font-weight-regular">
        Question? Call us <span class="font-weight-bold"> 866-456-8823 </span>
      </p>
    </v-card>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    coupons: gql`
      {
        coupons {
          totalOrderBasedDiscount {
            amount
            save
            details
          }
          manufacturerDiscount {
            code
            src
            amount
            details
            orders
          }
        }
      }
    `,
  },
  head: {
    title: 'Coupon Codes',
  },
}
</script>
