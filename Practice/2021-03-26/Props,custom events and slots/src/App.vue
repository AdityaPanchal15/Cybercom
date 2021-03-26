<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world
      msg="Welcome to Your Vue.js App"
      propA="success"
      :propE="obj"
    />
    <base-input
      label="Username:"
      v-model="username"
      @focus.native="onFocus"
      required
      placeholder="Enter your username"
      @input="handleInput"
    ></base-input>

    <base-checkbox v-model="lovingVue"></base-checkbox>

    <br /><br />
    <p>...................Sync Modifiers...................</p>
    <text-document :title.sync="obj.message"></text-document>

    <br /><br />
    <p>...................Fallback(default) Content....................</p>
    <navigation-link url="/profile">Your Profile</navigation-link>

    <br /><br />
    <p>...................Named Slots....................</p>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <br />

    <p>
      .................Scope Slot and Renaming user to
      person....................
    </p>
    <current-user>
      <template v-slot="{ user: person }">
        First Name : {{ person.firstName }}
      </template>
    </current-user>

    <br />
    <p>
      --------------------------------------Named Slots
      Shorthand-----------------------------------------
    </p>
    <base-layout>
      <template #header>
        <h1>
          Here might be a page title(uses #header instead of v-slot:header)
        </h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info(uses #footer instead of v-slot:footer)</p>
      </template>
    </base-layout>

    <br />
  </div>
</template>

<script>
import BaseCheckbox from "./components/BaseCheckbox.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseLayout from "./components/BaseLayout.vue";
import CurrentUser from "./components/CurrentUser.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavigationLink from "./components/NavigationLink.vue";
import TextDocument from "./components/TextDocument.vue";

export default {
  methods: {
    handleInput(e) {
      console.log(e);
    },
  },
  data() {
    return {
      obj: { message: "Sync modifier" },
      username: "",
      lovingVue: true,
    };
  },
  name: "App",
  components: {
    HelloWorld,
    BaseInput,
    BaseCheckbox,
    TextDocument,
    NavigationLink,
    BaseLayout,
    CurrentUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
