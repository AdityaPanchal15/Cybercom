<template>
  <div>
    <h1>I am the parent view</h1>
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
export default {};
</script>

<style>
</style>