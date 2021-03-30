<template>
  <div>
    <div v-once>
      <p>-----------------v-once for render static elements only once---------------------------</p>
      <h4>ComponentOne</h4>
    </div>

    <div>
      <p>---------------Data from Parent using $parent-----------------</p>
      <button @click="details">Parent</button>

      <p>
        ---------------------------Dependency Injection-----------------------
      </p>
      <p>{{ getMap }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["getMap"],
  methods: {
    details() {
      console.log(this.$parent.$data.componentThere);
    },
  },
};
</script>
