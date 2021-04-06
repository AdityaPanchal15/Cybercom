<template>
  <div>
    <h1>Axios api call</h1>
    <input v-model="user.title" name="title" type="text" />
    <button @click="add()">Add</button>
    <table>
      <tr v-for="user in postData" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.userId }}</td>
        <td>{{ user.title }}</td>
        <td>
          <button @click="update(user)">Update</button>
        </td>
        <td><button @click="delet(user.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    add() {
      if (this.updateUser === null) {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            userId: 1,
            title: this.user.title,
          })
          .then((res) => {
            this.postData.splice(0, 0, res.data);
          })
          .catch((err) => {
            alert("error:", err.message);
          });
      } else {
        this.updateUser.title = this.user.title;
        axios
          .put(
            "https://jsonplaceholder.typicode.com/posts/" + this.updateUser.id,
            { title: this.updateUser.title }
          )
          .then(() => {
            this.postData.splice(
              this.postData.indexOf(
                this.postData.find((id1) => id1.id === this.updateUser.id)
              ),
              1,
              this.updateUser
            );

            this.updateUser = null;
          })
          .catch((err) => {
            alert("error:", err.message);
          });
      }
      this.user.title = null;
    },
    delet(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(() => {
          this.postData.splice(
            this.postData.indexOf(this.postData.find((id1) => id1.id === id)),
            1
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update(user) {
      this.updateUser = user;
      this.user.title = user.title;
    },
  },
  data() {
    return {
      postData: null,
      user: { title: null },
      updateUser: null,
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.postData = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>