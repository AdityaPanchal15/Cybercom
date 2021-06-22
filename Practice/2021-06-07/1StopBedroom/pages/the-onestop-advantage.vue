<template>
  <div class="ma-6 black--text">
    <h1>A better furniture buying experience</h1>
    <p>
      At 1StopBedrooms, we focus on furniture, and only furniture. We provide a
      concierge-like service. Our staff consists of only furniture professionals
      and specialists, and we provide a level of customer service that is second
      to none.
    </p>
    <div class="pa-5 my-12 blue lighten-5">
      <div class="inner-block">
        <p class="title font-weight-bold mt-8 text-center indigo--text">
          <span class="font-weight-regular">Our</span> proprietary technology
          <br />
          makes the difference
          <span class="font-weight-regular">
            in your <br />shopping experience.
          </span>
        </p>
      </div>
    </div>
    <p>
      We think your online furniture buying experience should be efficient,
      simple, and enjoyable. That’s why we’ve built custom systems &
      technologies that allow us to offer just that. When you shop with us, you
      get competitive pricing, predictive tracking and superior customer service
      — all built into an intuitive and streamlined site.
    </p>
    <h1 class="py-3">Shop More Save More</h1>
    <p>
      Here's an industry secret: when it comes to online shopping: the “Free
      Shipping” we all know and love isn’t free. It typically means the merchant
      has built the price of shipping into the price of the item itself. We
      don’t think that’s fair to you.<br /><br />
      Our mission is to provide our customers with the best possible value and
      full transparency, so when you buy more, we recalculate shipping costs—and
      you save more. This is one of our most innovative systems, built with one
      goal: saving you money.
    </p>
    <aboutus-feature />
    <h1 class="my-4">White Glove Delivery</h1>
    <p>
      Furniture can’t be shipped and handled like anything else on the market
      because of size, weight, fragility, packaging needs, and assembly.
    </p>
    <div class="grey lighten-4 px-12 py-8">
      <h2>Here’s how it works:</h2>
      <procedure :procedure="deliveryProcedure" />
    </div>
  </div>
</template>

<script>
import AboutusFeature from '~/components/AboutusFeature.vue'
export default {
  components: { AboutusFeature },
  layout: 'knowAbout',
  data() {
    return {
      deliveryProcedure: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/packing-icon.png?v93befa42',
          title: 'Packaging',
          content:
            'First, the furniture is expertly packaged. It is inspected by a furniture specialist, hand-wrapped, reinforced by a protective safety cage and covered with final external packaging reinforcements.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/loading-icon.png?v2a3544bd',
          title: 'Loading',
          content:
            'Next, the furniture is loaded onto the truck, harnessed, and secured by our trained experts. These extra safety efforts are done to ensure that the furniture is secure and won’t shift during transport.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/delivery-icon.png?v40e17eb1',
          title: 'Delivery',
          content:
            'The furniture then leaves our warehouse and heads to our White Glove Delivery Terminal in your area. After we unwrap, inspect, and re-wrap your furniture at the White Glove Delivery Terminal, we will contact you to arrange a delivery time that works with your schedule.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/assembly-icon.png?va16a9912',
          title: 'Assembly',
          content:
            'Finally, when our White Glove delivery team arrives at your home, they will place and assemble your new furniture in the room of your choice. They will also do a final inspection and clean-up of the packing materials.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.inner-block::before {
  position: absolute;
  top: 140px;
  left: 50%;
  margin-left: -36px;
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/sofa-img.png?va4d5e1e9)
    0 0 no-repeat;
  width: 72px;
  height: 72px;
  content: '';
  background-size: 72px 72px;
}
</style>
