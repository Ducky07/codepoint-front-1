const {i18n} = require('./next-i18next.config')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa:{
    dest: 'public',
    runtimeCaching,

  },
  images: {domains: ['avatars.githubusercontent.com']},
  reactStrictMode: true,
  i18n,
})
