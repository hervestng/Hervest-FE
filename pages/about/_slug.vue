<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="profile-section">
        <div class="profile-inner-block">
          <div class="profile-image-block">
            <img :src="avatar" loading="lazy" class="profile-image">
          </div>
          <div class="profile-divider" />
          <div class="profile-text-block">
            <div class="profile-details-block">
              <div>
                <h1 class="no-margin">
                  <strong>{{ singlePerson.full_name }}</strong><br>
                </h1>
                <h3 class="team-role">
                  {{ singlePerson.position }}<br>
                </h3>
              </div>
              <a
                target="_blank"
                :href="singlePerson.linkedin_url"
                class="linkedin-link w-inline-block"
              />
            </div>
            <div class="profile-text-wrapper">
              <h4>
                {{ singlePerson.content }}
              </h4>
            </div>
          </div>

          <nuxt-link class="back-button w-inline-block" to="/about#people">
            Back to About Us
          </nuxt-link>
        </div>
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
  async asyncData ({ store, params, route }) {
    const peopleData = await store.dispatch('fetchSinglePerson', {
      slug: params.slug
    })

    const {
      data: [{ attributes: singlePerson }]
    } = peopleData

    return { peopleData, singlePerson }
  },

  data () {
    return {}
  },

  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '621fe320fd32526330d4c753',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: this.singlePerson.full_name + ' | HerVest',
      meta: [...this.meta]
    }
  },

  computed: {
    mediaUrl () {
      return process.env.mediaURL
    },

    avatar () {
      return this.singlePerson.featured_image.data
        ? this.mediaUrl + this.singlePerson.featured_image.data.attributes.url
        : require('static/assets/images/defaultPerson.png')
    },

    meta () {
      return this.mxMetaUtils({
        title: this.singlePerson.full_name + ' | HerVest',
        description: this.singlePerson.content,
        url: `${process.env.baseURL}/about/${this.singlePerson.slug}`,
        mainImage: this.avatar
      })
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>

<style>
.profile-image {
  object-fit: cover;
  object-position: top;
}
</style>
