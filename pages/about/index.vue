<template>
  <div>
    <NavBar />
    <div class="container">
      <AboutHeroSection :widget-data="pageData.data.attributes.about" />
      <Partners :widget-data="pageData.data.attributes.partners" />
      <WhoAreWeSection :widget-data="pageData.data.attributes.who_we_are" />
      <CardSection />
      <FinanceSection :widget-data="pageData.data.attributes.financial_info" />
      <AboutCommunityCTA :widget-data="pageData.data.attributes.tribe" />
      <FundingSection :widget-data="pageData.data.attributes.fundings" />
      <PeopleSection :widget-data="teamsData.data" />
    </div>
    <NewsLetterSection />
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
      page: 'about?populate=about,funding.details,partners,who_we_are,financial_info,tribe.featured_image,fundings.primary.featured_image,fundings.secondary.featured_image'
    })
    const fetchTeams = store.dispatch('fetchWidgets', {
      page: 'teams'
    })
    return Promise.all([fetchWidgets, fetchTeams])
      .then((responses) => {
        const [pageData, teamsData] = responses

        return { pageData, teamsData }
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
        'data-wf-page': '621e0013a304466460c13aba',
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
      return 'HerVest is a social enterprise providing financial inclusion for women through a Gender Lens approach'
    },

    title () {
      return 'About | HerVest'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>
