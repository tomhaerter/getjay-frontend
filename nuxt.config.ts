import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',

  server: {
    port: 3001,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Jobs around you',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/authentication',
    '~/plugins/axios',
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://nuxt-typed-vuex.danielcroe.com
    'nuxt-typed-vuex',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'portal-vue/nuxt',
    ['@nuxtjs/firebase', {
      config: {
        apiKey: 'AIzaSyA31WO-F5wBlzPJQzeHWe90DKQSdjriBIw',
        authDomain: 'wirvsvirus-eb4f2.firebaseapp.com',
        databaseURL: 'https://wirvsvirus-eb4f2.firebaseio.com',
        projectId: 'wirvsvirus-eb4f2',
        storageBucket: 'wirvsvirus-eb4f2.appspot.com',
        messagingSenderId: '70845195180',
        appId: '1:70845195180:web:a5371fa181e1f1fc719009',
      },
      services: {
        auth: true,
      },
    }],
  ],

  /**
   * Axios module configuration
   * @see https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    prefix: '/api/v1/',
  },

  proxy: {
    '/api/v1/': 'http://localhost:3000',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend () {
    }
  },
}

export default config
