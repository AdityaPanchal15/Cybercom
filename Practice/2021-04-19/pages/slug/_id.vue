<template>
<div>
  <h1>Id: {{this.$route.params.id}}</h1>
  <h1>Query: {{this.$route.query.message}} {{this.$route.query.message1}}</h1>
  <p>{{post}}</p>
  <p>{{doc}}</p>
  <!-- <nuxt-content :document="doc" /> -->
  </div>
</template>

<script>
export default {

async asyncData({params,$http,error,$content}) {
    // const id = params.id
    // try {
    //   // Using the nuxtjs/http module here exposed via context.app
    //   const post = await $http.$get(
    //     `https://api.nuxtjs.dev/posts/${id}`
    //   )
    //   return { post }
    // } catch (e) {
    //   error(e) // Show the nuxt error page with the thrown error
    // }
    const doc= await $content('home').fetch()
    return {doc}
  },
  
}
</script>

<style>

</style>