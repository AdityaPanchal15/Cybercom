<template>
  <div>
    <h1>{{ slug.blog }}</h1>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.blog) // validate only number allow in dynamic route params
  },
  data() {
    return {
      slug: this.$route.params,
    }
  },
}
</script>
