export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'practice-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '~/modules/ngrok'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/ngrok',
  ],
  auth: {
    strategies: {
      google: {
        clientId:
          '227544088028-valnf5sees2unuh9jpb3cp7dfo511ehm.apps.googleusercontent.com',
        codeChallengeMethod: 'S256', // Required because the default causes google to throw invalid request
        responseType: 'code', // Required because the default 'token' includes rejected nonce arg
        accessType: 'offline', // Required to ensure we get a long lived refresh token
        grantType: 'authorization_code',
        redirectUri: 'http://localhost:3000/',
        user:false,
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'fa',
      useWebmanifestExtension: false,
    },
    meta: {
      title: 'My PWA',
      author: 'Me',
      theme_color:'#ff00ff'
    },
    workbox:{
      // importScripts: ['/sw.js'],
      dev: process.env.NODE_ENV === 'development',
    }
  },
 build:{
 }
}
