<template>
  <div id="app">
     <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  <router-view></router-view>

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

    <!-- Render instead of template -->
    <p>----------------Render instead of template---------------</p>
    <anchored-heading :level="1">Hello world!</anchored-heading>

    <!-- v-if and v-for in render -->
    <p>---------------Implement v-if and v-for in render---------</p>
    <item-render/>

    <!-- implement v-model in render for input -->
    <p>-----------------implement v-model in render for input-------------</p>
    <input-render v-model="searchedText"></input-render>

    <!-- implement slot in render -->
    <p>---------------------implement slot in render----------------------</p>
    <slot-render #default="{text}">{{text}}</slot-render>

    
  <!-- jsx with vuejs -->
  <p>-------------------jsx with vuejs------------------------</p>
  <jsx-vue/>

  <!-- filter -->
  <p>-----------------------Filter----------------------</p>
  <filter-message message="message filter"/>
  </div>
</template>

<script>
import AnchoredHeading from './components/AnchoredHeading.vue';
import AnimatedInteger from "./components/AnimatedInteger.vue";
import CustomDirective from './components/CustomDirective.vue';
import FilterMessage from './components/FilterMessage.vue';
import HelloWorld from "./components/HelloWorld.vue";
import InputRender from './components/InputRender.vue';
import ItemRender from './components/ItemRender.vue';
import JsxVue from './components/JsxVue.vue';
import SlotRender from './components/SlotRender.vue';
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
      searchedText:'',
    };
  },

  name: "App",
  components: {
    HelloWorld,
    TreeFolderContent,
    TransitionDemo,
    AnimatedInteger,
    CustomDirective,
    AnchoredHeading,
    ItemRender,
    InputRender,
    SlotRender,
    JsxVue,
    FilterMessage,

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
