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
      this.$store.commit('auth/setLoggedIn', false)
      this.$router.push('/')
    },
  },
}
</script>
