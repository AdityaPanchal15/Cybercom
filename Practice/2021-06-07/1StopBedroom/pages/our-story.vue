<template>
  <div class="ma-6">
    <h1 class="py-4">Furniture is different. So is 1Stop.</h1>
    <p class="black--text">
      Can the perfect online furniture experience exist? As veterans of the
      furniture industry for more than 20 years, it is a question that we
      continually ask ourselves. We know there is a better way to buy and sell
      furniture online that could be more enjoyable for customers and
      manufacturers alike. <br /><br />
      We identified the areas with the greatest opportunities to rethink the old
      furniture shopping and selling experience — inflated shipping costs,
      antiquated processes, and more — and set out to innovate and bring
      measurable change to the industry.
    </p>
    <div class="pa-5 my-12 blue lighten-5">
      <div class="inner-block">
        <p class="title font-weight-bold mt-8 text-center indigo--text">
          We focus on furniture <br />
          <span class="font-weight-regular">and providing the</span> best
          furniture-shopping <br />
          experience <span class="font-weight-regular"> possible.</span>
        </p>
      </div>
    </div>
    <p>
      More than just the buying and selling of a commodity, the furniture
      industry is service-based. From the personal interactions to the final
      delivery and assembly of each piece, we know people value high-quality
      service as much as high-quality furniture. To create a truly compelling
      online experience, we made it our mission to offer unrivaled customer
      service. <br /><br />
      Fast forward to today and with a growing team, we still strive to maintain
      a small business vibe and the same clear vision: to provide the best
      furniture shopping experience and the technology platforms to support it.
    </p>
    <v-row>
      <v-col>
        <h1 class="py-6">Our team</h1>
        <nuxt-link to="open-positions">View Open Positions</nuxt-link>
      </v-col>
      <v-col>
        <v-img
          src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/team-img.png"
          width="500px"
          height="300px"
        ></v-img>
      </v-col>
    </v-row>
    <p class="py-6">
      From tracking shipments, to claims and returns, our experienced in-house
      team of software developers and furniture specialists have created a
      platform that empowers our customers and manufactuers alike at every step
      of the furniture buying process.<br /><br />We’re always looking for great
      people with a passion for delivering superior customer service and
      innovative online experiences.
    </p>
  </div>
</template>

<script>
export default {
  layout: 'knowAbout',
}
</script>
<style scoped>
.inner-block::before {
  position: absolute;
  top: 260px;
  left: 50%;
  margin-left: -36px;
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/sofa-img.png?va4d5e1e9)
    0 0 no-repeat;
  width: 72px;
  height: 72px;
  content: '';
  background-size: 72px 72px;
}
a {
  background: #f25d0d;
  border-radius: 24px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  padding: 11px 40px;
  font-weight: 500;
  overflow: hidden;
}
a::after {
  top: 0;
  right: 0;
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/curve-orange.png?v9f879f81)
    0 0 no-repeat;
  width: 28px;
  height: 48px;
  content: '';
  background-size: 28px 48px;
}
</style>
