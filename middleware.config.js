module.exports = {
    integrations: {
      sb: {
        location: '@vue-storefront/storyblok/server',
        configuration: {
          token: 'CONTENT_DELIVERY_TOKEN',
          cacheProvider: 'memory',
        },
      },
      // other configs
    },
  }