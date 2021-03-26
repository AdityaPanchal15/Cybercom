<template>
  <div class="hello">
    <h1 class="msg">{{ msg }}</h1>
    <p>{{propE}}</p>
    <p>{{propD}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    propA: {
      validator: function (value) {
        // The value must match one of these strings
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
     propE: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return { message: 'hello' }
      }
    },
    propD: {
      type: Number,
      default: 100
    },
  },
};
</script>