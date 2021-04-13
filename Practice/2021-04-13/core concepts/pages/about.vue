<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'test',
  asyncData() {
    return { title: 'About' }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My amazing About Page',
        },
      ],
      script: [
        {
          src: 'about.js',
        },
      ],
    }
  },
}
</script>
