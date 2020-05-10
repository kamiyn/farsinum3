import { Configuration } from '@nuxt/types'
const environment = process.env.NODE_ENV || 'development'
const baseDir = '/farsinum3'

const config: Configuration = {
  mode: 'spa',
  router: {
    base: baseDir + '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + environment,
    title: 'FarsiNum on nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseDir + '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/vazir-font/font-face.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss']
  }
}

export default config
