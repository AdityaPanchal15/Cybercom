<template>
  <div>
    <ul>
      <li v-for="child in children" :key="child.name">
        <tree-folder v-if="child.children" :folder="child" />
        <span v-else>{{ child.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    children: Array,
  },
};
</script>

<style>
</style>