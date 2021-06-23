<template>
  <div class="ma-9 black--text">
    <h1>A partnership you can feel good about</h1>
    <p class="py-5">
      1StopBedrooms will help you grow your business by building brand awareness
      and selling more furniture, faster. With our proprietary technology, we
      connect our customers with your products and manage all of the customer
      service involved.
    </p>
    <nuxt-link to="welcome-onestop-bedroom">Contact Our Parner Team</nuxt-link>
    <h1 class="pt-8 pb-5">Let your brand stand out</h1>
    <p>
      Each brand partner on 1StopBedrooms has a custom brand page featuring your
      logo and company story. We build out collection pages for all of your
      products to highlight your biggest sellers or new pieces — so your
      products are prominently displayed & promoted. <br /><br />
      Your custom 1StopBedrooms link allows for our customers to bookmark you as
      a favorite. Our software keeps up-to-date inventory information and reacts
      in near-real-time to price changes. Anytime you roll out a new line or
      collection, we get that up on our site too.<br /><br />
      We enhance your brand awareness by promoting your furniture to our 1
      Million+ customers and social media followers.
    </p>
    <v-img
      src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/about-brand.png"
    ></v-img>
    <h1 class="pt-6 pb-5">Partnership built on trust</h1>
    <p>
      We’ve built our technology from the ground up so you and your customers
      have the best experience possible. Our detailed and thorough product
      descriptions help customers make the right purchasing decisions. We follow
      up on every purchase with a phone call with the customer to help mitigate
      any issues. We also field questions about claims and other services.
      Finally, we provide our White Glove Delivery that ensures your products
      arrive at your customer's home with quality service.
    </p>
    <h1 class="pt-6 pb-5">Start your partnership with 1StopBedrooms today</h1>
    <p>
      We look forward to partnering with your furniture brand to help you grow
      and reach a broader audience.
    </p>
    <nuxt-link to="welcome-onestop-bedroom">Contact Our Parner Team</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'knowAbout',
}
</script>
<style scoped>
a {
  background: #f25d0d;
  border-radius: 24px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  padding: 11px 40px;
  margin-top: 10px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
  display: inline-block;
}
a::after {
  position: absolute;
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
