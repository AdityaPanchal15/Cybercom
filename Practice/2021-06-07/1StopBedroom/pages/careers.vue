<template>
  <div class="ma-6 black--text">
    <h1 class="py-5">Working with us</h1>
    <p>
      Looking to join a dynamic team that’s always striving to improve their
      craft? Then you might be a great fit for 1StopBedrooms. As we expand our
      business and craft the systems and standards that are revolutionizing the
      furniture industry, we need your help in realizing our vision.<br /><br />
      As a values-driven company, we’ve worked hard to make 1StopBedrooms an
      inviting and fulfilling place to work. When you join our team, we’ll work
      with you to grow professionally and personally.
    </p>
    <nuxt-link to="open-positions">View Open Positions</nuxt-link>
    <h1 class="pt-10 pb-3">Why work at 1Stop</h1>
    <v-row class="my-3">
      <v-col v-for="(item, i) in careerFeature" :key="i" cols="6">
        <v-img :src="item.src" width="30%" class="my-4"></v-img>
        <h2>{{ item.title }}</h2>
        <p class="pr-12">
          {{ item.content }}
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>
    <h1 class="py-3">Opportunities to grow</h1>
    <p>
      We look to hire talented and enthusiastic individuals who want to help us
      reinvent the furniture shopping experience.
    </p>
    <procedure :procedure="opportunities" />
    <v-divider class="mt-6"></v-divider>
    <h1 class="py-6">Join the team</h1>
    <p>
      We continuously look for like-minded people to add to our growing
      business. Check out the current opportunities at 1StopBedrooms. We look
      forward to hearing from you.
    </p>
    <nuxt-link to="open-positions">View Open Positions</nuxt-link>
  </div>
</template>

<script>
import Procedure from '~/components/Procedure.vue'
export default {
  components: { Procedure },
  layout: 'knowAbout',
  data() {
    return {
      careerFeature: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/equlity-icon.png',
          title: 'A culture of equality',
          content:
            "You'll be treated with the same respect and equality you deserve, regardless of title or role. We operate under a “people first” philosophy, meaning we want to meet you where you are and offer you the tools and feedback you need to develop.",
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/feedback-icon.png',
          title: 'Real-time feedback',
          content:
            'Our system provides metrics that rewards you for what you already excel in, and helps you to recognize areas for growth. This system encourages you to collaborate with your teammates and find new ways to approach challenges.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/collaborative-team-icon.png',
          title: 'Collaborative team',
          content:
            'There’s no denying the excitement and energy of working with a tight-knit team. While we’re always growing, we’ve found innovative ways to maintain that small-team atmosphere. You’ll have the chance to work alongside the very people that founded 1StopBedroom.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/work-img.png',
          title: 'A fun place to work',
          content:
            'We’ve recently renovated our main office with our employees in mind. With collaborative workspaces, as well as break out areas to help you refresh, we want you to want to come to work. More than just aesthetics, we designed a workplace that reflects our values like communication, exploration, and development.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/edge-icon.png',
          title: 'Stay on the cutting edge',
          content:
            'It’s our mission to constantly innovate and create new products and systems that empower our people, our partners, and, of course, our customers. When you have a career with 1StopBedrooms, you can take pride in knowing that you’re working with the leader in the online furniture industry.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/pay-icon.png',
          title: 'Great pay and benefits',
          content:
            'Great offices and culture are just part of the rewards of working at 1StopBedrooms. We’re proud to offer all our employees great benefits packages and salaries. Only by sharing our success can we help the company and each other grow. We readily offer incentives that celebrate you, not only for your hard work, but for the innovative and collaborative thinking you bring.',
        },
      ],
      opportunities: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/software-icon.png?vb0cc57c5',
          title: 'Software & Tech',
          content:
            '1Stop was founded on cutting edge technology and we’re still building out new and existing products and services.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/business-icon.png?v863329d4',
          title: 'Business & Management',
          content:
            'On the operations side of things, we need your talent to make us the best online furniture retailer we can be.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/customer-icon.png?va9f34bb6',
          title: 'Sales & Customer Support',
          content:
            'Our customers’ experience is our #1 priority. This team ensures our customers are delighted with their shopping experience.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/warehouse-icon.png?v4df5ac42',
          title: 'Warehouse & Delivery',
          content:
            'Your attention to detail and care are invaluable here. Be a part of what makes 1Stop the best furniture marketplace.',
        },
      ],
    }
  },
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
