import jqueryLib from 'jquery'

// Append link with https
export const withHttp = (url, { https = true } = {}) => {
  if (typeof url !== 'string') {
    throw new TypeError(
      `Expected \`url\` to be of type \`string\`, got \`${typeof url}\``
    )
  }
  url = url.trim()

  if (url.includes('http://') || url.includes('https://')) {
    return url
  } else if (url.substring(0, 9) === 'localhost') {
    return 'http://' + url
  } else {
    return 'https://' + url
  }
}

// Remove Object Keys
export const removeKeys = (obj, keys) => {
  if (obj) {
    keys.forEach((key) => {
      if (Object.hasOwnProperty.call(obj, key)) {
        delete obj[key]
      }
    })

    return obj
  }
}

export const isValidURL = (url) => {
  let urlInstance
  try {
    urlInstance = new URL(url)
  } catch (_) {
    return false
  }
  return urlInstance.protocol === 'http:' || urlInstance.protocol === 'https:'
}

// InitWebflow
export const initWebflow = () => {
  setTimeout(() => {
    if (process.client) {
      jqueryLib(document).ready(function () {
        if (window.Webflow !== undefined) {
          window.Webflow.destroy()
          window.Webflow.ready()
          window.Webflow.require('ix2').init()
          window.Webflow.require('lottie').init()
          window.Webflow.require('slider').redraw()
          document.dispatchEvent(new Event('readystatechange'))
        }
      })
    }
  }, 1000)
}
export const deAssociate = (obj) => {
  return obj ? JSON.parse(JSON.stringify(obj)) : {}
}
