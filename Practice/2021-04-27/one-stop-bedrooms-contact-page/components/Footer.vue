<template>
  <div class="footer">
    <!-- Footer -->
    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <b-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
            alt="logo"
          />
        </b-col>
        <b-col sm="3">
          <ul>
            <li class="list-unstyled">About Us</li>
            <li class="list-unstyled">Our Story</li>
            <li class="list-unstyled">1Stop Advantage</li>
            <li class="list-unstyled">1Stop Cares</li>
          </ul>
        </b-col>
        <b-col sm="4">
          <ul>
            <li class="list-unstyled">Careers</li>
            <li class="list-unstyled">Partner With Us</li>
            <li class="list-unstyled">Contact Us</li>
          </ul>
        </b-col>
        <b-col sm="0">
          <a href="#"
            ><span style="color: black; font-weight: bold; font-size: 15px"
              >Shop 1StopBedrooms.com</span
            >&nbsp;<b-img
              src="data:image/png;base64,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"
              width="24px"
            ></b-img
          ></a>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms Of Use</a>
        <span style="color: rgb(129, 126, 126)"
          >&copy;Copyright 2021 1StopBedrooms Inc.</span
        >
      </b-container>
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(129, 126, 126);
}
a:hover {
  color: black;
  font-weight: bold;
}
.footer {
  background-color: rgb(209, 208, 208);
  height: 340px;
  padding-top: 60px;
}
</style>
