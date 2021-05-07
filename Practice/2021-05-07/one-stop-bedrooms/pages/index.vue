<template>
  <div>
    <slider />
    <small-image-slider />
    <v-parallax
      height="300"
      src="https://images.squarespace-cdn.com/content/v1/57a22ac2725e25ef93995043/1604520211391-48RIT2D6EK3H7C6AFNJO/ke17ZwdGBToddI8pDm48kH8aHkiOVM8fVkmdNtpFBjAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diSYwpiNCPcjo1wxtRXObL5D83JVbpqpd3ys7_Nc7hjkJvwGh1qtNWvMhYKnvaKhbA/Home+Page+SLide+Banner+5.jpg"
    >
      <feature-component />
    </v-parallax>
  </div>
</template>

<script>
import FeatureComponent from '~/components/FeatureComponent.vue'
// import Slider from '~/components/Slider.vue'
import SmallImageSlider from '~/components/SmallImageSlider.vue'
export default {
  components: { SmallImageSlider, FeatureComponent },
}
</script>
