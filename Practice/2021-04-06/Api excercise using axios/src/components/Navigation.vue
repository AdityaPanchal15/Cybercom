<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Imgur Clone</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="postGetRequest"
              >Details</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="listUser"
              >User List</router-link
            >
          </li>
        </ul>
        <span class="navbar-text">@Elliot_F</span>
      </div>
    </nav>
    <br />
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>