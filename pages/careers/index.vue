<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="careers-section">
        <div class="career-header-block">
          <h2 class="no-margin">
            <span
              v-marked="pageData.data.attributes.hero.intro"
              class="careers-marked"
            />
          </h2>
        </div>
        <CareersSliderSection :widget-data="pageData.data.attributes.slider" />
        <div class="openings-section">
          <div v-if="jobData.data.length >= 1" class="opening-header-block">
            <h1 class="no-margin">
              <strong>{{ pageData.data.attributes.openings.title }}</strong>
            </h1>
          </div>
          <div class="opening-inner-block">
            <div v-for="job in jobData.data" :key="job.id" class="role-block">
              <div>
                <div class="role-inner">
                  <div class="role">
                    {{ job.attributes.position }}
                  </div>
                  <div class="role-tag">
                    {{ job.attributes.department }}
                  </div>
                </div>
                <div class="role-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt in consectetur pharetra elit tincidunt.
                </div>
                <div class="role-inner">
                  <div class="role-type">
                    {{ job.attributes.type }}
                  </div>
                  <div class="role-location">
                    Lagos, Nigeria
                  </div>
                </div>
              </div>
              <nuxt-link
                :to="'/careers/' + job.attributes.slug"
                class="button career w-inline-block"
              >
                <div>Apply now</div>
              </nuxt-link>
            </div>
          </div>
          <div class="opening-prompt">
            <div v-html="pageData.data.attributes.outro" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  asyncData ({ store, error }) {
    const fetchWidgets = store.dispatch('fetchWidgets', {
      page: 'career?populate=*,hero,slider.featured_image,openings'
    })

    const fetchJobs = store.dispatch('fetchWidgets', {
      page: 'job-openings'
    })

    return Promise.all([fetchWidgets, fetchJobs])
      .then((responses) => {
        const [pageData, jobData] = responses

        return { pageData, jobData }
      })

      .catch(responseError => error(responseError))
  },

  head () {
    return {
      bodyAttrs: {
        class: 'body'
      },
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '622073dc511e8a3b020fe768',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },
  computed: {
    mediaUrl () {
      return process.env.mediaURL
    },

    meta () {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },
    description () {
      return 'As a social enterprise, we are always interested in talented individuals wanting to have social impact through their work. See our current openings here.'
    },
    title () {
      return 'Careers | HerVest'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.$cardLoopCareers()
  }
}
</script>

<style></style>
