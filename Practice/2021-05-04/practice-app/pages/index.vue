<template>
  <div class="container">
    <p>{{$auth.$state}}</p>
    <button @click="loginWithGoogle">Login</button>
     <p>
        URL from ngrok: <a :href="this.$config.ngrok.url">{{ this.$config.ngrok.url }}</a>
      </p>
      <button @click="$router.push({path: '/', query: {foo: foo + 1}})">Bump foo</button>
  </div>
</template>

<script>
export default {
  watchQuery: ["foo"],
  data() {
    return {
      foo: 1
    };
  },
  asyncData({ query }) {
    if (query.foo) {
      return { foo: parseInt(query.foo, 10) };
    }

    return {};
  },

  created () {
    console.log(this.$auth.loggedIn)
  },
  methods: {
    loginWithGoogle(){
      this.$auth.loginWith('google', { params: { prompt: "select_account" } })
    }
  },
  
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
