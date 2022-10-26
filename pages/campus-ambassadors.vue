<template>
  <div>
    <div class="campus-ambassador">
      <NavBar />
      <div class="campus-section">
        <div>
          <div>{{ pageData.data.attributes.title }}</div>
        </div>
        <div>
          <h1 class="ambassadors-header-text">
            {{ pageData.data.attributes.description }}
          </h1>
        </div>
      </div>
    </div>
    <div class="campus-inner">
      <AmbassadorsPicturesSection
        :widget-data="pageData.data.attributes.slider.data"
      />
      <CampusTextSection :widget-data="pageData.data.attributes" />
      <CampusAboutSection :widget-data="pageData.data.attributes.block" />
      <ApprovedCampuses :widget-data="pageData.data.attributes.campus" />
      <CampusFAQs :widget-data="pageData.data.attributes" />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  asyncData ({ store, error }) {
    const fetchWidgets = store.dispatch('fetchWidgets', {
      page: 'campus?populate=*,slider,block.media,banner,campus.logos,faq.questions,faq.contact,application'
    })

    return Promise.all([fetchWidgets])
      .then((responses) => {
        const [pageData] = responses

        return { pageData }
      })

      .catch(responseError => error(responseError))
  },
  mounted () {
    this.$cardLoopCampus()
  }
}
</script>

<style lang="scss" scoped></style>
