<template>
  <div class="ma-6">
    <div class="text-center black--text">
      <h1 class="pt-10 font-weight-medium">
        You learn a thing or two after 20 years in <br />
        the furniture industry.
      </h1>
      <p class="py-5">
        We've built our business around understanding and delivering what
        customers <br />
        truly want from a furniture retailer. Our focus is on furniture — and
        providing <br />
        superior customer service. That’s it.
      </p>
      <nuxt-link to="our-story" class="indigo--text font-weight-bold">
        Learn more about our story
      </nuxt-link>
      <v-divider class="my-8"></v-divider>
    </div>

    <about-us-img-details :details-obj="details.onestopAdvantage" />

    <aboutus-feature :title-obj="titleObj" />

    <about-us-img-details :details-obj="details.cares" />
    <v-divider class="my-8"></v-divider>

    <about-us-img-details :details-obj="details.career" />
    <v-divider class="my-8"></v-divider>
    <about-us-img-details :details-obj="details.partner" />

    <v-row class="my-10">
      <v-col>
        <nuxt-link to="about-contact-us">
          <v-btn color="blue darken-4" depressed dark class="py-10 px-12">
            Contact Us
          </v-btn>
        </nuxt-link>
      </v-col>
      <v-col>
        <nuxt-link to="welcome-onestop-bedroom">
          <v-btn color="blue darken-4" depressed dark class="py-10 px-12">
            Partner With Us
          </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AboutusFeature from '~/components/AboutusFeature.vue'
import AboutUsImgDetails from '~/components/AboutUsImgDetails.vue'
export default {
  components: { AboutUsImgDetails, AboutusFeature },
  layout: 'knowAbout',
  data() {
    return {
      details: {
        onestopAdvantage: {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/bitmap.png',
          title: `White Glove Delivery. <br />Assembly.<br />Setup.<br />Haul Away.<br />1Stop.`,
          content:
            'Buying furniture is different from other online shopping experiences. It’s big, bulky, heavy, and breakable. When it comes to packing, moving and assembly, it requires extra care and service. That’s why we offer a warehouse to home delivery & assembly service.',
          link: 'the-onestop-advantage',
          linkName: 'The 1Stop advantage',
          order: '0',
        },
        cares: {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/giving-back.png',
          title: 'Giving back the 1Stop way.',
          content:
            "Celebrating and enriching the community is an important part of who we are. Because home furniture and beautification is our specialty, we are effective in bringing hope, happiness, and comfort with our furniture - from fulfilling the bedroom wishes of the brave children at Make-A-Wish Foundation to providing shelter to those in need. It's a commitment to giving back, sharing joy and being there in times of need.",
          link: 'onestop-cares',
          linkName: 'See how 1Stop cares',
          order: '0',
        },
        career: {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/join-team.png',
          title: 'Join the team',
          content:
            'As one of the largest and fastest growing online retailers of quality furniture, we’re hiring smart, passionate people who want to help us revolutionize the way people buy furniture and make their house a home.',
          link: 'careers',
          linkName: "Find a career that's right for you",
          order: '1',
        },
        partner: {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/brand-img.png',
          title: 'Showcase your brand with 1Stop.',
          content:
            'We’ve partnered with some of the biggest names in the industry. Our website uses proprietary software and systems to help connect our customers with your products. We can help you grow and reach a broader audience. See why partnering with 1StopBedrooms is a great move for your furniture business.',
          link: 'partner-with-us',
          linkName: 'Partner with us',
          order: '0',
        },
      },
      titleObj: {
        title: 'Introducing Shop More Save More',
        subTitle: 'How we use technology to save you money.',
      },
    }
  },
}
</script>
<style scoped>
button {
  position: relative;
  overflow: hidden;
  width: 100%;
}
button::after {
  content: '';
  bottom: -1px;
  right: -1px;
  position: absolute;
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/curve_right.png?v7914c020)
    0 0 no-repeat;
  width: 59px;
  height: 70px;
}
</style>
