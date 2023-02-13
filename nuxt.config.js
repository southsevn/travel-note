require('dotenv').config();

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Travel&Note - ' + process.env.npm_package_description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#8fca75', height: '3px' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  styleResources: {
    sass: [
      '@/assets/sass/helpers/_variables.sass'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-semantic-ui.js', ssr: true },
    { src: '~/plugins/nuxt-country-select.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    'semantic-ui-vue/nuxt',
    'nuxt-leaflet'
  ],

  telemetry: false,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://sandbox-test.billups.com//api',
    // CHANGE EVERY TIME ON BUILD
    browserBaseURL: 'https://sandbox-test.billups.com/api',
    proxy: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  auth: {
    localStorage: false,
    cookie: {
      options: {
        expires: 1
      }
    },
    strategies: {
      local: {
        token: {
          property: 'accessToken'
        },
        endpoints: {
          login: { url: '/signin', method: 'post', propertyName: 'accessToken' },
          logout: false,
          user: false
        },
        redirect: {
          login: '/signin',
          logout: '/login',
          home: '/'
        }
      }
    },
    tokenRequired: true,
    tokenType: 'bearer',
    tokenName: 'Authorization',
    globalToken: true,
    autoFetchUser: false
  },

  serverMiddleware: [
    { path: '/server', handler: '~/server/index.js' }
  ],

  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
};
