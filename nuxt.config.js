export default {
  ssr: false,
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'storyblok-nuxt-0',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
  ],

  /* env: {
    storeUrl: 'https://storyblok-partner-demo-store.mybigcommerce.com/',
    storeToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sImVhdCI6MTcwMzI2ODQ1NiwiaWF0IjoxNjM0OTA4ODQwLCJpc3MiOiJCQyIsInNpZCI6MTAwMTM4NjY2Mywic3ViIjoiaGE0MWI4bWg0eXFucDR6Zzc0MjVrOGNqNWgxZXhkMiIsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxfQ.yRRc_CrQKCc1hIiHwVGMiUtyP9-RUeGhj38e6ubsEboPB8LXSJrP3nPK2qX-dbHhm5jWUvu12sfCd4VVHB-QdA'
  }, */

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: 'GlBndxRSmbN80CH09ZnaiQtt',
        cacheProvider: 'memory'
      },
    ],
    [
      '@vue-storefront/storyblok/nuxt',
      {
        "jsBridge": "https://app.storyblok.com/f/storyblok-v2-latest.js"
      }
    ],
    [
      '@vue-storefront/nuxt',
      {
        useRawSource: {
          dev: ['@vue-storefront/storyblok'],
          prod: ['@vue-storefront/storyblok']
        }
      }
    ],
  ],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          currencies: ''
        },
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
