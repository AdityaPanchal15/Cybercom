<template>
  <div>
    <nav>
      <div class="container-fluid">
        <div class="navbar-header logo">
          <router-link class="navbar-brand" to="/"> Lindauer</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="#">KITCHEN</router-link></li>
          <li><router-link to="#">SPACE & FURNITURE</router-link></li>
          <li><router-link to="#">SOLID WOOD</router-link></li>
          <li><router-link to="#">ABOUT US</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: brown;
  margin: 10px;
  font-weight: bold;
}
nav {
  margin: 0px;
}
</style>