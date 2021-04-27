<template>
  <div class="sidenav">
    <nuxt-link to="/about">About Us</nuxt-link>
    <nuxt-link to="/story">Our Story</nuxt-link>
    <nuxt-link to="/advantage">The 1Stop Advantage</nuxt-link>
    <nuxt-link to="/care">1Stop Cares</nuxt-link>
    <nuxt-link to="/career">Career</nuxt-link>
    <nuxt-link to="/partner">Partner With Us</nuxt-link>
    <nuxt-link to="/contactus">Contact Us</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 300px;
  position: absolute;
  z-index: auto;
  left: 0;
  background-color: rgb(235, 229, 229);
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 10px 8px 10px 16px;
  text-decoration: none;
  font-size: 15px;
  color: black;
  display: block;
}

.sidenav a:hover {
  font-weight: bold;
}
</style>
