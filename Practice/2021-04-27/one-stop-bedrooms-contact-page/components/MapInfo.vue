<template>
  <div class="mapInfo">
    <b-img
      src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/map.png"
      fluid
      alt="Responsive image"
      class="myMap"
    ></b-img>
    <div class="sales">
      <h4>Corporate Headquarters</h4>
      <hr />
      <p class="address">
        1716 Coney Island Avenue <br />
        Brooklyn, NY 11230
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.address {
  font-size: 19px;
}
.myMap {
  width: 600px;
  margin-right: 20px;
}

h4 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.mapInfo {
  margin-top: 50px;
  display: flex;
}
</style>
