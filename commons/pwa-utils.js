// pwa properties
const name = 'HerVest | Pioneering inclusive finance for the African woman.'
const shortName = 'HerVest'
const description =
  'HerVest is a digital platform providing financial inclusion for women through a Gender Lens Investment (GLI) approach.'

export const getManifest = (manifest) => {
  return {
    name: (manifest && manifest.name) || name,
    short_name: (manifest && manifest.short_name) || shortName,
    description: (manifest && manifest.description) || description,
    background_color: '#ffffff',
    theme_color: '#fb528d',
    lang: 'en'
  }
}
