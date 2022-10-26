import { isValidURL } from '@/commons/utils'
// let requestConfig = {}

export default function ({ $axios, store, error: nuxtError }) {
  $axios.onRequest((config) => {
    // config.headers.Authorization = 'Bearer ' + store.getters.getAccessToken
    if (!isValidURL(config.url)) {
      if (!config.params) {
        config.params = {}
      }
      config.params.populate = '*'
    }
  })

  $axios.onResponse((response) => {
    // code
  })

  $axios.onError((error) => {
    if (error.response) {
      nuxtError({
        statusCode: error.response.status,
        message: error.message
      })
    } else {
      nuxtError({
        statusCode: error.status,
        message: error.message
      })
    }

    return Promise.resolve(false)
  })
}
