<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="privacy-wrapper">
        <div v-html="privacyContent.data.attributes.content" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}

export default {
  asyncData ({ store, params, error }) {
    const fetchPrivacy = store.dispatch('fetchWidgets', { page: 'privacy' })

    return Promise.all([fetchPrivacy])

      .then((responses) => {
        const [privacyContent] = responses

        return { privacyContent }
      })

      .catch(responseError => error(responseError))
  },

  data () {
    return {}
  },

  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '622121c3197fa351c5b3a69c',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },

  computed: {
    meta () {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },

    description () {
      return 'Read our privacy policy here and get to know how we collate and manage data on our platform.'
    },

    title () {
      return 'Privacy Policy | HerVest'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>
