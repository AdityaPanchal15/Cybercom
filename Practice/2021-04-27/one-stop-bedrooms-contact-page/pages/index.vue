<template>
  <div>
    <Header />
    <sidebar />

    <div class="main">
      <p class="heading">CONTACT US</p>
      <contact-info />
      <map-info />
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact Us',
  },
}
</script>
<style scoped>
.main {
  padding-left: 330px;
}

.heading {
  font-size: 55px;
  font-weight: bold;
  padding-bottom: 40px;
  color: darkblue;
}
</style>
