<template>
  <v-dialog v-model="dialog" width="600" hide-overlay>
    <template #activator="{ on, attrs }">
      <v-btn color="blue darken-4 px-12 py-5" dark v-bind="attrs" v-on="on">
        Write a review
      </v-btn>
    </template>
    <v-card tile flat>
      <v-card-title class="blue darken-4 white--text">
        Write A Review <v-spacer></v-spacer>
        <v-btn dark text @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-form class="mx-4 body-2 font-weight-regular">
        <p class="mt-1 mb-0">
          Rate your overall satisfication with <b>1stopbedrooms.</b>
        </p>
        <v-rating
          hover
          length="5"
          size="44"
          dense
          :value="rate"
          background-color="grey"
          color="yellow darken-2"
        ></v-rating>
        <br />
        <label for="title">
          Give your review a title
          <v-text-field v-model="review.title" dense outlined></v-text-field>
        </label>
        <label for="experience">
          Please describe your experience
          <v-textarea v-model="review.experience" outlined> </v-textarea>
        </label>
        <div class="d-flex">
          <label for="firstName">
            First Name
            <v-text-field
              v-model="review.firstName"
              dense
              outlined
            ></v-text-field>
          </label>
          <label for="lastName" class="mx-2">
            Last Name
            <v-text-field
              v-model="review.lastName"
              dense
              outlined
            ></v-text-field>
          </label>
        </div>
        <label for="orderId">
          Order Id
          <v-text-field v-model="review.orderId" dense outlined></v-text-field>
        </label>
        <label for="emailId">
          Email address <span class="font-italic">(private)</span>
          <v-text-field v-model="review.emailId" dense outlined></v-text-field>
        </label>
        <v-checkbox
          v-model="review.agree"
          dense
          label="I certify that this review is based on my own experience and that I am in no way affiliated with this business, and have not been offered any incentive or payment from the business to write this review. I agree to not write false reviews, which is in many cases against the law."
        ></v-checkbox>
        <v-btn class="deep-orange darken-1" dark tile block>Submit</v-btn>
        <br />
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      rate: 0,
      review: {
        title: '',
        experience: '',
        firstName: '',
        lastName: '',
        orderID: '',
        emailId: '',
        agree: false,
      },
    }
  },
}
</script>
