import Butter from 'buttercms'
require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }]
  },
  loading: { color: '#fff' },
  css: ['~/scss/main.scss'],
  plugins: ['~/plugins/buttercms.js'],
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    BUTTER_CMS_TOKEN: process.env.BUTTER_CMS_TOKEN
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', { id: process.env.GA_TRACKING_ID }]
  ],
  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv', // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources'
  ],
  generate: {
    async routes() {
      const butter = Butter(process.env.BUTTER_CMS_TOKEN)
      const ideas = await butter.post.list()
      return ideas.data.data.map((id) => `/idee/${id.slug}`)
    }
  },
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
