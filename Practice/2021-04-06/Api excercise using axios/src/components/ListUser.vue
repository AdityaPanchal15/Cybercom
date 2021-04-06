<template>
  <div>
    <h1>User List</h1>
    <table>
      <tr v-for="user in list" :key="user.id">
        <td><img :src="user.avatar" /></td>
        <td>
          {{ user.email }}<br />{{ user.first_name }} {{ user.last_name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
      list: null,
    };
  },
  created() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        return res;
      })
      .then((res) => {
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
td {
  padding: 10px;
}
</style>