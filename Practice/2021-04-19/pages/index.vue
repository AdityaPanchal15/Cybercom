<template>
  <div class="container">
    <div>
      <h1 class="title">
        my-first-project
      </h1>
    </div>
    <!-- <div>{{doc}}</div> -->
    <!-- <nuxt-content :document="doc" /> -->
  </div>
</template>

<script>
export default {
  // async asyncData({$content}){
  //   const doc = await $content('index').fetch()
  //   return {doc}
  // },
  transition: {
    name: "home",
    mode: "out-in",
    css: false,
    beforeLeave(el) {
      alert("before leave");
    }
  },
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
