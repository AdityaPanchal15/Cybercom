<template>
  <div>
    <p>{{ title }}</p>
    <input v-model="newTitle" />
    <button @click="onSubmit()">Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
      onSubmit() {
      this.$emit("update:title", this.newTitle);
    },
  },
  data () {
    return {
        newTitle:''
    }
  },
  props: {
    title: String,
  },
 
};
</script>
