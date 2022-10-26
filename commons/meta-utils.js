// meta tags
import { withHttp } from './utils'

const type = 'Website'
let url = process.env.SITE_URL
const title = 'HerVest | Pioneering inclusive finance for the African woman.'
const siteName = 'HerVest'
const description =
  'HerVest is a digital platform providing financial inclusion for women through a Gender Lens Investment (GLI) approach.'
let mainImage = '/webclip.png'
const twitterCard = 'summary_large_image' // summary, summary_large_image, app, or player.
const twitterHandle = '@Hervestng'

export default (meta) => {
  url = meta && meta.url ? withHttp(meta.url) : withHttp(url)
  if (meta && meta.mainImage) {
    mainImage = withHttp(meta.mainImage)
  } else if (
    !mainImage.includes('http://') &&
    !mainImage.includes('https://')
  ) {
    mainImage = url + mainImage
  }
  return [
    {
      charset: 'utf-8'
    },
    {
      name: 'theme-color',
      property: 'theme-color',
      content: '#fb528d'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url
    },
    {
      name: 'og:site_name',
      property: 'og:site_name',
      content: (meta && meta.site_name) || siteName
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: mainImage
    },
    {
      name: 'twitter:card',
      content: (meta && meta.twitterCard) || twitterCard
    },
    {
      name: 'twitter:site',
      content: (meta && meta.twitterSite) || twitterHandle
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: url
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: mainImage
    }
  ]
}
