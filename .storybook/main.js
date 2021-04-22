const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // extend config here

    return config
  },

  stories: ['~/stories/**/*.stories.@(ts|js|mdx)'],

  addons: [
    // Add your addons here
  ],
})
