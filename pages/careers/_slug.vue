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
        <div class="job-role-section">
          <div class="job-role-details">
            <div class="role-header-block">
              <h1 class="no-margin">
                <strong>{{ jobData.attributes.position }}</strong>
              </h1>
              <div class="job-description-role">
                <div class="role-type">
                  {{ jobData.attributes.type }}
                </div>
                <div class="role-location">
                  {{ jobData.attributes.location }}
                </div>
              </div>
            </div>
            <div class="opening-inner-block">
              <div class="job-role-block">
                <div
                  v-marked="jobData.attributes.content"
                  class="job-details-inner"
                />
              </div>

              <a
                :href="
                  'mailto:hello@hervest.ng?subject=Application for ' +
                    jobData.attributes.position
                "
                class="button job w-inline-block"
              >
                <div>Apply now</div>
              </a>
              <div class="social-link-wrapper jobs">
                <a
                  :href="footerData.data.attributes.footer.instagram_link"
                  target="_blank"
                  class="social-link w-inline-block"
                />
                <a
                  :href="footerData.data.attributes.footer.twitter_link"
                  target="_blank"
                  class="social-link tw w-inline-block"
                />
                <a
                  :href="footerData.data.attributes.footer.facebook_link"
                  target="_blank"
                  class="social-link fb w-inline-block"
                />
                <a
                  :href="footerData.data.attributes.footer.linkedin_link"
                  target="_blank"
                  class="social-link lk w-inline-block"
                />
                <a
                  :href="footerData.data.attributes.footer.telegram_link"
                  target="_blank"
                  class="social-link telegram w-inline-block"
                />
              </div>
            </div>
          </div>
          <div class="job-list-block">
            <div
              v-for="job in otherJobs.data"
              :key="job.id"
              class="job-list-inner"
            >
              <div>
                <div class="role-inner">
                  <div class="role-title">
                    {{ job.attributes.position }}
                  </div>
                </div>
                <div>
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt in consectetur pharetra elit tincidunt. -->
                </div>
                <div class="job-role-inner">
                  <div class="job-role-type">
                    {{ job.attributes.type }}
                  </div>
                  <div class="job-role-type">
                    {{ job.attributes.location }}
                  </div>
                </div>
              </div>
              <nuxt-link
                :to="'/careers/' + job.attributes.slug"
                aria-current="page"
                class="button job-role w-inline-block w--current"
              >
                VIEW OPENING
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  asyncData ({ store, params, error }) {
    const fetchJob = store.dispatch('fetchSingleJob', {
      slug: params.slug
    })
    const fetchCareersData = store.dispatch('fetchWidgets', {
      page: 'career?populate=*,hero,slider.featured_image,openings'
    })

    const fetchJobs = store.dispatch('fetchWidgets', {
      page: 'job-openings',
      'pagination[pageSize]': 8
    })

    const fetchFooter = store.dispatch('fetchWidgets', {
      page: 'widget?populate=*,footer'
    })

    return Promise.all([fetchJob, fetchCareersData, fetchJobs, fetchFooter])

      .then((responses) => {
        const [getJob, pageData, otherJobs, footerData] = responses
        const jobData = getJob.data[0]

        console.log(footerData.data.attributes.footer)

        return { jobData, pageData, otherJobs, footerData }
      })

      .catch(responseError => error(responseError))
  },

  data () {
    return {}
  },

  head () {
    return {
      bodyAttrs: {
        class: 'body'
      },
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '62691a87926d559e21968102',
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

<style lang="scss" scoped></style>
