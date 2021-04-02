<template>
  <div class="hello" v-if="!loading">
    <h1>{{ msg }}</h1>
    <!-- <p>Replace Object with loading {{replaceMyObj}}</p> -->

    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <!-- Commit with Payload -->
    <button @click="incrementByTen(10)">Increment by 10</button>

    <!-- Object-Style Commit -->
    <button @click="incrementByTwenty(myIncrementData)">Increment by 20</button>

    <p>count:{{ count }}</p>

    <p>todo:{{ doneTodos }}</p>

    <p>getTodoById:{{ getTodoById(2) }}</p>

    <!-- object spread syntax -->
    <button @click="replaceObj">Replace Obj</button>
    <p>obj:{{ obj }}</p>
  </div>
  <div v-else>
    <h1>Loading.....</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
// import store from "../store/store";
export default {
  created() {
    this.$store.dispatch("actionA").then(() => {
      this.loading = false;
    });
  },
  data() {
    return {
      myIncrementData: { type: "incrementByTwenty", n: 20 },
      loading: true,
    };
  },
  computed: {
    ...mapState(["count", "obj"]),
    ...mapGetters(["doneTodos", "getTodoById"]),
    getTodo() {
      return this.$store.getters.getTodoById(2);
    },
  },

  methods: {
    // change(mode) {
    //   this.$store.commit(mode);          //commit for mutations method
    // },
    ...mapMutations([
      //  "increment",
      "decrement",
      "incrementByTen",
      "incrementByTwenty",
      "replaceObj",
    ]),

    increment() {
      this.$store.dispatch("incrementAsync"); //dispatch for actions method
    },

    // changeWithArgs(){
    //   store.commit('incrementByTen',10)
    // },
    // changeWithObjectArgs(data){
    //   store.commit(data);
    // }
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
