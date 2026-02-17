export const IOS_STORE_URL = 'itms-apps://apps.apple.com/app/hervest-save-invest-loans/id1509714516'
export const ANDROID_STORE_URL = 'market://details?id=com.hervest'
export const IOS_WEB_URL = 'https://apps.apple.com/app/hervest-save-invest-loans/id1509714516'
export const ANDROID_WEB_URL = 'https://play.google.com/store/apps/details?id=com.hervest'

export const getRedirectUrl = (userAgent, { code, type } = {}) => {
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
  const isAndroid = /android/i.test(userAgent)

  if (isIOS) {
    return IOS_STORE_URL
  }

  if (isAndroid) {
    let url = ANDROID_STORE_URL
    if (code) {
      const source = type || 'website_redirect'
      // Google Play Store referrer: referrer=utm_source%3Dtest_source%26utm_content%3Dtest_content
      const referrer = `utm_source=${source}&utm_content=${code}`
      url += `&referrer=${encodeURIComponent(referrer)}`
    }
    return url
  }

  return null
}
