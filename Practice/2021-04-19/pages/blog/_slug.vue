<template>
  <article>
    <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->
    <!-- <h1>{{ article.toc }}</h1>
    <p>{{ article.description }}</p> -->
    <!-- <img :src="article.img" :alt="article.alt" /> -->
    <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> --> 
    <!-- <li v-for="(link,index) of article" :key="index">{{link}}</li> -->
    <!-- <pre>{{article}}</pre> -->
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug)
    //  .only(['name'])
     .fetch();

    return { article };
  }
};
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
