<template>
  <div>
    <NavBar />
    <div class="faq-section">
      <div class="faq-inner-block">
        <div class="faq-header-block">
          <div class="purple-text">
            FAQs
          </div>
          <h3 class="dark-purple-text no-margin">
            Have questions? We are here to help.
          </h3>
        </div>
        <div class="faq-block-wrapper">
          <div
            v-for="faq in pageData.data"
            :key="faq.id"
            class="faq-block"
            @click="faqToggle"
          >
            <div class="faq-block-inner">
              <div>{{ faq.attributes.title }}</div>
              <div class="expand-icon" />
            </div>
            <div class="faq-text-wrapper">
              <div>
                {{ faq.attributes.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-contact-block">
        <div class="question-image-container">
          <div class="question-image" />
          <div class="question-image left" />
          <div class="question-image right" />
        </div>
        <h2 class="no-margin">
          Still have questions ?
        </h2>
        <h4 class="no-margin">
          Can’t find the answer you’re looking for? Please reach out to us.
        </h4>
        <nuxt-link class="button vioelet w-inline-block" to="/contact">
          Get in touch
        </nuxt-link>
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
  asyncData ({ store, error }) {
    const fetchWidgets = store.dispatch('fetchWidgets', {
      page: 'questions'
    })
    return Promise.all([fetchWidgets])
      .then((responses) => {
        const [pageData] = responses
        return { pageData }
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
        'data-wf-page': '621fada536bafa61540961bb',
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
      return 'Have questions? Visit our FAQs page to get answers to questions about what we do and our service plans.'
    },

    title () {
      return 'FAQs | HerVest'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {}
}
</script>
