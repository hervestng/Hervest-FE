// Page mixin for a legal document in commons/legal/*.js.
// Usage: <LegalDocument :doc="doc" /> + mixins: [legalPage(doc)]
export default doc => ({
  data () {
    return { doc }
  },

  head () {
    const title = `${doc.title} | HerVest`

    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '622121c3197fa351c5b3a69c',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title,
      meta: [...this.mxMetaUtils({ title, description: doc.summary })]
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
})
