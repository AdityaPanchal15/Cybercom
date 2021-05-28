<template>
  <div>
    <p>{{ $apolloHelpers.getToken() }}</p>
    <form v-if="!$apolloHelpers.getToken()" @submit.prevent="login()">
      <label for="email">Email</label>
      <input
        v-model.lazy="email"
        type="text"
        name="email"
        class="border-2 border-red-500"
      />
      <label for="password">password</label>
      <input
        v-model.lazy="password"
        type="text"
        name="password"
        class="border-2 border-red-500"
      />
      <input type="submit" name="Login" value="Login" />
    </form>
    <button v-if="$apolloHelpers.getToken()" type="submit" @click="logout()">
      Logout
    </button>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
export default {
  data() {
    return {
      email: '',
      password: '',
      token: '',
      posts: {},
    }
  },
  watch: {
    token(newValue) {
      if (newValue !== null) {
        this.allPost()
      }
      return null
    },
  },
  methods: {
    async login(event) {
      const res = await this.$axios.post('http://localhost:4000/', {
        query: `
            query ($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
              }
            }
          `,
        variables: {
          email: this.email,
          password: this.password,
        },
      })
      if (res.data.data != null) {
        this.token = res.data.data.login.token
        this.$apolloHelpers.onLogin(this.token)
      } else {
        alert(res.data.errors[0].message)
      }
    },
    logout() {
      this.token = null
      this.$apolloHelpers.onLogout()
    },
    allPost() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      this.$axios
        .post(
          'http://localhost:4000/',
          {
            query: `
                query{
                    allPost{
                        author
                    }
                }
            `,
          },
          { headers: { token: this.$apolloHelpers.getToken() } }
        )
        .then((res) => {
          this.posts = res.data.data.allPost
          //   console.log(res)
        })
      //   return this.posts
    },
  },
}
</script>
