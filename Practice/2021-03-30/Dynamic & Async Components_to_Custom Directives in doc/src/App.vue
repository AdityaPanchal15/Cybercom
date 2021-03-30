<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world />

    <!-- Circular References Between Components -->
    <p>--------------Circular References Between Components------------------</p>
    <p>
      <span>{{ folder.name }}</span>
      <tree-folder-content :children="folder.children" />
    </p>

    <!-- Transition with animate.css and Mixin property -->
    <transition-demo />

    <!-- State Transition -->
    <p>---------------------State Transition------------------------</p>

    <div>
      <input v-model.number="firstNumber" type="number" step="20" /> +
      <input v-model.number="secondNumber" type="number" step="20" /> =
      {{ result }}
      <p>
        <animated-integer v-bind:value="firstNumber"></animated-integer> +
        <animated-integer v-bind:value="secondNumber"></animated-integer> =
        <animated-integer v-bind:value="result"></animated-integer>
      </p>
    </div>

    <!-- Custom Deractives -->
    <p>-----------------Custom Directives----------------------</p>
    <custom-directive/>
  </div>
</template>

<script>
import AnimatedInteger from "./components/AnimatedInteger.vue";
import CustomDirective from './components/CustomDirective.vue';
import HelloWorld from "./components/HelloWorld.vue";
import TransitionDemo from "./components/TransitionDemo.vue";
import TreeFolderContent from "./components/TreeFolderContent.vue";

export default {
  computed: {
    result: function () {
      return this.firstNumber + this.secondNumber;
    },
  },
  data() {
    return {
      folder: {
        name: "Folder1",
        children: [{ name: "name1" }, { name: "name2" }, { name: "name3" }],
      },
      firstNumber: 20,
      secondNumber: 40,
    };
  },

  name: "App",
  components: {
    HelloWorld,
    TreeFolderContent,
    TransitionDemo,
    AnimatedInteger,
    CustomDirective,

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
