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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },
  loading: { color: '#fff' },
  css: ['~/css/main.css'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv' // Doc: https://github.com/nuxt-community/dotenv-module
  ],
  axios: {},
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
