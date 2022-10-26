import linkUtils from './commons/link-utils'
import scriptUtils from './commons/script-utils'
import metaUtils from './commons/meta-utils'
import * as pwaUtils from './commons/pwa-utils'
export default {
  ssr: true,
  target: 'static',

  env: {
    siteURL: process.env.SITE_URL,
    baseURL: process.env.BASE_URL,
    mediaURL: process.env.MEDIA_URL,
    serviceID: process.env.SERVICE_ID,
    templateID: process.env.TEMPLATE_ID,
    userID: process.env.USER_ID,
    token: process.env.TOKEN
  },

  generate: {
    fallback: true
  },

  head: {
    title: 'HerVest | Pioneering inclusive finance for the African woman.',
    meta: [...metaUtils()],
    link: [...linkUtils()],
    script: [...scriptUtils()]
  },
  trailingSlash: false,
  css: [],
  pageTransition: 'transition-page',

  plugins: [
    '@/plugins/mixins',
    '@/plugins/prototypes',
    '@/plugins/axios',
    '@/plugins/filters',
    '@/plugins/component.client',
    '@/plugins/directive.client',
    '@/plugins/spilde.client',
  ],

  components: [
    '@/components/includes/home',
    '@/components/partials',
    '@/components/includes/about',
    '@/components/includes/campus'
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'G-W614MQLK01'
    }]
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: process.env.BASE_URL
  },

  pwa: {
    manifest: pwaUtils.getManifest()
  },

  build: {
    transpile: ['gsap']
  },

  googleAnalytics: {
    id: 'G-W614MQLK01',
    autoTracking: {
      screenview: true
    }
    },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
  
}
