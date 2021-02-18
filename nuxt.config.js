import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - teemo-client',
    title: 'teemo-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Teemo is the decentraline app that digitalizes assets onto blockchain platform in the easiest way',
      },
      { hid: 'author', name: 'author', content: 'Teemo' },
      { itemprop: 'image', content: '/favicon.ico' },
      { itemprop: 'name', content: 'Teemo | Decentraline app | Official Website | teemo.ai' },
      {
        itemprop: 'description',
        content: 'Teemo is the decentraline app that digitalizes assets onto blockchain platform in the easiest way.',
      },
      // Facebook
      { hid: 'og:site_name', name: 'og:site_name', content: 'Teemo - decentraline app' },
      { hid: 'og:type', name: 'og:type', content: 'article' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: '' },
      { hid: 'og:title', name: 'og:title', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { hid: 'og:url', name: 'og:url', content: '' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: '' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      { hid: 'twitter:title', name: 'twitter:title', content: '' },
      { hid: 'twitter:description', name: 'twitter:description', content: '' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,800;1,300;1,800&display=swap',
      },
    ],
  },

  // Global Server Middleware: https://nuxtjs.org/docs/2.x/concepts/server-side-rendering
  serverMiddleware: ['~/server-middleware/logger.ts'],

  // Global Environment: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
  env: {
    domain: 'https://teemo-ai.herokuapp.com/',
    ipfsGateway: 'https://gateway.pinata.cloud/',
    tokenUriPrefix: 'https://ipfs.daonomic.com',
    etherUrl: 'https://ropsten.etherscan.io/tx/',
    addressSigner: '0x9BB0cc524ab266471DAe56E62005593e1848362d',
    pinata: {
      api: '5b28debe2f3b277f4b52',
      secret: 'a6dbf9b90e0491dc1b8654ce90afad07b6ec5568e6de4e73266c74b13380f009',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    // https://go.nuxtjs.dev/toast
    '@nuxtjs/toast',
  ],

  // toast module configuration: https://github.com/nuxt-community/community-modules/tree/master/packages/toast
  toast: {
    position: 'right-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.ts' },
      { code: 'vi', iso: 'vi-VN', file: 'vi.ts' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'locales/',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://teemo-ai-service.herokuapp.com/',
    retry: { retries: 4 },
    headers: {
      'Content-Type': 'application/json',
      common: {
        Accept: 'application/json, text/plain, */*',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // https://nuxtjs.org/docs/2.x/features/loading
  loading: {
    color: 'blue',
    height: '5px',
    continuous: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
