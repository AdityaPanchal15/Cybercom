<template>
  <div>
    <h2 class="text-capitalize pb-5">{{ $route.params.product }}</h2>
    <h3>Shop by Category</h3>
    <div v-for="(link, i) in productLinks" :key="i" class="pt-1">
      <nuxt-link
        class="font-weight-light black--text body-2 text-decoration-none"
        :to="$route.params.product + '/' + link.link"
        >{{ link.linkTitle }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productLinks: { type: Array, default: null },
  },
}
</script>
