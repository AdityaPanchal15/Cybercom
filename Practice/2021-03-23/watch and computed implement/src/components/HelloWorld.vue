<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- computed setter -->
    <h2>{{fullName="Joe Doe"}}</h2>
    <p>{{firstName}}</p>
    <p>{{lastName}}</p>

    <!-- watch example -->
     <p>My name is {{name}}</p>
    <button type="submit" class="btn btn__primary btn__lg" @click="changeName()">Change my name!</button>

  </div>
</template>

<script>
export default {
  methods: {
    changeName: function() {
      this.name = 'Flavius'
    }
  },
 
  data () {
    return {
      firstName:'',
      lastName:'',
      name: 'Flavio'
    }
  },
  
  props: {
    msg: String
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  watch: {
    name (newValue, oldValue) { 
      console.log(newValue,oldValue); 
    },
    // name: function () { 
    //   console.log(this.name);
    // }
  }
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
