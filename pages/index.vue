<template>
  <div>
    <NavBar :is-home-page="true" />
    <HomeHero :widget-data="pageData.data.attributes.hero" />
    <Partners :widget-data="aboutPageData.data.attributes.partners" />
    <!-- <MissionSection /> -->
    <StatsSliderSection />
    <!-- <VisionSection :widget-data="pageData.data.attributes" /> -->
    <!-- <CommunitySection :widget-data="pageData.data.attributes.community" /> -->
    <CardSection />
    <TestimonialSection :widget-data="testimonials.data" />
    <AppSection />
    <SocialSection />
    <NewsSection />
    <!-- <NewsLetterSection /> -->
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
      page: 'home?populate=hero.slider.*,mission.*,vision.content.*,values.supportive,values.modern,values.accessibility,values.truthful,community.*'
    })
    const fetchTestimonials = store.dispatch('fetchWidgets', {
      page: 'testimonials'
    })
    const fetchAbout = store.dispatch('fetchWidgets', {
      page: 'about'
    })
    return Promise.all([fetchWidgets, fetchTestimonials, fetchAbout])
      .then((responses) => {
        const [pageData, testimonials, aboutPageData] = responses
        return { pageData, testimonials, aboutPageData }
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
        'data-wf-page': '6213ad50fd8a0f347dd56e77',
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
      return this.mxDescription
    },

    title () {
      return 'HerVest | Pioneering inclusive finance for the African woman.'
    }
  },

  mounted () {
    this.gsapMove()
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {
    gsapMove () {
      this.$gsap.to('.play-icon-wrapper', {
        scale: 1.1,
        repeat: -1,
        duration: 1.5,
        yoyo: true
      })

      this.$gsap.to('.play-icon-inner', {
        scale: 0.95,
        repeat: -1,
        duration: 1.5,
        yoyo: true
      })
      const missionSlide = document.querySelector('.mission-slider-inner')

      this.$gsap.to(missionSlide, {
        x: () => -(missionSlide.scrollWidth - window.innerWidth) + 'px',
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      })
      const socialSlide = document.querySelector('.social-slider')

      this.$gsap.to(socialSlide, {
        x: () => -(socialSlide.scrollWidth - window.innerWidth) + 'px',
        repeat: -1,
        duration: 45,
        yoyo: true,
        ease: 'none'
      })
    }
  }
}
</script>

<style scoped></style>
