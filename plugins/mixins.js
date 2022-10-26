import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

import metaUtils from '@/commons/meta-utils'
const textVersion = require('textversionjs')

Vue.mixin(Vue2Filters.mixin)

Vue.mixin({
  computed: {
    mxDescription () {
      return 'HerVest is a digital platform providing financial inclusion for women through a Gender Lens Investment (GLI) approach.'
    },

    mediaUrl () {
      return process.env.mediaURL
    }
  },

  methods: {
    mxMetaUtils (meta) {
      if (!(meta && meta.url)) {
        meta.url = process.env.siteURL
      }
      // Ensures description doesn't contain html tags (160 characters)
      meta.description = textVersion(meta.description).substring(0, 157) + '...'

      return metaUtils(meta)
    },

    faqToggle (event) {
      event.currentTarget.classList.toggle('active')
      event.currentTarget.lastElementChild.classList.toggle('expanded')
      event.currentTarget.firstElementChild.lastElementChild.classList.toggle(
        'active'
      )
    }
  }
})
