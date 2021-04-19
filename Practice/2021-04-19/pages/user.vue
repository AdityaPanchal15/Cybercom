<template>
  <div>
    <h1>I am the parent view</h1>
    <div class="container">
      <h1 class="title">
        my-first-project
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/user/child">Child</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/child2">Child 2</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtChild />
  </div>
</template>

<script>
import Child from './user/child.vue';
export default {
  
};
</script>

<style>
</style>