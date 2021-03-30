<template>
  <div>
    <p>-----------------Async Component : import when need-------------------</p>
    <button @click="componentThere = !componentThere">Toggle</button>
    <input ref="name"/>


    <div v-if="componentThere">
      <ComponentOne msg="hii" />
    </div>
    
    <!-- <slot></slot> -->
  </div>
</template>

<script>

export default {
  
  components: { 'ComponentOne': () => import('./ComponentOne') },
  provide: function() {
          return {
            getMap:"from Hello World"
          };
        },
  data() {
    return {
      componentThere: false,
    };
  },

  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>