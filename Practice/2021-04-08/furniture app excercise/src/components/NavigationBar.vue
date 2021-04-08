<template>
  <div>
    <nav>
      <div class="container-fluid">
        <div class="navbar-header logo">
          <router-link class="navbar-brand" to="/" title="Go To Home"> Lindauer</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">KÜCHE<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link :to="{ name: 'kitchen', params: { type:'pureline' }}">PURELINE</router-link></li>
              <li><router-link :to="{ name: 'kitchen', params: { type:'greenline' }}">GREENLINE</router-link></li>
              <li><router-link :to="{ name: 'kitchen', params: { type:'classicline' }}">CLASSICLINE</router-link></li>
              <li><router-link to="#">BILDER</router-link></li>
            </ul>
          </li>
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">RAUM & MÖBEL<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="#">TABLES</router-link></li>
              <li><router-link to="#">CHAIRS</router-link></li>
              <li><router-link to="#">BEDS</router-link></li>
              <li><router-link to="#">BATH</router-link></li>
              <li><router-link to="#">FLOOR COVERINGS</router-link></li>
            </ul>
          </li>
          <li><router-link to="#">VOLLHOLZ</router-link></li>
          <li><router-link to="#">ÜBER UNS</router-link></li>
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
  color: rgb(58, 46, 46);
  margin: 10px 0;
  font-weight: bold;
}
nav {
  margin: 0px;
}
</style>