// js & cdn's

export default () => {
  return [
    {
      src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213ad50fd8a0f0805d56e75',
      type: 'text/javascript',
      integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
      crossorigin: 'anonymous'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
    },
    {
      src: '/js/override-alert.js',
      type: 'text/javascript'
    },
    {
      src: '/js/webflow.js',
      type: 'text/javascript',
      body: 'true'
    }
  ]
}
