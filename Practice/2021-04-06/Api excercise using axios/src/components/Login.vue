<template>
  <div>
    <div v-if="loginStatus">
      <p>Test: <br> username:eve.holt@reqres.in <br> password:cityslicka</p>
      <form @submit.prevent="login">
        <input v-model="user.email" placeholder="username" />
        <input v-model="user.password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
    <div v-else>
      <h1>Welcome</h1>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    login() {
      axios
        .post("https://reqres.in/api/login", Object.assign({}, this.user))
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          this.$router.push("listUser");
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            alert(error.response.data.error);
          }
        });
    },
    logout() {
      localStorage.removeItem("token");
      this.loginStatus = true;
    },
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loginStatus: false,
    };
  },
};
</script>
