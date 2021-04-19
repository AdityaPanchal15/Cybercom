<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <input type="button" @click="remove(todo)" value="remove" />
      </li>
      <li>
        <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
      </li>
    </ul>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="(mountain, index) of mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    //  fetchOnServer: false,
  data() {
    return {
      mountains: [],
    };
  },
  activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
  async fetch() {
    this.mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then((res) => res.json());
    // console.log("called");
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle",
      remove: "todos/remove",
    }),
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>