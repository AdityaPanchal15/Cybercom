<template>
  <div class="ma-4">
    <v-row>
      <v-col>
        <v-tabs background-color="grey lighten-4">
          <v-tab>Reviews(38,497)</v-tab>
          <v-tab>Google Reviews(711)</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="4">
        <span class="float-left py-3">Sorted By:&nbsp;</span>
        <v-select
          v-model="selectedReviewType"
          :items="items"
          dense
          solo
          flat
          outlined
          class="mx-2 my-1"
        ></v-select>
      </v-col>
    </v-row>
    <v-card tile flat color="grey lighten-4">
      <v-row>
        <v-col cols="1">
          <v-card-title>
            <v-badge color="green" icon="mdi-check" bottom overlap bordered>
              <v-avatar color="blue lighhten-1">
                <span class="white--text text-h5">J</span>
              </v-avatar>
            </v-badge>
          </v-card-title>
        </v-col>
        <v-col cols="10">
          <v-card-subtitle class="black--text">
            <h3>Jessy Loran <span class="blue--text">on</span></h3>
            <v-rating
              small
              color="orange darken-1"
              length="5"
              dense
              readonly
              size="36"
              :value="5"
              half-increments
            ></v-rating>
            <p class="subtitle-2 font-weight-regular">
              I bought 6 dining chairs from Ashley Homestore. When I decided to
              go with a larger dining room table, I went back to Ashley for 2
              more chairs only to find my chairs had been discontinued! I was
              desperate to find these chairs. By chance, I stumbled upon
              1stopbedroom while doing a google search. I called and immediately
              got someone to help me. He was very pleasant. He informed me there
              were only 2 sets of chairs left, and if I wanted them I'd need to
              act fast and waive my free cancellation within 24 hours. I jumped
              on it and ordered one of the remaining sets with the rep. After I
              ordered with the pleasant man (I wish I remembered his name), I
              started to read reviews for 1stopbedroom and I became very very
              nervous. I found some good reviews, but also some pretty terrible
              ones! My heart sank, and I just resolved to believing it was too
              good to be true and not only would I not get my chairs for several
              months if at all, but I was probably out of about $350. Well, to
              my surprise, my chairs arrived 8 days after I initially called
              1stopbedroom!! They came in perfect condition! (The box was beat
              up but the chairs were perfect). They are the exact match to the 6
              I already had! They were also extremely easy to assemble-just had
              to put the legs on. I was so stunned at how easy of a process it
              was, especially after reading some other peoole's experiences with
              lost packages, waiting for months for their orders, and not being
              able to get customer service on the phone. I don't know if it was
              a fluke, but I had an excellent experience!
            </p>
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedReviewType: 'Recommended',
      items: ['Recommended', 'Oldest', 'Newest'],
    }
  },
}
</script>
