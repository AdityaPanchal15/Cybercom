<template>
<div>
  <h1>Id: {{this.$route.params.id}}</h1>
  <h1>Query: {{this.$route.query.message}} {{this.$route.query.message1}}</h1>
  <p>{{post}}</p>
  </div>
</template>

<script>
export default {
async asyncData({params,$http,error}) {
    const id = params.id
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await $http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (e) {
      error(e) // Show the nuxt error page with the thrown error
    }
  },
  
}
</script>

<style>

</style>