<template>
  <p class="pa-4">
    {{ logout() }}
    You will be sign out in 5 seconds and redirect to home page
  </p>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$cookies.remove('userName')
      this.$cookies.remove('email')
      this.$cookies.remove('uid')
      this.$store.commit('auth/setLoggedIn', {
        loggedIn: false,
        displayName: null,
        email: null,
      })
      this.$router.push('/')
    },
  },
}
</script>
