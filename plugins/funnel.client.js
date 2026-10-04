// First-party journey tracking for the admin "User Journey" view.
//
// Sets the persistent device ID (`hv_did`, scoped to .hervest.ng so the web app
// at app.hervest.ng reads the same one), logs landing/page views and sign-up
// clicks, and forwards UTM params to the app so the campaign survives the hop.
// Best-effort: nothing here may ever break the page.

const DEVICE_COOKIE = 'hv_did'
const SESSION_KEY = 'hv_sid'
const FIRST_TOUCH_KEY = 'hv_first_touch'
const ATTRIBUTION_KEY = 'hervest_attribution' // same key/shape the web app reads
const TRACKED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid']
const TWO_YEARS = 60 * 60 * 24 * 365 * 2
const APP_HOST = 'app.hervest.ng'

const newId = () =>
  (window.crypto && window.crypto.randomUUID)
    ? window.crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`

const readCookie = (name) => {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return m ? decodeURIComponent(m[1]) : null
}

const getDeviceId = () => {
  try {
    let id = readCookie(DEVICE_COOKIE)
    if (!id) { try { id = localStorage.getItem(DEVICE_COOKIE) } catch (e) { /* blocked */ } }
    if (!id) { id = newId() }
    const host = location.hostname
    const domain = (host === 'hervest.ng' || host.endsWith('.hervest.ng')) ? '; domain=.hervest.ng' : ''
    const secure = location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${DEVICE_COOKIE}=${encodeURIComponent(id)}; path=/; max-age=${TWO_YEARS}; SameSite=Lax${domain}${secure}`
    try { localStorage.setItem(DEVICE_COOKIE, id) } catch (e) { /* ignore */ }
    return id
  } catch (e) {
    return null
  }
}

const getSessionId = () => {
  try {
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id) { id = newId(); sessionStorage.setItem(SESSION_KEY, id) }
    return id
  } catch (e) { return null }
}

const captureAttribution = () => {
  try {
    const params = new URLSearchParams(location.search)
    const found = {}
    TRACKED_PARAMS.forEach((k) => { if (params.get(k)) { found[k] = params.get(k) } })
    if (Object.keys(found).length) {
      localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({
        ...found,
        referrer: document.referrer || null,
        landing_page: location.href,
        captured_at: new Date().toISOString()
      }))
    }
  } catch (e) { /* ignore */ }
}

const getAttribution = () => {
  try { return JSON.parse(localStorage.getItem(ATTRIBUTION_KEY)) } catch (e) { return null }
}

const getFirstTouch = () => {
  try {
    const raw = localStorage.getItem(FIRST_TOUCH_KEY)
    if (raw) { return JSON.parse(raw) }
    const first = { referrer: document.referrer || null, landing_page: location.href }
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(first))
    return first
  } catch (e) { return { referrer: document.referrer || null, landing_page: location.href } }
}

export default function ({ app }) {
  const apiBase = process.env.funnelURL
  if (!apiBase) { return } // not configured for this environment

  const endpoint = `${apiBase.replace(/\/?$/, '/')}funnel/events`
  let queue = []
  let timer = null

  const flush = () => {
    timer = null
    if (!queue.length) { return }
    const deviceId = getDeviceId()
    if (!deviceId) { queue = []; return }
    const batch = queue.splice(0, 20)
    const first = getFirstTouch()
    const attribution = getAttribution()
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          device_id: deviceId,
          session_id: getSessionId(),
          platform: 'landing',
          referrer: first.referrer || undefined,
          landing_page: first.landing_page || undefined,
          attribution: attribution
            ? Object.fromEntries(TRACKED_PARAMS.filter(k => attribution[k]).map(k => [k, attribution[k]]))
            : undefined,
          events: batch
        })
      }).catch(() => {})
    } catch (e) { /* ignore */ }
    if (queue.length) { timer = setTimeout(flush, 0) }
  }

  const track = (event, props, route) => {
    queue.push({ event, route: route || location.pathname, ts: Date.now(), props })
    if (!timer) { timer = setTimeout(flush, 1500) }
  }

  captureAttribution()
  getDeviceId()

  // First page of the browsing session is the "landing"; later ones are page views.
  let firstPage = true
  app.router.afterEach((to) => {
    let isLanding = firstPage
    try {
      if (isLanding) {
        isLanding = !sessionStorage.getItem('hv_landed')
        sessionStorage.setItem('hv_landed', '1')
      }
    } catch (e) { /* ignore */ }
    firstPage = false
    track(isLanding ? 'landing_view' : 'page_view', undefined, to.path)
  })

  const classify = (a) => {
    let url
    try { url = new URL(a.href, location.href) } catch (e) { return null }
    const text = (a.textContent || '').trim().slice(0, 60)
    const isSignupClass = /signup|create-account/i.test(a.className || '')
    if (url.hostname === APP_HOST && url.pathname.startsWith('/register')) { return { event: 'signup_cta_click', props: { cta: text || 'sign_up' } } }
    if (url.hostname.endsWith('app.link') || isSignupClass) { return { event: 'signup_cta_click', props: { cta: text || 'create_account' } } }
    if (url.hostname === 'play.google.com') { return { event: 'app_store_click', props: { store: 'google_play' } } }
    if (url.hostname === 'apps.apple.com') { return { event: 'app_store_click', props: { store: 'app_store' } } }
    if (url.hostname === APP_HOST) { return { event: 'cta_click', props: { cta: 'login' } } }
    if (url.hostname === 'loan.hervest.ng') { return { event: 'cta_click', props: { cta: 'loan' } } }
    return null
  }

  const onAnchorActivate = (e) => {
    try {
      const a = e.target && e.target.closest && e.target.closest('a[href]')
      if (!a) { return }
      const hit = classify(a)
      if (hit) { track(hit.event, hit.props) }

      // Carry the campaign into the app, which is a different origin and can't read our storage.
      const url = new URL(a.href, location.href)
      if (url.hostname === APP_HOST) {
        const attribution = getAttribution()
        if (attribution) {
          TRACKED_PARAMS.forEach((k) => {
            if (attribution[k] && !url.searchParams.has(k)) { url.searchParams.set(k, attribution[k]) }
          })
          a.href = url.toString()
        }
      }
    } catch (err) { /* ignore */ }
  }
  document.addEventListener('click', onAnchorActivate, true)
  document.addEventListener('auxclick', onAnchorActivate, true)

  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { flush() } })
  window.addEventListener('pagehide', flush)
}
