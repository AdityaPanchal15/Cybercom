<template>
  <div class="user">
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices',
        }"
        >Invoices</router-link
      >
    </p>
    <button @click="logOut" class="btn">Logout</button>
  </div>
</template>
<script>
import store from "../store";
export default {
  beforeRouteEnter(to, from, next) {
    next();
    alert("Welcome to the user page!");
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  data() {
    return {
      user: store.user,
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.user {
  padding: 40px 0;
}
</style>